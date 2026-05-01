<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

## E2E 테스트 구조 (Playwright)

### 폴더 구조

```
e2e/
├── .auth/                        # storageState 저장 (gitignore됨)
│   └── user.json                 # global.setup이 저장하는 로그인 세션
├── fixtures/
│   ├── auth.fixture.ts           # authenticatedPage fixture 정의
│   └── index.ts                  # 통합 export — spec 파일은 여기서만 import
├── helpers/
│   ├── auth.helper.ts            # loginViaUI, isLoggedIn, logout
│   └── supabase.helper.ts        # 테스트 데이터 직접 조작 (teardown 전용)
├── pages/                        # Page Object Model (POM)
│   ├── HomePage.ts               # /
│   ├── LoginPage.ts              # /login
│   ├── RegisterPage.ts           # /register
│   └── CityDetailPage.ts         # /city/[slug]
├── specs/
│   ├── auth/
│   │   ├── login.spec.ts
│   │   ├── register.spec.ts
│   │   └── logout.spec.ts
│   ├── home/
│   │   ├── city-grid.spec.ts
│   │   └── filters.spec.ts
│   └── city-detail/
│       ├── city-info.spec.ts
│       ├── like-dislike.spec.ts
│       └── review.spec.ts
├── global.setup.ts               # 스위트 시작 전 1회 — 로그인 → storageState 저장
└── global.teardown.ts            # 스위트 종료 후 1회 — 테스트 데이터 정리
```

### 핵심 설계 원칙

#### 1. 인증 상태 재사용 (`storageState`)
로그인을 테스트마다 반복하지 않는다. `global.setup.ts`에서 1회만 로그인하고
`e2e/.auth/user.json`에 세션을 저장해 `chromium:auth` 전체에서 재사용한다.

```typescript
// global.setup.ts 핵심 패턴
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("/login");
// ... 로그인 폼 입력 ...
await context.storageState({ path: AUTH_FILE });
await browser.close();
```

#### 2. 세 가지 Playwright 프로젝트

| 프로젝트 | storageState | 대상 spec | 설명 |
|----------|-------------|-----------|------|
| `setup` | — | global.setup.ts | storageState 생성, 다른 프로젝트 dependency |
| `chromium:guest` | 없음 | auth/, home/, city-detail/ | 비로그인 시나리오 |
| `chromium:auth` | AUTH_FILE | city-detail/ | 좋아요·리뷰 등 인증 필요 시나리오 |

멀티브라우저(Firefox, Safari)는 `playwright.config.ts`에 주석으로 준비되어 있다.
필요 시 주석 해제만으로 활성화 가능.

#### 3. Page Object Model (POM)
모든 페이지 조작은 `e2e/pages/` 클래스를 통한다. spec에서 직접 `page.locator()` 사용 금지.

```typescript
// ✅ 올바른 패턴
const cityPage = new CityDetailPage(page);
await cityPage.goto("tokyo");
await cityPage.clickLike();

// ❌ 금지 — spec 파일에서 로케이터 직접 사용
await page.locator('[data-testid="like-btn"]').click();
```

#### 4. Fixture import 규칙
`@playwright/test`가 아닌 프로젝트 fixture에서만 import한다.

```typescript
// ✅ 올바른 import
import { test, expect } from "../../fixtures";

// ❌ 금지
import { test, expect } from "@playwright/test";
```

#### 5. 로케이터 우선순위
`data-testid` > `role` > `text` > CSS 순서로 사용한다.
CSS 클래스는 디자인 변경 시 깨지므로 최후 수단으로만 허용한다.

#### 6. 플레이키 테스트 처리
임시 불안정 테스트는 `test.fixme()`로 격리한다. 방치 금지 — 반드시 이슈 번호를 함께 기록한다.

```typescript
test("flaky: 리뷰 목록 갱신", async ({ page }) => {
  test.fixme(true, "Race condition — Issue #42");
  // ...
});

// CI에서만 스킵
test("느린 테스트", async ({ page }) => {
  test.skip(!!process.env.CI, "CI 환경 타임아웃 — Issue #43");
});
```

#### 7. 대기 패턴
`waitForTimeout()` 사용 금지. 조건·이벤트 기반 대기만 허용한다.

```typescript
// ❌ 금지
await page.waitForTimeout(2000);

// ✅ API 응답 대기
await page.waitForResponse(r => r.url().includes("/api/reviews") && r.status() === 200);

// ✅ 요소 상태 대기
await page.locator('[data-testid="review-list"]').waitFor({ state: "visible" });

// ✅ 네트워크 안정화 대기
await page.waitForLoadState("networkidle");
```

### 스크립트

```bash
npm run e2e          # 전체 실행 (headless)
npm run e2e:ui       # UI 모드 — 시각적 디버깅
npm run e2e:report   # HTML 리포트 브라우저에서 열기

# 자주 쓰는 Playwright 직접 명령
npx playwright test e2e/specs/auth/login.spec.ts   # 단일 파일 실행
npx playwright test --headed                        # 브라우저 보이게 실행
npx playwright test --debug                         # 스텝 디버거
npx playwright test --repeat-each=10               # 플레이키 여부 확인
npx playwright codegen http://localhost:3000        # 로케이터 자동 생성
```

### 아티팩트

| 상황 | 수집 항목 |
|------|---------|
| 항상 | HTML 리포트 (`playwright-report/`) |
| CI 한정 | JUnit XML (`playwright-results.xml`) |
| 첫 재시도 시 | trace zip + 비디오 (`test-results/`) |
| 실패 시 | 스크린샷 (`test-results/`) |

```bash
# trace 파일 분석 (step-by-step 재현)
npx playwright show-trace test-results/*/trace.zip
```

### 환경변수

`.env.test.local`에 설정 (`.gitignore`에 포함되어 커밋되지 않음):

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
E2E_TEST_EMAIL=e2e-test@example.com
E2E_TEST_PASSWORD=...
```

CI 환경에서는 GitHub Actions secrets으로 주입 (`.github/workflows/e2e.yml` 참고).

### `/e2e` 커맨드 사용 지침

ECC 플러그인의 `/e2e` 커맨드(`e2e-runner` 에이전트)로 새 테스트를 빠르게 스캐폴딩할 수 있다.
단, 생성된 코드는 아래 항목을 반드시 수정해야 한다:

1. `import { test, expect } from "@playwright/test"` → `from "../../fixtures"` 로 교체
2. spec 내 `page.locator()` → 해당 POM 클래스 메서드로 이동
3. `page.waitForTimeout()` → 조건 기반 대기로 교체
4. `chromium:auth` 프로젝트 대상 여부 확인 (로그인 필요 여부)
