import { chromium, FullConfig } from "@playwright/test";
import path from "path";

/**
 * 전체 테스트 스위트 시작 전 1회 실행됩니다.
 *
 * 역할:
 * - 테스트 계정으로 로그인 후 인증 상태(storageState)를 e2e/.auth/user.json 에 저장
 * - 이후 `chromium:auth` 프로젝트의 모든 테스트는 이 파일을 재사용해 로그인 반복을 피함
 *
 * 테스트 계정 정보는 .env.test.local 에서 관리합니다.
 *   E2E_TEST_EMAIL=...
 *   E2E_TEST_PASSWORD=...
 */
async function globalSetup(_config: FullConfig) {
  // TODO: 로그인 로직 구현
  // 1. chromium 브라우저 실행
  // 2. /login 페이지에서 테스트 계정으로 로그인
  // 3. storageState 를 AUTH_FILE 경로에 저장
  // 4. 브라우저 종료
}

export default globalSetup;
