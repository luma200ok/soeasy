import { test, expect } from "../../fixtures";
import { CityDetailPage } from "../../pages/CityDetailPage";

test.describe("도시 상세 — 리뷰", () => {
  test.describe("리뷰 목록 조회 (비로그인)", () => {
    test("기존 리뷰 목록이 렌더링된다", async ({ page }) => {
      // TODO: 구현
      void page;
    });

    test("리뷰가 없을 때 빈 상태 메시지가 표시된다", async ({ page }) => {
      // TODO: 구현
      void page;
    });
  });

  test.describe("리뷰 작성 (로그인)", () => {
    test("리뷰 내용 입력 후 제출하면 목록에 추가된다", async ({ authenticatedPage }) => {
      // TODO: 구현
      void authenticatedPage;
    });

    test("리뷰 내용 미입력 시 제출이 차단된다", async ({ authenticatedPage }) => {
      // TODO: 구현
      void authenticatedPage;
    });

    test("닉네임 없이 제출하면 익명으로 표시된다", async ({ authenticatedPage }) => {
      // TODO: 구현
      void authenticatedPage;
    });

    test("닉네임 입력 시 해당 닉네임으로 리뷰가 표시된다", async ({ authenticatedPage }) => {
      // TODO: 구현
      void authenticatedPage;
    });
  });

  // suppress unused import warning
  void CityDetailPage;
  void expect;
});
