import { tokenStorage } from "@/lib/tokenStorage";
import { invokeAuthFailure } from "@/lib/authFailureCallback";

export const BASE_URL = "https://onedaypocket.shop";

export interface ApiError {
  code: string;
  message: string;
}

export class ApiErrorException extends Error {
  readonly code: string;
  readonly status?: number;

  constructor(code: string, message: string, status?: number) {
    super(message);
    this.name = "ApiErrorException";
    this.code = code;
    this.status = status;
  }
}

/** mutation onError 등에서 Error를 ApiError로 파싱 */
export function parseApiError(error: unknown): ApiError {
  if (error instanceof ApiErrorException) {
    return { code: error.code, message: error.message };
  }
  if (error instanceof Error) {
    try {
      const parsed = JSON.parse(error.message) as ApiError;
      if (parsed.code && parsed.message) return parsed;
    } catch {
      // ignore
    }
    return { code: "UNKNOWN_ERROR", message: error.message };
  }
  return {
    code: "UNKNOWN_ERROR",
    message: "알 수 없는 오류가 발생했습니다.",
  };
}

async function handleResponse<T>(response: Response): Promise<T> {
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const code = (data as { code?: string }).code ?? "UNKNOWN_ERROR";
    const message =
      (data as { message?: string }).message ??
      "요청 처리 중 오류가 발생했습니다.";
    throw new ApiErrorException(code, message, response.status);
  }

  return data as T;
}

async function refreshAndRetry<T>(
  endpoint: string,
  init: RequestInit
): Promise<T> {
  const refreshToken = tokenStorage.getRefreshToken();
  if (!refreshToken) {
    invokeAuthFailure();
    throw new ApiErrorException(
      "UNAUTHORIZED",
      "다시 로그인해 주세요.",
      401
    );
  }

  const refreshRes = await fetch(`${BASE_URL}/api/auth/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken }),
  });

  if (!refreshRes.ok) {
    tokenStorage.clear();
    invokeAuthFailure();
    const data = await refreshRes.json().catch(() => ({}));
    throw new ApiErrorException(
      (data as { code?: string }).code ?? "UNAUTHORIZED",
      (data as { message?: string }).message ?? "다시 로그인해 주세요.",
      401
    );
  }

  const refreshData = (await refreshRes.json()) as {
    accessToken: string;
    refreshToken: string;
  };
  tokenStorage.updateTokens(refreshData.accessToken, refreshData.refreshToken);

  const newHeaders = new Headers(init.headers);
  newHeaders.set("Authorization", `Bearer ${refreshData.accessToken}`);

  const retryRes = await fetch(`${BASE_URL}${endpoint}`, {
    ...init,
    headers: newHeaders,
  });

  return handleResponse<T>(retryRes);
}

export async function apiClient<T>(
  endpoint: string,
  options: RequestInit & { accessToken?: string } = {}
): Promise<T> {
  const { accessToken: explicitToken, ...init } = options;
  const accessToken =
    explicitToken ?? tokenStorage.getAccessToken();

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(init.headers as Record<string, string>),
  };

  if (accessToken) {
    (headers as Record<string, string>)["Authorization"] = `Bearer ${accessToken}`;
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...init,
    headers,
  });

  // 로그인/회원가입/로그아웃은 401이 credential 오류이므로 refresh 시도 안 함
  const shouldRefresh =
    response.status === 401 &&
    endpoint !== "/api/auth/refresh" &&
    endpoint !== "/api/auth/login" &&
    endpoint !== "/api/auth/signup" &&
    endpoint !== "/api/auth/logout";

  if (shouldRefresh) {
    return refreshAndRetry<T>(endpoint, init);
  }

  return handleResponse<T>(response);
}
