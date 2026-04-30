import { Page } from "@playwright/test";

/**
 * Page Object Model — 회원가입 페이지 (/register)
 *
 * 담당 영역:
 * - 이메일 / 비밀번호 / 비밀번호 확인 입력 폼
 * - 회원가입 버튼
 * - 에러 / 성공 메시지
 * - 로그인 링크
 */
export class RegisterPage {
  readonly page: Page;

  // --- 폼 필드 ---
  // TODO: emailInput, passwordInput, passwordConfirmInput locator 정의

  // --- 버튼 ---
  // TODO: submitButton locator 정의

  // --- 피드백 ---
  // TODO: errorMessage, successMessage locator 정의

  constructor(page: Page) {
    this.page = page;
  }

  /** 회원가입 페이지로 이동 */
  async goto(): Promise<void> {
    // TODO: 구현
  }

  /** 폼 입력 후 회원가입 제출 */
  async register(_email: string, _password: string, _passwordConfirm: string): Promise<void> {
    // TODO: 구현
  }

  /** 에러 메시지 텍스트 반환 */
  async getErrorMessage(): Promise<string> {
    // TODO: 구현
    return "";
  }

  /** 성공 메시지 텍스트 반환 */
  async getSuccessMessage(): Promise<string> {
    // TODO: 구현
    return "";
  }
}
