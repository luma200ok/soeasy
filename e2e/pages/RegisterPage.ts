import { Page, Locator } from "@playwright/test";

/**
 * Page Object Model — 회원가입 페이지 (/register)
 */
export class RegisterPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly passwordConfirmInput: Locator;
  readonly submitButton: Locator;
  readonly errorMessage: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('[data-testid="email-input"]');
    this.passwordInput = page.locator('[data-testid="password-input"]');
    this.passwordConfirmInput = page.locator('[data-testid="password-confirm-input"]');
    this.submitButton = page.locator('[data-testid="register-submit"]');
    this.errorMessage = page.locator("p.text-red-500");
    this.successMessage = page.locator("h2");
  }

  async goto(): Promise<void> {
    await this.page.goto("/register");
    await this.page.waitForLoadState("networkidle");
  }

  async register(email: string, password: string, passwordConfirm: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.passwordConfirmInput.fill(passwordConfirm);
    await this.submitButton.click();
  }

  async getErrorMessage(): Promise<string> {
    await this.errorMessage.waitFor({ state: "visible" });
    return this.errorMessage.textContent() ?? "";
  }

  async getSuccessMessage(): Promise<string> {
    await this.successMessage.waitFor({ state: "visible" });
    return this.successMessage.textContent() ?? "";
  }
}
