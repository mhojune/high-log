import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { useNavigate } from "react-router-dom";
import { useLogin, useLogout } from "@/api/auth/useAuthApi";
import type { LoginUser } from "@/api/auth/authTypes";
import { tokenStorage } from "@/lib/tokenStorage";
import { setAuthFailureCallback } from "@/lib/authFailureCallback";

interface AuthContextValue {
  user: LoginUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (data: {
    email: string;
    password: string;
    keepLogin: boolean;
  }) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<LoginUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const loginMutation = useLogin({
    onSuccess: (data, variables) => {
      tokenStorage.setTokens(
        data.accessToken,
        data.refreshToken,
        variables.keepLogin,
        data.user
      );
      setUser(data.user);
      navigate("/");
    },
  });

  const logoutMutation = useLogout({
    onSettled: () => {
      tokenStorage.clear();
      setUser(null);
      navigate("/");
    },
  });

  useEffect(() => {
    const handleAuthFailure = () => {
      tokenStorage.clear();
      setUser(null);
      window.location.href = "/auth";
    };
    setAuthFailureCallback(handleAuthFailure);
    return () => setAuthFailureCallback(null);
  }, []);

  useEffect(() => {
    const storedUser = tokenStorage.getUser();
    const hasToken = tokenStorage.getAccessToken() ?? tokenStorage.getRefreshToken();
    if (hasToken && storedUser) {
      setUser(storedUser);
    }
    setIsLoading(false);
  }, []);

  const login = useCallback(
    async (data: { email: string; password: string; keepLogin: boolean }) => {
      await loginMutation.mutateAsync(data);
    },
    [loginMutation]
  );

  const logout = useCallback(async () => {
    await logoutMutation.mutateAsync();
  }, [logoutMutation]);

  const value: AuthContextValue = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}

