import type { LoginUser } from "@/api/auth/authTypes";

const ACCESS_KEY = "accessToken";
const REFRESH_KEY = "refreshToken";
const KEEP_LOGIN_KEY = "keepLogin";
const USER_KEY = "user";

const getStorage = (persistent: boolean) =>
  persistent ? localStorage : sessionStorage;

export const tokenStorage = {
  setTokens(
    accessToken: string,
    refreshToken: string,
    persistent: boolean,
    user?: LoginUser
  ): void {
    const storage = getStorage(persistent);
    storage.setItem(ACCESS_KEY, accessToken);
    storage.setItem(REFRESH_KEY, refreshToken);
    if (user) storage.setItem(USER_KEY, JSON.stringify(user));
    localStorage.setItem(KEEP_LOGIN_KEY, String(persistent));
  },

  updateTokens(accessToken: string, refreshToken: string): void {
    const persistent = localStorage.getItem(KEEP_LOGIN_KEY) === "true";
    const storage = getStorage(persistent);
    storage.setItem(ACCESS_KEY, accessToken);
    storage.setItem(REFRESH_KEY, refreshToken);
  },

  getAccessToken(): string | null {
    if (localStorage.getItem(KEEP_LOGIN_KEY) === "true") {
      return localStorage.getItem(ACCESS_KEY);
    }
    return sessionStorage.getItem(ACCESS_KEY);
  },

  getRefreshToken(): string | null {
    if (localStorage.getItem(KEEP_LOGIN_KEY) === "true") {
      return localStorage.getItem(REFRESH_KEY);
    }
    return sessionStorage.getItem(REFRESH_KEY);
  },

  getUser(): LoginUser | null {
    const storage =
      localStorage.getItem(KEEP_LOGIN_KEY) === "true"
        ? localStorage
        : sessionStorage;
    const raw = storage.getItem(USER_KEY);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as LoginUser;
    } catch {
      return null;
    }
  },

  clear(): void {
    localStorage.removeItem(ACCESS_KEY);
    localStorage.removeItem(REFRESH_KEY);
    localStorage.removeItem(KEEP_LOGIN_KEY);
    localStorage.removeItem(USER_KEY);
    sessionStorage.removeItem(ACCESS_KEY);
    sessionStorage.removeItem(REFRESH_KEY);
    sessionStorage.removeItem(USER_KEY);
  },
};
