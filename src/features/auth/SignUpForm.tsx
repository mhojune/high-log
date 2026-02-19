import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckBox from "@/components/input/CheckBox";
import PasswordInput from "@/components/input/PasswordInput";
import { SIGN_UP_AGREEMENT_ITEMS } from "@/constants/auth";
import * as S from "@/features/auth/SignUpForm.styles";

interface SignUpFormProps {
  onSendVerificationCode?: (email: string) => void;
  onVerifyCode?: (email: string, verificationCode: string) => void;
  onSubmit: (data: {
    name: string;
    email: string;
    verificationCode: string;
    password: string;
    passwordConfirm: string;
    agreements: {
      이용약관: boolean;
      개인정보처리방침: boolean;
      만14세이상: boolean;
    };
  }) => void;
}

export default function SignUpForm({
  onSendVerificationCode,
  onVerifyCode,
  onSubmit,
}: SignUpFormProps) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [agreements, setAgreements] = useState({
    이용약관: false,
    개인정보처리방침: false,
    만14세이상: false,
  });

  const handleAgreementChange = (key: keyof typeof agreements) => {
    setAgreements((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name,
      email,
      verificationCode,
      password,
      passwordConfirm,
      agreements,
    });
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.SignUpTitle>회원가입</S.SignUpTitle>
      <S.InputSection>
        <S.FieldWrapper $gap={7}>
          <S.Label htmlFor="name">이름</S.Label>
          <S.AuthInput
            id="name"
            type="text"
            placeholder="홍길동"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </S.FieldWrapper>
        <S.FieldWrapper $gap={7}>
          <S.Label htmlFor="email">이메일</S.Label>
          <S.EmailInputRow>
            <S.AuthInput
              id="email"
              type="email"
              placeholder="honggildong@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <S.OpenModalButton
              type="button"
              onClick={() =>
                email.trim() && onSendVerificationCode?.(email.trim())
              }
            >
              인증번호 받기
            </S.OpenModalButton>
          </S.EmailInputRow>
        </S.FieldWrapper>
        <S.VerifyCodeFieldWrapper $gap={5}>
          <S.Label htmlFor="verificationCode">인증번호</S.Label>
          <S.EmailInputRow>
            <S.AuthInput
              id="verificationCode"
              type="text"
              placeholder="이메일로 받은 인증번호를 입력해주세요"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              required
            />
            <S.OpenModalButton
              type="button"
              onClick={() =>
                email.trim() &&
                verificationCode.trim() &&
                onVerifyCode?.(email.trim(), verificationCode.trim())
              }
            >
              인증번호 확인
            </S.OpenModalButton>
          </S.EmailInputRow>
        </S.VerifyCodeFieldWrapper>
        <S.FieldWrapper $gap={5}>
          <S.Label htmlFor="password">비밀번호</S.Label>
          <PasswordInput
            id="password"
            placeholder="8자 이상, 영문, 숫자, 특수문자 3가지 조합"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </S.FieldWrapper>
        <S.FieldWrapper $gap={5}>
          <S.Label htmlFor="passwordConfirm">비밀번호 확인</S.Label>
          <PasswordInput
            id="passwordConfirm"
            placeholder="비밀번호 재입력"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
          />
        </S.FieldWrapper>
      </S.InputSection>
      <S.CheckboxSection>
        {SIGN_UP_AGREEMENT_ITEMS.map((item) => (
          <S.CheckboxRow key={item.key}>
            <S.CheckboxLeft>
              <CheckBox
                isChecked={agreements[item.key]}
                onClick={() => handleAgreementChange(item.key)}
              />
              <S.CheckboxText>{item.label}</S.CheckboxText>
            </S.CheckboxLeft>
            {item.buttonText && item.buttonPath && (
              <S.AuthUnderBarButton
                type="button"
                onClick={() => navigate(item.buttonPath!)}
              >
                {item.buttonText}
              </S.AuthUnderBarButton>
            )}
          </S.CheckboxRow>
        ))}
      </S.CheckboxSection>
      <S.SubmitButtonWrapper>
        <S.AuthPrimaryButton type="submit">회원가입</S.AuthPrimaryButton>
      </S.SubmitButtonWrapper>
    </S.Form>
  );
}
