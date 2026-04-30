import { Page } from "@playwright/test";

/**
 * 인증 관련 헬퍼 함수 모음
 *
 * - 테스트 계정 로그인 / 로그아웃
 * - 로그인 상태 확인
 */

/** 테스트 계정으로 UI를 통해 로그인 */
export async function loginViaUI(page: Page, email: string, password: string): Promise<void> {
  // TODO: 구현
  void page;
  void email;
  void password;
}

/** 현재 페이지가 로그인된 상태인지 확인 */
export async function isLoggedIn(_page: Page): Promise<boolean> {
  // TODO: 헤더의 로그아웃 버튼 또는 프로필 요소 존재 여부로 판단
  return false;
}

/** 로그아웃 */
export async function logout(_page: Page): Promise<void> {
  // TODO: 구현
}
