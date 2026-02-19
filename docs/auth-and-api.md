# 로그인/회원가입 및 API 관리

## 개요

로그인·회원가입 플로우와 인증 기반 API 통신 구조를 정리한 문서입니다.  
**TanStack Query**를 사용하여 Auth API 호출을 `useMutation`으로 관리합니다.

### 토큰 유효기간

- Access Token: 1시간
- Refresh Token: 14일

---

## 1. 로그인 / 회원가입 구현

### 1-1. 로그인

**파일**: `src/features/auth/LoginForm.tsx`, `src/pages/authPage/index.tsx`

- 이메일, 비밀번호, **로그인 상태 유지** 체크박스
- `handleLoginSubmit` → `useAuth().login()` → `useLogin.mutateAsync()`
- 성공 시: `onSuccess`에서 토큰 저장, `setUser`, `navigate("/")`
- 실패 시: 401이면 "이메일 또는 비밀번호가 일치하지 않습니다." 모달

### 1-2. 회원가입

**파일**: `src/features/auth/SignUpForm.tsx`, `src/pages/authPage/index.tsx`

**플로우**

1. 이메일 입력 → 인증번호 받기  
2. 인증번호 확인  
3. 비밀번호·비밀번호 확인, 필수 약관 동의  
4. 회원가입 API 호출

**검증**

- 클라이언트: 필수 약관 동의, 이메일 인증, 비밀번호 일치, 비밀번호 정책(`isValidPassword`)
- 비밀번호 정책: 8자 이상, 영문 대소문자·숫자·특수문자 조합  
  (`src/constants/auth/index.ts`)

**에러 처리**

- 400: 비밀번호 정책 미달 → "비밀번호를 다시 확인해 주세요" 모달
- 기타: API 에러 메시지 모달

### 1-3. 로그아웃

**파일**: `src/pages/myPage/index.tsx`, `src/contexts/AuthContext.tsx`

- 로그아웃 버튼 클릭 → `useAuth().logout()` → `useLogout.mutateAsync()`
- `onSettled`에서 토큰 삭제, `setUser(null)`, `navigate("/")` 실행
- **토큰 만료 등 API가 401을 반환해도** refresh 시도 없이 에러로 처리 → `onSettled`는 그대로 실행 → `/`로 이동
- `invokeAuthFailure`(→ `/auth`)는 세션 만료 시에만 호출되며, 명시적 로그아웃 시에는 호출되지 않음

---

## 2. 인증 아키텍처

### 2-1. 구조도

```
[TokenStorage]     → 토큰·사용자 정보 저장/조회
[AuthContext]      → user, isAuthenticated, login, logout
[apiClient]        → Authorization 헤더, 401 시 refresh
[ProtectedRoute]   → 인증 필요 라우트 가드
```

### 2-2. 주요 파일

| 파일 | 역할 |
|------|------|
| `src/lib/tokenStorage.ts` | 토큰/사용자 저장 (keepLogin에 따라 localStorage/sessionStorage) |
| `src/lib/authFailureCallback.ts` | 세션 만료 시 콜백(토큰 삭제, `/auth` 이동). 명시적 로그아웃 시에는 호출되지 않음 |
| `src/contexts/AuthContext.tsx` | 인증 상태·로그인·로그아웃·세션 복구 |
| `src/components/auth/ProtectedRoute.tsx` | 비로그인 시 `/auth` 리다이렉트 |

### 2-3. 로그인 상태 유지 (keepLogin)

| keepLogin | 저장소 | 동작 |
|-----------|--------|------|
| ✓ | localStorage | 브라우저를 닫아도 유지 |
| ✗ | sessionStorage | 탭/창 종료 시 삭제 |

### 2-4. 세션 복구 (페이지 로드 시)

- 앱 시작 시 storage에서 토큰·user 읽기 → `setUser(storedUser)`로 즉시 복원
- **refresh API 호출 안 함** (불필요한 API 호출 방지)
- accessToken이 유효하면 그대로 사용, 만료되면 API 요청 시 401 → 그때 refresh

### 2-5. refresh 호출 시점

- **401 응답 시에만** apiClient가 refresh API 호출
- 로그인 직후, 페이지 로드 시에는 refresh를 호출하지 않음

---

## 3. API 클라이언트

### 3-1. apiClient (`src/api/client.ts`)

**역할**

- Base URL: `https://onedaypocket.shop`
- `Authorization: Bearer {accessToken}` 자동 추가 (tokenStorage에서 조회)
- 401 시 **직접 fetch**로 refresh API 호출 → 성공 시 새 토큰 저장, 원래 요청 재시도

