import {
  useMutation,
  type UseMutationOptions,
  type UseMutationResult,
} from "@tanstack/react-query";
import {
  confirmEmail,
  login,
  logout,
  refreshTokens,
  requestEmailVerify,
  signUp,
} from "./authApi";
import { tokenStorage } from "@/lib/tokenStorage";
import type {
  EmailConfirmRequest,
  EmailVerifyRequest,
  LoginVariables,
  RefreshRequest,
  SignUpRequest,
} from "./authTypes";
import type {
  EmailConfirmResponse,
  EmailVerifyResponse,
  LoginResponse,
  LogoutResponse,
  RefreshResponse,
  SignUpResponse,
} from "./authTypes";

// 1-1. 이메일 인증 번호 요청
export function useRequestEmailVerify(
  options?: UseMutationOptions<EmailVerifyResponse, Error, EmailVerifyRequest>
): UseMutationResult<EmailVerifyResponse, Error, EmailVerifyRequest> {
  return useMutation({
    mutationFn: requestEmailVerify,
    ...options,
  });
}

// 1-2. 인증 번호 확인
export function useConfirmEmail(
  options?: UseMutationOptions<EmailConfirmResponse, Error, EmailConfirmRequest>
): UseMutationResult<EmailConfirmResponse, Error, EmailConfirmRequest> {
  return useMutation({
    mutationFn: confirmEmail,
    ...options,
  });
}

// 1-3. 회원가입 완료
export function useSignUp(
  options?: UseMutationOptions<SignUpResponse, Error, SignUpRequest>
): UseMutationResult<SignUpResponse, Error, SignUpRequest> {
  return useMutation({
    mutationFn: signUp,
    ...options,
  });
}

// 1-4. 로그인
export function useLogin(
  options?: UseMutationOptions<LoginResponse, Error, LoginVariables>
): UseMutationResult<LoginResponse, Error, LoginVariables> {
  return useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    ...options,
  });
}

// 1-5. 액세스 토큰 갱신
export function useRefreshTokens(
  options?: UseMutationOptions<RefreshResponse, Error, RefreshRequest>
): UseMutationResult<RefreshResponse, Error, RefreshRequest> {
  return useMutation({
    mutationFn: refreshTokens,
    ...options,
  });
}

// 1-6. 로그아웃 (tokenStorage에서 토큰 조회)
export function useLogout(
  options?: UseMutationOptions<LogoutResponse, Error, void>
): UseMutationResult<LogoutResponse, Error, void> {
  return useMutation({
    mutationFn: async () => {
      const accessToken = tokenStorage.getAccessToken();
      const refreshToken = tokenStorage.getRefreshToken();
      if (!accessToken || !refreshToken) {
        return { message: "이미 로그아웃됨" };
      }
      return logout({ refreshToken }, accessToken);
    },
    ...options,
  });
}
