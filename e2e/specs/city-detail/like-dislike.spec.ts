import { test, expect } from "../../fixtures";
import { CityDetailPage } from "../../pages/CityDetailPage";

test.describe("도시 상세 — 좋아요/싫어요", () => {
  test.describe("비로그인 상태", () => {
    test("좋아요 버튼 클릭 시 로그인 페이지로 리디렉션된다", async ({ page }) => {
      // TODO: 구현
      void page;
    });

    test("싫어요 버튼 클릭 시 로그인 페이지로 리디렉션된다", async ({ page }) => {
      // TODO: 구현
      void page;
    });
  });

  test.describe("로그인 상태", () => {
    test("좋아요 버튼 클릭 시 좋아요 수가 1 증가한다", async ({ authenticatedPage }) => {
      // TODO: 구현
      void authenticatedPage;
    });

    test("싫어요 버튼 클릭 시 싫어요 수가 1 증가한다", async ({ authenticatedPage }) => {
      // TODO: 구현
      void authenticatedPage;
    });

    test("좋아요 상태에서 다시 클릭하면 취소된다 (토글)", async ({ authenticatedPage }) => {
      // TODO: 구현
      void authenticatedPage;
    });

    test("좋아요 후 싫어요 클릭 시 좋아요가 취소되고 싫어요로 전환된다", async ({ authenticatedPage }) => {
      // TODO: 구현
      void authenticatedPage;
    });
  });

  // suppress unused import warning
  void CityDetailPage;
  void expect;
});
