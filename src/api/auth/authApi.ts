import { apiClient } from "@/api/client";
import type {
  EmailConfirmRequest,
  EmailConfirmResponse,
  EmailVerifyRequest,
  EmailVerifyResponse,
  LoginRequest,
  LoginResponse,
  LogoutRequest,
  LogoutResponse,
  RefreshRequest,
  RefreshResponse,
  SignUpRequest,
  SignUpResponse,
} from "./authTypes";

// 1-1. 이메일 인증 번호 요청
export async function requestEmailVerify(
  body: EmailVerifyRequest
): Promise<EmailVerifyResponse> {
  return apiClient<EmailVerifyResponse>("/api/auth/email/verify", {
    method: "POST",
    body: JSON.stringify(body),
  });
}

// 1-2. 인증 번호 확인
export async function confirmEmail(
  body: EmailConfirmRequest
): Promise<EmailConfirmResponse> {
  return apiClient<EmailConfirmResponse>("/api/auth/email/confirm", {
    method: "POST",
    body: JSON.stringify(body),
  });
}

// 1-3. 회원가입 완료
export async function signUp(body: SignUpRequest): Promise<SignUpResponse> {
  return apiClient<SignUpResponse>("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify(body),
  });
}

// 1-4. 로그인
export async function login(body: LoginRequest): Promise<LoginResponse> {
  return apiClient<LoginResponse>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(body),
  });
}

// 1-5. 액세스 토큰 갱신
export async function refreshTokens(
  body: RefreshRequest
): Promise<RefreshResponse> {
  return apiClient<RefreshResponse>("/api/auth/refresh", {
    method: "POST",
    body: JSON.stringify(body),
  });
}

// 1-6. 로그아웃
export async function logout(
  body: LogoutRequest,
  accessToken: string
): Promise<LogoutResponse> {
  return apiClient<LogoutResponse>("/api/auth/logout", {
    method: "POST",
    body: JSON.stringify(body),
    accessToken,
  });
}
