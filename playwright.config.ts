import { defineConfig, devices } from "@playwright/test";
import path from "path";

/**
 * 테스트 전용 환경변수는 .env.test.local 에서 관리합니다.
 * @see https://playwright.dev/docs/test-configuration
 */

export const AUTH_FILE = path.join(__dirname, "e2e/.auth/user.json");

export default defineConfig({
  testDir: "./e2e/specs",

  /* 테스트 파일 간 완전 병렬 실행 */
  fullyParallel: true,

  /* CI에서 test.only 실수 방지 */
  forbidOnly: !!process.env.CI,

  /* 각 테스트 최대 실행 시간 */
  timeout: 30_000,

  /* expect() 단언 최대 대기 시간 */
  expect: { timeout: 5_000 },

  /* 실패 시 재시도 (CI에서만 2회) */
  retries: process.env.CI ? 2 : 0,

  /* 병렬 워커 수 (CI에서는 1로 고정해 리소스 절약) */
  workers: process.env.CI ? 1 : undefined,

  /* 리포터 */
  reporter: process.env.CI
    ? [
        ["html", { outputFolder: "playwright-report", open: "never" }],
        ["junit", { outputFile: "playwright-results.xml" }],
        ["github"],
      ]
    : [
        ["html", { outputFolder: "playwright-report", open: "never" }],
        ["list"],
      ],

  /* 모든 테스트에 공통 적용되는 설정 */
  use: {
    baseURL: process.env.BASE_URL ?? "http://localhost:3000",

    /* 개별 액션 타임아웃 */
    actionTimeout: 10_000,

    /* 페이지 이동 타임아웃 */
    navigationTimeout: 30_000,

    /* 실패 시만 스크린샷 캡처 */
    screenshot: "only-on-failure",

    /* 첫 재시도 시 trace 수집 (step-by-step 재현용) */
    trace: "on-first-retry",

    /* 첫 재시도 시 비디오 녹화 */
    video: "on-first-retry",
  },

  /* 테스트 전체 시작 전 1회 (로그인 → storageState 저장) */
  globalSetup: "./e2e/global.setup.ts",

  /* 테스트 전체 종료 후 1회 (테스트 데이터 정리) */
  globalTeardown: "./e2e/global.teardown.ts",

  projects: [
    /* ① storageState 생성 — 다른 프로젝트가 depends */
    {
      name: "setup",
      testMatch: /global\.setup\.ts/,
    },

    /* ② 비로그인 테스트 (로그인·회원가입·홈·도시 기본 정보 등) */
    {
      name: "chromium:guest",
      use: { ...devices["Desktop Chrome"] },
      testMatch: /specs\/(auth|home|city-detail)\/.+\.spec\.ts/,
    },

    /* ③ 로그인 상태가 필요한 테스트 (좋아요·리뷰 등) */
    {
      name: "chromium:auth",
      use: {
        ...devices["Desktop Chrome"],
        storageState: AUTH_FILE,
      },
      dependencies: ["setup"],
      testMatch: /specs\/(city-detail)\/.+\.spec\.ts/,
    },

    /*
     * 멀티브라우저 — 필요 시 주석 해제
     * CI 비용 고려해 기본은 Chrome만 실행
     *
     * { name: "firefox:guest", use: { ...devices["Desktop Firefox"] }, testMatch: /specs\/(auth|home)\/.+\.spec\.ts/ },
     * { name: "webkit:guest",  use: { ...devices["Desktop Safari"] },  testMatch: /specs\/(auth|home)\/.+\.spec\.ts/ },
     * { name: "mobile-chrome", use: { ...devices["Pixel 5"] },         testMatch: /specs\/home\/.+\.spec\.ts/ },
     */
  ],

  /* 테스트 실행 전 dev 서버 자동 시작 */
  webServer: {
    command: "npm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },

  /* 아티팩트 저장 경로 */
  outputDir: "test-results",
});
