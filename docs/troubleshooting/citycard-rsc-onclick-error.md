# 트러블슈팅: 도시 상세 페이지 500 에러 (RSC onClick 직렬화 오류)

**발생일**: 2026-05-01  
**영향 범위**: `/cities/[id]` 전체 (프로덕션)

---

## 상황

`https://soeasy-khaki.vercel.app/cities/{id}` 접속 시 HTTP 500 에러 발생.  
브라우저 콘솔에 다음 에러 출력:

```
Error: Event handlers cannot be passed to Client Component props.
{onClick: function onClick, children: ...}
digest: '1852604986'
```

## 원인

`components/cards/CityCard.tsx`가 Server Component(= `"use client"` 없음)인 상태에서 내부에 `onClick` 핸들러를 포함하고 있었음.

```tsx
// 문제 코드 — Server Component에서 onClick 사용
<div onClick={(e) => e.preventDefault()}>
  <LikeDislikeButton ... />
</div>
```

- 홈 페이지(`/`)는 `CityGridSection`(= Client Component)이 `CityCard`를 감싸므로 정상 동작
- 도시 상세 페이지(`/cities/[id]`)는 Server Component(`CityDetailPage`)가 `CityCard`를 직접 렌더링 → RSC 직렬화 단계에서 `onClick` 함수를 넘길 수 없어 500 발생

## 해결

`CityCard.tsx` 상단에 `"use client"` 추가 → Client Component로 전환.

```tsx
"use client";  // 추가
```

수정 커밋: `d11cbbe`

## 배포 지연 이슈

수정 커밋을 `main`에 push했으나 Vercel 웹훅이 해당 push를 누락 → 사이트에 반영되지 않음.  
빈 커밋(`247d522`)으로 재트리거해서 배포 완료.

```bash
git commit --allow-empty -m "chore: Vercel 배포 재트리거"
git push origin main
```

## 재발 방지

- `onClick`, `onChange` 등 이벤트 핸들러를 갖는 컴포넌트는 반드시 `"use client"` 선언
- Server Component에서 Client Component를 렌더링할 때는 직렬화 가능한 props만 전달
