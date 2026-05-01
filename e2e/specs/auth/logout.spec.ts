import { test, expect } from "../../fixtures";
import { logout } from "../../helpers/auth.helper";

test.describe("로그아웃", () => {
  test("로그아웃 버튼 클릭 시 로그인 페이지로 리디렉션된다", async ({ authenticatedPage }) => {
    await authenticatedPage.goto("/");
    await logout(authenticatedPage);
    await expect(authenticatedPage).toHaveURL("/login");
  });

  test("로그아웃 후 헤더에 로그인 버튼이 표시된다", async ({ authenticatedPage }) => {
    await authenticatedPage.goto("/");
    await logout(authenticatedPage);
    await expect(authenticatedPage.locator('[data-testid="login-btn"]')).toBeVisible();
  });

  test("로그아웃 후 로그아웃 버튼이 사라진다", async ({ authenticatedPage }) => {
    await authenticatedPage.goto("/");
    await logout(authenticatedPage);
    await expect(authenticatedPage.locator('[data-testid="logout-btn"]')).not.toBeVisible();
  });
});
