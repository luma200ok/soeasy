import { test, expect } from "../../fixtures";
import { RegisterPage } from "../../pages/RegisterPage";

test.describe("회원가입", () => {
  test.describe("성공 케이스", () => {
    test("유효한 정보 입력 후 회원가입하면 이메일 확인 안내 메시지가 표시된다", async ({ page }) => {
      // TODO: 구현
      void page;
    });
  });

  test.describe("실패 케이스", () => {
    test("비밀번호 불일치 시 에러 메시지가 표시된다", async ({ page }) => {
      // TODO: 구현
      void page;
    });

    test("이미 가입된 이메일 입력 시 에러 메시지가 표시된다", async ({ page }) => {
      // TODO: 구현
      void page;
    });

    test("이메일 형식이 잘못된 경우 에러 메시지가 표시된다", async ({ page }) => {
      // TODO: 구현
      void page;
    });
  });

  // suppress unused import warning
  void RegisterPage;
  void expect;
});
