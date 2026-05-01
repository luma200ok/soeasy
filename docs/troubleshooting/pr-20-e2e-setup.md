# PR #20 — Playwright E2E 기반 구조 설정 트러블슈팅

- **PR**: [luma200ok/soeasy#20](https://github.com/luma200ok/soeasy/pull/20)
- **브랜치**: `claude/festive-keller-389911`
- **머지일**: 2026-05-01
- **최종 결과**: e2e CI pass (1m20s)

## 요약

Playwright E2E 인프라(설정, fixture, POM, CI 워크플로우)를 처음 도입하면서 13개의 커밋이 누적됨.  
CI 환경변수 → 패키지 누락 → 인증 fixture 안정화 → 미들웨어 충돌 → Supabase 세션 공유 순서로 이슈가 연쇄적으로 드러났음.

## 시간순 이슈 & 해결

| # | 커밋 | 증상 | 원인 | 해결 |
|---|------|------|------|------|
| 1 | `c1f49ee` | — | — | 초기 구조 생성 (Playwright config, fixtures, POM, GH Actions 워크플로우) |
| 2 | `13eb5eb` | CI에서 Supabase 클라이언트 초기화 실패 | 워크플로우가 `SUPABASE_ANON_KEY`를 참조했지만 실제 시크릿 키 이름은 `SUPABASE_PUBLISHABLE_KEY` | 워크플로우 env 키 이름 통일 |
| 3 | `828a49b` | Secrets 등록 전 실행되어 fail | 시크릿 미등록 상태 | GH 시크릿 등록 후 빈 커밋으로 재트리거 |
| 4 | `a19de0e` | `npm ci` 단계에서 `@playwright/test` 모듈 not found | `package-lock.json`에 playwright 의존성 누락 (lock 재생성 안 됨) | `package-lock.json` 재생성 후 커밋 |
| 5 | `25cfa7a` | — | — | 인증 fixture(`authenticatedPage`) + `global.setup.ts`로 storageState 1회 로그인 구현 |
| 6 | `96be0e4` | Codex 리뷰 지적 | `textContent` await 누락, fixture API `use` → `provide` 변경, gitignore 누락 | 세 항목 일괄 반영 |
| 7 | `fdaae12` | 연관 도시 likes/dislikes가 항상 0으로 표시 | `getRelatedCities` 쿼리가 집계 컬럼을 가져오지 않음 | 집계 컬럼 포함하도록 쿼리 수정 (E2E와 직접 무관하지만 같은 PR에서 발견) |
| 8 | `9083f89` | `global.setup` 로그인 페이지에서 입력 전 redirect로 race | networkidle 대기 없이 바로 fill 시도 | 로그인 페이지 진입 시 `waitForLoadState('networkidle')` 추가 |
| 9 | `7f0c9c7` | 로케이터가 텍스트/role 기반이라 i18n·리렌더에 취약 | `data-testid` 부재 | 로그인/회원가입/헤더 핵심 요소에 `data-testid` 부여 |
| 10 | `f9b5662` | storageState 저장 후에도 인증된 요청이 401 | Supabase 세션 쿠키가 미들웨어 없이 갱신되지 않음 + 로그인 완료 시점 판정 부정확 | `middleware.ts` 추가 + 로그인 완료 확인 로직(URL/UI) 강화 |
| 11 | `d7bfd0a` | 빌드 실패 — Next.js가 두 개의 미들웨어 발견 | 기존 `proxy.ts`와 새로 추가한 `middleware.ts` 충돌 | `middleware.ts` 삭제, 미들웨어 책임은 `proxy.ts`에 통합 |
| 12 | `f1da1a1` | logout 테스트 후 다른 테스트가 모두 로그아웃 상태가 됨 | `supabase.auth.signOut()` 기본 scope가 `global`이라 storageState 공유 세션을 전부 무효화 | `signOut({ scope: 'local' })` 로 변경 |
| 13 | `01b3168` | logout 테스트가 여전히 다른 spec에 영향 | local scope로도 storageState 파일이 오염되는 케이스 존재 | logout spec만 storageState를 쓰지 않고 매번 UI로 로그인하도록 변경 |

## 핵심 교훈

1. **Supabase 시크릿 명명은 워크플로우와 완전히 일치시킬 것** — 키 이름이 한 글자라도 다르면 CI가 통째로 죽는다.
2. **lockfile은 의존성 추가 직후 반드시 커밋** — `npm ci`는 lock과 package.json 정합성에 엄격하다.
3. **Next.js 미들웨어는 1개만 허용** — `middleware.ts`와 `proxy.ts` 동시 존재 시 빌드가 깨진다.
4. **storageState 기반 인증 공유 시 `signOut`은 무조건 `scope: 'local'`** — global scope는 모든 디바이스/세션을 무효화해서 병렬 테스트가 연쇄 실패한다.
5. **세션 상태를 변경하는 테스트(logout 등)는 storageState 공유에서 격리** — 매번 UI 로그인으로 독립성을 보장하는 편이 안전하다.
6. **로그인 페이지 진입 직후 `networkidle` 대기 필수** — Supabase 클라이언트 초기화 + 세션 체크 redirect 타이밍이 fill보다 늦을 수 있다.
7. **E2E 로케이터는 `data-testid`로** — 텍스트/role 기반은 i18n과 마이너 UI 변경에 깨진다.

## 향후 개선 아이디어

- `global.setup`의 로그인 완료 판정을 `data-testid="user-menu"` 대기로 통일
- logout 외에도 세션을 변경하는 테스트가 늘어나면 별도 Playwright project로 분리 운영
- `proxy.ts`의 역할을 문서화 (왜 `middleware.ts`가 아니라 `proxy.ts`인지 README에 명시)
