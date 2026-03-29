/** GET /api/users/me/dashboard */
export interface DashboardResponse {
  userName: string;
  registDate: string;
  questionBookmarkCnt: number;
  interviewSessionCnt: number;
  interviewResponseAvg: number;
}

/** GET /api/users/me/accountInfo */
export interface AccountInfoResponse {
  userName: string;
  registDate: string;
  email: string;
}

/** GET /api/users/me/setting */
export interface SettingResponse {
  responseAutoSave: boolean;
}

/** PATCH /api/users/me/password */
export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

export interface ChangePasswordResponse {
  message: string;
}

/** DELETE /api/users/me */
export interface WithdrawAccountRequest {
  password: string;
}

export interface WithdrawAccountResponse {
  message: string;
}
