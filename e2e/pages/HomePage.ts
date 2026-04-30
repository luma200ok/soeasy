import { Page, Locator } from "@playwright/test";

/**
 * Page Object Model — 홈 페이지 (/)
 *
 * 담당 영역:
 * - 히어로 섹션
 * - 필터 바 (budget / region / environment / season)
 * - 도시 카드 그리드
 * - 더보기 버튼
 * - 사이드바 위젯 (체크인, 최근 리뷰, 월간 통계)
 */
export class HomePage {
  readonly page: Page;

  // --- 히어로 ---
  // TODO: heroTitle, heroDescription locator 정의

  // --- 필터 바 ---
  // TODO: budgetSelect, regionSelect, environmentSelect, seasonSelect locator 정의

  // --- 도시 그리드 ---
  // TODO: cityCards, loadMoreButton locator 정의

  // --- 사이드바 ---
  // TODO: checkInWidget, recentReviewsWidget, monthlyStatsWidget locator 정의

  constructor(page: Page) {
    this.page = page;
  }

  /** 홈 페이지로 이동 */
  async goto(params?: Record<string, string>) {
    // TODO: 구현
    void params;
  }

  /** 도시 카드 개수 반환 */
  async getCityCardCount(): Promise<number> {
    // TODO: 구현
    return 0;
  }

  /** 특정 도시 카드 클릭 */
  async clickCityCard(_cityName: string): Promise<void> {
    // TODO: 구현
  }

  /** 더보기 버튼 클릭 */
  async clickLoadMore(): Promise<void> {
    // TODO: 구현
  }

  /** 필터 변경 */
  async applyFilter(_key: "budget" | "region" | "environment" | "season", _value: string): Promise<void> {
    // TODO: 구현
  }
}
