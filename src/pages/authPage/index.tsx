import { useState } from "react";
import AuthDescription from "@/features/auth/AuthDescription";
import LoginForm from "@/features/auth/LoginForm";
import SignUpForm from "@/features/auth/SignUpForm";
import Tab from "@/components/tab/Tab";
import * as S from "@/pages/authPage/AuthPage.styles";

type AuthMode = "login" | "signup";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<AuthMode>("login");

  const handleLoginSubmit = (data: {
    email: string;
    password: string;
    keepLogin: boolean;
  }) => {
    console.log("로그인 요청:", data);
  };

  const handleSignUpSubmit = (data: {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
    agreements: { 이용약관: boolean; 개인정보처리방침: boolean; 만14세이상: boolean };
  }) => {
    console.log("회원가입 요청:", data);
  };

  return (
    <S.Container>
      <S.ContentWrapper>
        <S.LeftFrame>
          <AuthDescription />
        </S.LeftFrame>
        <S.FormFrame>
          <S.FormFrameContent>
            <S.TabWrapper>
              <Tab activeTab={activeTab} onTabChange={setActiveTab} />
            </S.TabWrapper>
            {activeTab === "login" ? (
              <LoginForm onSubmit={handleLoginSubmit} />
            ) : (
              <SignUpForm onSubmit={handleSignUpSubmit} />
            )}
          </S.FormFrameContent>
        </S.FormFrame>
      </S.ContentWrapper>
    </S.Container>
  );
}
