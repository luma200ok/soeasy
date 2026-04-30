/**
 * Supabase 직접 접근 헬퍼 (테스트 데이터 관리용)
 *
 * 테스트에서 생성한 데이터를 teardown 시 정리하거나
 * 사전 조건 데이터를 삽입할 때 사용합니다.
 *
 * 주의: 반드시 테스트 환경(SUPABASE_SERVICE_ROLE_KEY)에서만 실행
 */

/** 테스트 계정이 작성한 리뷰 전체 삭제 */
export async function deleteTestReviews(_userEmail: string): Promise<void> {
  // TODO: supabase admin client로 구현
}

/** 테스트 계정이 남긴 좋아요/싫어요 전체 삭제 */
export async function deleteTestLikes(_userEmail: string): Promise<void> {
  // TODO: supabase admin client로 구현
}

/** 특정 도시의 리뷰 수 조회 (검증용) */
export async function getReviewCountForCity(_citySlug: string): Promise<number> {
  // TODO: 구현
  return 0;
}
