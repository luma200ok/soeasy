# 도시 상세 페이지 구현 계획

**CRITICAL INSTRUCTIONS**: 각 Phase 완료 후:
1. ✅ 완료된 항목 체크
2. 🧪 품질 게이트 검증 명령 실행
3. ⚠️ 모든 항목 통과 확인
4. ➡️ 통과 후에만 다음 Phase 진행

⛔ 품질 게이트를 건너뛰거나 실패한 상태로 진행 금지

---

**Last Updated**: 2026-04-29
**Status**: 계획 수립 완료, 작업 대기 중

---

## 개요

도시 카드를 클릭했을 때 이동하는 `/cities/[id]` 상세 페이지를 구현한다.
상세 페이지에는 도시 소개 텍스트, 주요 명소/카페, 월 생활비 상세 breakdown, 유저 리뷰, 연관 도시 추천이 포함된다.

### 목표
- CityCard 클릭 → `/cities/[id]` 라우팅
- 도시별 상세 정보 표시 (소개, 명소, 비용, 리뷰)
- 하단 연관 도시 추천 섹션

### 영향 범위: Medium (3 Phase, 예상 5~7h)

---

## Phase 1 — 데이터 확장 & 라우팅 연결

**목표**: CityCard 클릭 시 상세 페이지로 이동하는 기본 틀 완성. 이 Phase 완료 후 `/cities/1` 접근 시 기본 정보가 표시되어야 함.

**예상 소요**: 1.5h

### 작업 목록

**mock-data 확장 (`lib/mock-data.ts`)**
- [ ] `City` 인터페이스에 필드 추가
  - [ ] `description: string` — 도시 소개 텍스트 (2~3줄)
  - [ ] `spots: Array<{ name: string; category: '카페' | '코워킹' | '명소'; description: string }>` — 주요 명소/카페
  - [ ] `monthlyCostDetail: { housing: number; food: number; transport: number; etc: number }` — 항목별 비용 (단위: 만원)
- [ ] 9개 도시 모두 신규 필드 데이터 채우기
- [ ] `mockReviews`에 각 도시 리뷰 2~3개씩 추가 (현재 3개 → 18개 이상)

**CityCard 클릭 연결 (`components/cards/CityCard.tsx`)**
- [ ] `next/link`의 `Link` import 추가
- [ ] 카드 전체를 `<Link href={/cities/${city.id}}>` 로 감싸기
- [ ] LikeDislikeButton에 `e.preventDefault()` / `e.stopPropagation()` 추가 (카드 클릭과 분리)

**상세 페이지 기본 틀 생성 (`app/cities/[id]/page.tsx`)**
- [ ] Next.js App Router 동적 라우트 파일 생성
- [ ] `params.id`로 `mockCities`에서 도시 탐색, 없으면 `notFound()` 처리
- [ ] 히어로 이미지 (full-width, h-72)
- [ ] 도시명 / 도/광역시 / 예산 배지 표시
- [ ] 예산 · 지역 · 환경 · 최고계절 Key-Value 그리드 (CityCard와 동일 패턴)
- [ ] 좋아요/싫어요 버튼 (LikeDislikeButton 재사용)
- [ ] 뒤로 가기 버튼 (`router.back()` 또는 `<Link href="/">`)

### 품질 게이트
- [ ] `npx tsc --noEmit` 타입 오류 없음
- [ ] 홈에서 카드 클릭 시 `/cities/[id]` 페이지로 이동
- [ ] `/cities/999` (없는 id) 접근 시 404 처리
- [ ] LikeDislikeButton 클릭 시 페이지 이동하지 않음

---

## Phase 2 — 상세 섹션 구현

**목표**: 도시 소개 텍스트, 주요 명소/카페, 월 생활비 breakdown 섹션 완성.

**예상 소요**: 2h

**의존성**: Phase 1 완료 (mock-data 확장 필드 필요)

### 작업 목록

**도시 소개 섹션**
- [ ] `<section>` — 도시 설명 텍스트 (`city.description`)
- [ ] 타이포그래피: 제목 `text-lg font-semibold`, 본문 `text-slate-600 leading-relaxed`

