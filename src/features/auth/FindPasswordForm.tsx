import { useState } from "react";
import PasswordInput from "@/components/input/PasswordInput";
import * as S from "@/features/auth/FindPasswordForm.styles";

type FindPasswordStep = "initial" | "newPassword";

interface FindPasswordFormProps {
  onSendVerificationCode: (email: string) => void;
  onVerifyAndGoNext: (data: { email: string; verificationCode: string }) => void;
  onChangePassword: (data: {
    email: string;
    verificationCode: string;
    currentPassword: string;
    newPassword: string;
    newPasswordConfirm: string;
  }) => void;
}

export default function FindPasswordForm({
  onSendVerificationCode,
  onVerifyAndGoNext,
  onChangePassword,
}: FindPasswordFormProps) {
  const [step, setStep] = useState<FindPasswordStep>("initial");
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");

  const handleGoToPasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    onVerifyAndGoNext({ email, verificationCode });
    setStep("newPassword");
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    onChangePassword({
      email,
      verificationCode,
      currentPassword,
      newPassword,
      newPasswordConfirm,
    });
  };

  if (step === "initial") {
    return (
      <S.Form onSubmit={handleGoToPasswordChange}>
        <S.FormTitle>비밀번호 찾기</S.FormTitle>
        <S.FieldWrapper $gap={7}>
          <S.Label htmlFor="findPassword-email">이메일</S.Label>
          <S.EmailInputRow>
            <S.AuthInput
              id="findPassword-email"
              type="email"
              placeholder="이메일을 입력해주세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <S.OpenModalButton
              type="button"
              onClick={() => email.trim() && onSendVerificationCode(email.trim())}
            >
              인증번호 받기
            </S.OpenModalButton>
          </S.EmailInputRow>
        </S.FieldWrapper>
        <S.VerifyCodeFieldWrapper $gap={5}>
          <S.Label htmlFor="findPassword-code">인증번호</S.Label>
          <S.AuthInput
            id="findPassword-code"
            type="text"
            placeholder="이메일로 받은 인증번호를 입력해주세요"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            required
          />
        </S.VerifyCodeFieldWrapper>
        <S.PasswordChangeButtonWrapper>
          <S.AuthPrimaryButton type="submit">비밀번호 변경</S.AuthPrimaryButton>
        </S.PasswordChangeButtonWrapper>
      </S.Form>
    );
  }

  // step === "newPassword"
  return (
    <S.Form onSubmit={handleChangePassword}>
      <S.FormTitle>비밀번호 변경</S.FormTitle>
      <S.FieldWrapper $gap={7}>
        <S.Label htmlFor="findPassword-current">현재 비밀번호</S.Label>
        <PasswordInput
          id="findPassword-current"
          placeholder="비밀번호를 입력해주세요"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          required
        />
      </S.FieldWrapper>
      <S.FieldWrapper $gap={7}>
        <S.Label htmlFor="findPassword-new">새 비밀번호</S.Label>
        <PasswordInput
          id="findPassword-new"
          placeholder="8자 이상, 영문, 숫자, 특수문자 3가지 조합"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
      </S.FieldWrapper>
      <S.FieldWrapper $gap={7}>
        <S.Label htmlFor="findPassword-confirm">새 비밀번호 확인</S.Label>
        <PasswordInput
          id="findPassword-confirm"
          placeholder="새 비밀번호 재입력"
          value={newPasswordConfirm}
          onChange={(e) => setNewPasswordConfirm(e.target.value)}
          required
        />
      </S.FieldWrapper>
      <S.SubmitButtonWrapper>
        <S.AuthPrimaryButton type="submit">변경 완료</S.AuthPrimaryButton>
      </S.SubmitButtonWrapper>
    </S.Form>
  );
}
