import { test as base, Page } from "@playwright/test";
import { AUTH_FILE } from "../../playwright.config";

/**
 * 인증 상태 Fixture
 *
 * - `authenticatedPage` : global.setup 에서 저장한 storageState 를 로드해
 *   로그인된 상태의 Page 를 제공합니다.
 *
 * 사용법:
 *   import { test } from "../../fixtures";
 *   test("로그인 후 리뷰 작성", async ({ authenticatedPage }) => { ... });
 */

type AuthFixtures = {
  authenticatedPage: Page;
};

export const test = base.extend<AuthFixtures>({
  authenticatedPage: async ({ browser }, use) => {
    // global.setup 에서 저장한 storageState 로 새 컨텍스트 생성
    const context = await browser.newContext({ storageState: AUTH_FILE });
    const page = await context.newPage();
    await use(page);
    await context.close();
  },
});

export { expect } from "@playwright/test";