**주요 명소/카페 섹션**
- [ ] `<section>` — "주요 명소 & 카페" 제목
- [ ] `city.spots` 배열을 카드 또는 리스트로 렌더링
  - [ ] 카테고리 배지 (`카페` → 초록, `코워킹` → 파랑, `명소` → 주황)
  - [ ] 명소명 + 한 줄 설명

**월 생활비 Breakdown 섹션**
- [ ] `<section>` — "월 예상 생활비" 제목
- [ ] 총액 강조 표시 (`city.monthlyCost` 만원)
- [ ] 항목별 진행 바 또는 리스트
  - [ ] 숙박 (`housing`)
  - [ ] 식비 (`food`)
  - [ ] 교통 (`transport`)
  - [ ] 기타 (`etc`)
- [ ] 각 항목: 이름 + 금액(만원) + 총액 대비 비율 시각화

### 품질 게이트
- [ ] `npx tsc --noEmit` 타입 오류 없음
- [ ] 브라우저에서 소개 텍스트, 명소 목록, 비용 breakdown 모두 표시됨
- [ ] 카테고리 배지 색상 구분 확인
- [ ] 비용 항목 합산이 `monthlyCost`와 일치함

---

## Phase 3 — 리뷰 & 연관 도시 추천

**목표**: 도시별 리뷰 표시 + 하단 연관 도시 추천 섹션 완성. 상세 페이지 전체 완성.

**예상 소요**: 1.5h

**의존성**: Phase 1 완료 (mockReviews 확장 필요)

### 작업 목록

**유저 리뷰 섹션**
- [ ] `<section>` — "노마드 후기" 제목
- [ ] `mockReviews`에서 `cityName === city.name` 필터링
- [ ] 리뷰 카드 컴포넌트 (author 아바타 / content / timeAgo)
- [ ] 리뷰 없을 경우 "아직 후기가 없습니다" 빈 상태 표시

**연관 도시 추천 섹션**
- [ ] `<section>` — "비슷한 도시" 제목
- [ ] 추천 로직: `city.region`이 같거나 `city.environments`가 1개 이상 겹치는 도시 (현재 도시 제외, 최대 3개)
- [ ] 기존 `CityCard` 컴포넌트 재사용하여 가로 스크롤 또는 그리드로 표시

**페이지 레이아웃 최종 정리**
- [ ] 섹션 간 `<Separator />` 또는 여백으로 구분
- [ ] 모바일 반응형 확인 (이미지, 비용 바, 명소 카드)
- [ ] `npm run build` 성공

### 품질 게이트
- [ ] 각 도시 상세 페이지에 리뷰 섹션 표시 (리뷰 없는 도시는 빈 상태)
- [ ] 연관 도시 추천 1~3개 표시, 현재 도시 미포함
- [ ] 추천 도시 카드 클릭 시 해당 도시 상세 페이지로 이동
- [ ] 모바일(375px) 레이아웃 깨지지 않음
- [ ] `npm run build` 성공

---

## 변경될 파일 목록

| 파일 경로 | 변경 유형 | 설명 |
|-----------|-----------|------|
| `lib/mock-data.ts` | 수정 | City 인터페이스 확장 + spots/monthlyCostDetail/description 필드 추가 |
| `components/cards/CityCard.tsx` | 수정 | Link 래핑, LikeDislikeButton stopPropagation |
| `app/cities/[id]/page.tsx` | 신규 | 도시 상세 페이지 (동적 라우트) |

---

## 리스크 & 주의사항

| 리스크 | 확률 | 영향 | 대응 |
|--------|------|------|------|
| LikeDislikeButton 클릭이 Link 이동 트리거 | 중 | 중 | stopPropagation 처리 |
| monthlyCostDetail 합산 불일치 | 낮 | 낮 | 데이터 입력 시 합산 검증 |
| 연관 도시 추천 로직이 0개 반환 | 낮 | 낮 | 최소 1개 이상 보장하도록 fallback 추가 |

---

## 완료 기준

- [ ] 홈 카드 클릭 → `/cities/[id]` 이동
- [ ] 상세 페이지에서 소개 · 명소 · 비용 · 리뷰 · 추천 도시 모두 표시
- [ ] 404 처리 정상 동작
- [ ] `npm run build` 통과
- [ ] 모바일 반응형 이상 없음

---

## Notes & Learnings

*(작업 중 발견한 이슈나 결정 사항을 여기에 기록)*
