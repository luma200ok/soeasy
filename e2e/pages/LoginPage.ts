import { Page } from "@playwright/test";

/**
 * Page Object Model — 로그인 페이지 (/login)
 *
 * 담당 영역:
 * - 이메일 / 비밀번호 입력 폼
 * - 로그인 버튼
 * - 에러 메시지
 * - 회원가입 링크
 */
export class LoginPage {
  readonly page: Page;

  // --- 폼 필드 ---
  // TODO: emailInput, passwordInput locator 정의

  // --- 버튼 ---
  // TODO: submitButton locator 정의

  // --- 피드백 ---
  // TODO: errorMessage, successMessage locator 정의

  constructor(page: Page) {
    this.page = page;
  }

  /** 로그인 페이지로 이동 */
  async goto(): Promise<void> {
    // TODO: 구현
  }

  /** 이메일 + 비밀번호 입력 후 로그인 */
  async login(_email: string, _password: string): Promise<void> {
    // TODO: 구현
  }

  /** 에러 메시지 텍스트 반환 */
  async getErrorMessage(): Promise<string> {
    // TODO: 구현
    return "";
  }
}
