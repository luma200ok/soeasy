import { Page } from "@playwright/test";

/**
 * Page Object Model — 도시 상세 페이지 (/city/[slug])
 *
 * 담당 영역:
 * - 도시 기본 정보 (이름, 설명, 이미지)
 * - 좋아요 / 싫어요 버튼
 * - 리뷰 목록
 * - 리뷰 작성 폼
 */
export class CityDetailPage {
  readonly page: Page;

  // --- 도시 정보 ---
  // TODO: cityName, cityDescription, cityImage locator 정의

  // --- 좋아요/싫어요 ---
  // TODO: likeButton, dislikeButton, likeCount, dislikeCount locator 정의

  // --- 리뷰 ---
  // TODO: reviewList, reviewItems, reviewForm locator 정의
  // TODO: reviewContentInput, reviewNicknameInput, reviewSubmitButton locator 정의

  constructor(page: Page) {
    this.page = page;
  }

  /** 도시 상세 페이지로 이동 */
  async goto(_slug: string): Promise<void> {
    // TODO: 구현
  }

  /** 좋아요 버튼 클릭 */
  async clickLike(): Promise<void> {
    // TODO: 구현
  }

  /** 싫어요 버튼 클릭 */
  async clickDislike(): Promise<void> {
    // TODO: 구현
  }

  /** 좋아요 수 반환 */
  async getLikeCount(): Promise<number> {
    // TODO: 구현
    return 0;
  }

  /** 싫어요 수 반환 */
  async getDislikeCount(): Promise<number> {
    // TODO: 구현
    return 0;
  }

  /** 리뷰 작성 후 제출 */
  async submitReview(_content: string, _nickname?: string): Promise<void> {
    // TODO: 구현
  }

  /** 리뷰 개수 반환 */
  async getReviewCount(): Promise<number> {
    // TODO: 구현
    return 0;
  }

  /** 특정 텍스트가 포함된 리뷰 존재 여부 */
  async hasReviewWithText(_text: string): Promise<boolean> {
    // TODO: 구현
    return false;
  }
}
