import { useAuth } from "@/contexts/AuthContext";
import * as S from "./MyPage.styles";

export default function MyPage() {
  const { user, logout } = useAuth();

  return (
    <S.Container>
      <h1>MyPage</h1>
      {user && <p>{user.name}님 환영합니다.</p>}
      <S.LogoutButton type="button" onClick={logout}>
        로그아웃
      </S.LogoutButton>
    </S.Container>
  );
}
