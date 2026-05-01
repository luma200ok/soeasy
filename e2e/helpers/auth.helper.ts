import { Page } from "@playwright/test";

/** 테스트 계정으로 UI를 통해 로그인 */
export async function loginViaUI(
  page: Page,
  email = process.env.E2E_TEST_EMAIL!,
  password = process.env.E2E_TEST_PASSWORD!
): Promise<void> {
  await page.goto("/login");
  await page.locator('[data-testid="email-input"]').fill(email);
  await page.locator('[data-testid="password-input"]').fill(password);
  await page.locator('[data-testid="login-submit"]').click();
  await page.waitForURL("/");
}

/** 현재 페이지가 로그인된 상태인지 확인 */
export async function isLoggedIn(page: Page): Promise<boolean> {
  return page.locator('[data-testid="logout-btn"]').isVisible();
}

/** 로그아웃 */
export async function logout(page: Page): Promise<void> {
  await page.locator('[data-testid="logout-btn"]').click();
  await page.waitForURL("/login");
}
