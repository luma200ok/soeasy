import { FullConfig } from "@playwright/test";

/**
 * 전체 테스트 스위트 종료 후 1회 실행됩니다.
 *
 * 역할:
 * - 테스트 중 생성된 DB 데이터 정리 (리뷰, 좋아요 등)
 * - 테스트 계정의 세션 무효화
 *
 * 주의: CI 환경에서는 테스트 DB를 사용하므로 운영 DB에 영향 없음
 */
async function globalTeardown(_config: FullConfig) {
  // TODO: 테스트 데이터 정리 로직 구현
  // 1. supabase.helper 를 통해 테스트 계정이 생성한 리뷰/좋아요 삭제
}

export default globalTeardown;
