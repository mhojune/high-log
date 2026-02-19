// 1-1. 이메일 인증 번호 요청
export interface EmailVerifyRequest {
  email: string;
}

export interface EmailVerifyResponse {
  message: string;
  expiresIn: number;
}

// 1-2. 인증 번호 확인
export interface EmailConfirmRequest {
  email: string;
  code: string;
}

export interface EmailConfirmResponse {
  verified: boolean;
  message: string;
}

// 1-3. 회원가입 완료
export interface SignUpRequest {
  email: string;
  password: string;
  name: string;
  marketingAgreement: boolean;
}

export interface SignUpResponse {
  userId: number;
  email: string;
  name: string;
  createdAt: string;
}

// 1-4. 로그인
export interface LoginRequest {
  email: string;
  password: string;
}

/** useLogin mutation 변수 (keepLogin 포함) */
export interface LoginVariables extends LoginRequest {
  keepLogin: boolean;
}

export interface LoginUser {
  id: number;
  email: string;
  name: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: LoginUser;
}

// 1-5. 액세스 토큰 갱신
export interface RefreshRequest {
  refreshToken: string;
}

export interface RefreshResponse {
  accessToken: string;
  refreshToken: string;
}

// 1-6. 로그아웃
export interface LogoutRequest {
  refreshToken: string;
}

export interface LogoutResponse {
  message: string;
}
