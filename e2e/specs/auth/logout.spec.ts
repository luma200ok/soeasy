import { test, expect } from "@playwright/test";
import { loginViaUI, logout } from "../../helpers/auth.helper";

/**
 * 로그아웃 테스트
 *
 * 주의:
 * - storageState(authenticatedPage)를 사용하지 않고 매 테스트마다 UI 로그인합니다.
 * - 한 테스트에서 signOut() 호출 시 서버 세션이 무효화될 수 있어
 *   다음 테스트가 같은 storageState 를 재사용하면 깨집니다.
 */
test.describe("로그아웃", () => {
  test.beforeEach(async ({ page }) => {
    await loginViaUI(page);
    // 서버 사이드 Header 가 user 를 인식할 때까지 대기
    await page.locator('[data-testid="logout-btn"]').waitFor({
      state: "visible",
      timeout: 15_000,
    });
  });

  test("로그아웃 버튼 클릭 시 로그인 페이지로 리디렉션된다", async ({ page }) => {
    await logout(page);
    await expect(page).toHaveURL("/login");
  });

  test("로그아웃 후 헤더에 로그인 버튼이 표시된다", async ({ page }) => {
    await logout(page);
    await expect(page.locator('[data-testid="login-btn"]')).toBeVisible();
  });

  test("로그아웃 후 로그아웃 버튼이 사라진다", async ({ page }) => {
    await logout(page);
    await expect(page.locator('[data-testid="logout-btn"]')).not.toBeVisible();
  });
});
