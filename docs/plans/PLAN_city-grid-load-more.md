# 도시 목록 더 보기 기능 구현 계획

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

메인 페이지 도시 목록에서 "더 보기" 버튼이 클릭해도 반응이 없고 목록 끝에서도 항상 노출되는 문제를 수정한다.

### 목표
- 초기 6개 도시만 표시
- "더 보기" 클릭 시 6개씩 추가 노출
- 모든 도시가 표시되면 버튼 숨김

### 영향 범위: Small (1 Phase, 예상 0.5h)

---

## Phase 1 — 더 보기 페이지네이션 구현

**목표**: `CityGridSection`에 `visibleCount` 상태를 추가해 더 보기 기능을 완성한다.

**예상 소요**: 30분

### 작업 목록

**`components/sections/CityGridSection.tsx` 수정**
- [ ] `"use client"` 디렉티브 추가
- [ ] `useState`로 `visibleCount` 상태 추가 (초기값: 6)
- [ ] `cities.slice(0, visibleCount)` 로 렌더링 도시 수 제한
- [ ] 더 보기 버튼 클릭 핸들러: `setVisibleCount(prev => prev + 6)`
- [ ] 버튼 조건부 렌더링: `visibleCount < cities.length` 일 때만 표시

### 품질 게이트
- [ ] `npx tsc --noEmit` 타입 오류 없음
- [ ] 메인 페이지에서 초기 6개만 표시됨
- [ ] 더 보기 클릭 시 6개 추가 표시됨
- [ ] 모든 도시가 표시되면 버튼 사라짐
- [ ] 필터 변경 시 목록 초기화 (visibleCount 리셋) 확인

---

## 변경될 파일 목록

| 파일 경로 | 변경 유형 | 설명 |
|-----------|-----------|------|
| `components/sections/CityGridSection.tsx` | 수정 | 더 보기 페이지네이션 상태 추가 |

---

## 리스크 & 주의사항

| 리스크 | 확률 | 영향 | 대응 |
|--------|------|------|------|
| 필터 변경 후 visibleCount 미리셋 | 중 | 중 | `cities` prop 변경 시 visibleCount 초기화 필요 (`useEffect` 또는 key prop) |

---

## 완료 기준

- [ ] 초기 6개 도시 표시
- [ ] 더 보기 클릭 시 6개씩 추가
- [ ] 목록 끝에서 버튼 숨김
- [ ] 필터 변경 시 목록 초기화
- [ ] `npx tsc --noEmit` 통과

---

## Notes & Learnings

*(작업 중 발견한 이슈나 결정 사항을 여기에 기록)*