**401 처리 예외**

- `/api/auth/login`, `/api/auth/signup`, `/api/auth/logout`: 401은 credential 오류이거나 의도된 로그아웃 동작으로 간주, refresh 미실행
- `/api/auth/refresh` 실패 시 `invokeAuthFailure()` → 토큰 삭제, `/auth` 이동 (세션 만료 → 로그인 유도)

### 3-2. Auth API (`src/api/auth/`)

| API | 엔드포인트 | 용도 |
|-----|-----------|------|
| requestEmailVerify | POST /api/auth/email/verify | 이메일 인증번호 발송 |
| confirmEmail | POST /api/auth/email/confirm | 인증번호 확인 |
| signUp | POST /api/auth/signup | 회원가입 |
| login | POST /api/auth/login | 로그인 |
| refreshTokens | POST /api/auth/refresh | access token 갱신 |
| logout | POST /api/auth/logout | 로그아웃 (accessToken 필요) |

### 3-3. TanStack Query 훅 (`src/api/auth/useAuthApi.ts`)

**Auth 관련 (모두 `useMutation` 기반)**

| 훅 | 변수 | 사용처 | 비고 |
|----|------|--------|------|
| `useRequestEmailVerify` | `{ email }` | AuthPage | 인증번호 발송 |
| `useConfirmEmail` | `{ email, code }` | AuthPage | 인증번호 확인 |
| `useSignUp` | `SignUpRequest` | AuthPage | 회원가입 |
| `useLogin` | `LoginVariables` (email, password, keepLogin) | AuthContext | onSuccess에서 토큰 저장 |
| `useLogout` | 없음 (void) | AuthContext | tokenStorage에서 토큰 조회 후 API 호출 |
| `useRefreshTokens` | `{ refreshToken }` | - | 정의만 있음, apiClient 401 시에는 직접 fetch 호출 |

**AuthContext에서 사용**: `useLogin`, `useLogout`  
**세션 복구**: storage 읽기만 수행, refresh API 호출 없음

### 3-4. 에러 처리

**ApiErrorException**

- `code`, `message`, `status`
- `parseApiError(err)` 로 파싱

---

## 4. Provider 구조

```
main.tsx
  └─ QueryClientProvider
       └─ ThemeProvider
            └─ RouterProvider
                 └─ App (모든 라우트의 부모)
                      └─ AuthProvider  ← useNavigate 사용 가능
                           └─ Header, Outlet, Footer
```

- `AuthProvider`는 `App` 안에서 감싸서 라우터 내부에 위치
- `useAuth()`, `useNavigate()` 모두 사용 가능

---

## 5. ProtectedRoute

**적용 라우트**: `/mypage`

- `isAuthenticated`가 false이면 `/auth`로 리다이렉트
- `state={{ from: location }}`으로 원래 경로 전달 (추후 로그인 후 복귀용)

---

## 6. 파일 구조 요약

```
src/
├── api/
│   ├── client.ts           # apiClient, 401 시 refresh (직접 fetch)
│   └── auth/
│       ├── authApi.ts      # Auth API 함수
│       ├── authTypes.ts    # Request/Response 타입, LoginVariables
│       └── useAuthApi.ts   # TanStack Query useMutation 훅
├── lib/
│   ├── tokenStorage.ts    # 토큰 저장소 (keepLogin 반영)
│   └── authFailureCallback.ts
├── contexts/
│   └── AuthContext.tsx    # useLogin, useLogout, storage 기반 세션 복구
├── components/
│   └── auth/
│       └── ProtectedRoute.tsx
├── constants/
│   └── auth/
│       └── index.ts       # isValidPassword, SIGN_UP_AGREEMENT_ITEMS
└── pages/
    ├── authPage/          # 로그인/회원가입 페이지
    └── myPage/            # 로그아웃 버튼 포함
```

## 7. 전체 흐름 요약

| 상황 | 동작 |
|------|------|
| **앱 최초 로드** | storage에서 user·토큰 읽기 → setUser, API 호출 없음 |
| **로그인** | useLogin mutate → onSuccess: 토큰 저장, setUser, navigate("/") |
| **로그아웃** | useLogout mutate → onSettled: clear, navigate("/"). 토큰 만료 등 API 실패 시에도 로컬 세션 제거 후 `/` 이동 (refresh 시도 안 함) |
| **API 요청** | apiClient가 tokenStorage.accessToken 헤더에 추가 |
| **401** | apiClient가 refresh 호출 → 성공 시 재시도, 실패 시 invokeAuthFailure → `/auth` 이동 (세션 만료) |
