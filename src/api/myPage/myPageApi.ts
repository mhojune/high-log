import { apiClient } from "@/api/client";
import type {
  AccountInfoResponse,
  ChangeNameRequest,
  ChangeNameResponse,
  ChangePasswordRequest,
  ChangePasswordResponse,
  DashboardResponse,
  WithdrawAccountRequest,
  WithdrawAccountResponse,
} from "@/api/myPage/myPageTypes";

/** 7-1. 대시보드 */
export async function getDashboard(): Promise<DashboardResponse> {
  return apiClient<DashboardResponse>("/api/users/me/dashboard", {
    method: "GET",
  });
}

/** 7-2. 계정정보 */
export async function getAccountInfo(): Promise<AccountInfoResponse> {
  return apiClient<AccountInfoResponse>("/api/users/me/accountInfo", {
    method: "GET",
  });
}

/** 7-4. 비밀번호 변경 */
export async function changePassword(
  body: ChangePasswordRequest
): Promise<ChangePasswordResponse> {
  return apiClient<ChangePasswordResponse>("/api/users/me/password", {
    method: "PATCH",
    body: JSON.stringify(body),
  });
}

/** 7-5. 이름 변경 */
export async function changeName(body: ChangeNameRequest): Promise<ChangeNameResponse> {
  return apiClient<ChangeNameResponse>("/api/users/me/name", {
    method: "PATCH",
    body: JSON.stringify(body),
  });
}

/** 7-6. 회원탈퇴 */
export async function withdrawAccount(
  body: WithdrawAccountRequest
): Promise<WithdrawAccountResponse> {
  return apiClient<WithdrawAccountResponse>("/api/users/me", {
    method: "DELETE",
    body: JSON.stringify(body),
  });
}
