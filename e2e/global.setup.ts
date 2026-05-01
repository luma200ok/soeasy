import { chromium, FullConfig } from "@playwright/test";
import path from "path";
import fs from "fs";

/**
 * 전체 테스트 스위트 시작 전 1회 실행됩니다.
 *
 * 역할:
 * - 테스트 계정으로 로그인 후 인증 상태(storageState)를 e2e/.auth/user.json 에 저장
 * - 이후 `chromium:auth` 프로젝트의 모든 테스트는 이 파일을 재사용해 로그인 반복을 피함
 *
 * 테스트 계정 정보는 환경변수(또는 .env.test.local)에서 관리합니다.
 *   E2E_TEST_EMAIL=...
 *   E2E_TEST_PASSWORD=...
 */

export const AUTH_FILE = path.join(__dirname, ".auth/user.json");

async function globalSetup(_config: FullConfig) {
  const email = process.env.E2E_TEST_EMAIL;
  const password = process.env.E2E_TEST_PASSWORD;
  const baseURL = process.env.BASE_URL ?? "http://localhost:3000";

  if (!email || !password) {
    throw new Error(
      "E2E_TEST_EMAIL, E2E_TEST_PASSWORD 환경변수가 설정되지 않았습니다."
    );
  }

  // .auth 디렉터리 생성 (없으면)
  fs.mkdirSync(path.dirname(AUTH_FILE), { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // 로그인 페이지에서 인증
  await page.goto(`${baseURL}/login`);
  await page.locator('[data-testid="email-input"]').fill(email);
  await page.locator('[data-testid="password-input"]').fill(password);
  await page.locator('[data-testid="login-submit"]').click();

  // 홈으로 리디렉션될 때까지 대기
  await page.waitForURL(`${baseURL}/`, { timeout: 30_000 });

  // storageState 저장
  await context.storageState({ path: AUTH_FILE });

  await browser.close();
}

export default globalSetup;
