/** GET /api/users/me/dashboard — 7-1. 대시보드 */
export interface DashboardResponse {
  userName: string;
  registDate: string;
  questionBookmarkCnt: number;
  interviewSessionCnt: number;
  interviewResponseAvg: number;
}

/** GET /api/users/me/accountInfo — 7-2. 계정정보 */
export interface AccountInfoResponse {
  userName: string;
  registDate: string;
  email: string;
}

/** PATCH /api/users/me/password — 7-4. 비밀번호 변경 */
export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

export interface ChangePasswordResponse {
  message: string;
}

/** PATCH /api/users/me/name — 7-5. 이름 변경 */
export interface ChangeNameRequest {
  newName: string;
}

export interface ChangeNameResponse {
  message: string;
}

/** DELETE /api/users/me — 7-6. 회원탈퇴 */
export interface WithdrawAccountRequest {
  password: string;
  reason?: string;
}

export interface WithdrawAccountResponse {
  message: string;
}
