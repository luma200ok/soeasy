import { test, expect } from "../../fixtures";
import { LoginPage } from "../../pages/LoginPage";

test.describe("로그인", () => {
  test.describe("성공 케이스", () => {
    test("유효한 이메일·비밀번호로 로그인하면 홈으로 리디렉션된다", async ({ page }) => {
      // TODO: 구현
      void page;
    });

    test("로그인 후 헤더에 로그아웃 버튼이 표시된다", async ({ page }) => {
      // TODO: 구현
      void page;
    });
  });

  test.describe("실패 케이스", () => {
    test("잘못된 비밀번호 입력 시 에러 메시지가 표시된다", async ({ page }) => {
      // TODO: 구현
      void page;
    });

    test("존재하지 않는 이메일 입력 시 에러 메시지가 표시된다", async ({ page }) => {
      // TODO: 구현
      void page;
    });

    test("이메일 미입력 시 HTML 유효성 검사 에러가 발생한다", async ({ page }) => {
      // TODO: 구현
      void page;
    });
  });

  // suppress unused import warning
  void LoginPage;
  void expect;
});
