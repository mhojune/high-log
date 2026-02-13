import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckBox from "@/components/input/CheckBox";
import PasswordInput from "@/components/input/PasswordInput";
import * as S from "@/features/auth/LoginForm.styles";

interface LoginFormProps {
  onSubmit: (data: { email: string; password: string; keepLogin: boolean }) => void;
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepLogin, setKeepLogin] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ email, password, keepLogin });
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.LoginTitle>로그인</S.LoginTitle>
      <S.FieldWrapper $gap={7}>
        <S.Label htmlFor="email">이메일</S.Label>
        <S.AuthInput
          id="email"
          type="email"
          placeholder="이메일을 입력해주세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </S.FieldWrapper>
      <S.FieldWrapper $gap={5}>
        <S.Label htmlFor="password">비밀번호</S.Label>
        <PasswordInput
          id="password"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </S.FieldWrapper>
      <S.KeepLoginRow>
        <S.KeepLoginLeft>
          <CheckBox isChecked={keepLogin} onClick={() => setKeepLogin((prev) => !prev)} />
          <S.KeepLoginText>로그인 상태 유지</S.KeepLoginText>
        </S.KeepLoginLeft>
        <S.AuthUnderBarButton
          type="button"
          onClick={() => navigate("/auth/find-password")}
        >
          회원가입
        </S.AuthUnderBarButton>
      </S.KeepLoginRow>
      <S.SubmitButtonWrapper>
        <S.AuthPrimaryButton type="submit">로그인</S.AuthPrimaryButton>
      </S.SubmitButtonWrapper>
    </S.Form>
  );
}
