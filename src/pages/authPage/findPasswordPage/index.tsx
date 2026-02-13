import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "@/components/modal/Modal";
import AuthDescription from "@/features/auth/AuthDescription";
import FindPasswordForm from "@/features/auth/FindPasswordForm";
import * as S from "@/pages/authPage/AuthPage.styles";

export default function FindPasswordPage() {
  const navigate = useNavigate();
  const [isSentModalOpen, setIsSentModalOpen] = useState(false);

  const handleSendVerificationCode = (email: string) => {
    // TODO: API - 인증번호 발송
    console.log("인증번호 발송 요청:", email);
    setIsSentModalOpen(true);
  };

  const handleVerifyAndGoNext = (data: { email: string; verificationCode: string }) => {
    // TODO: API - 인증번호 검증
    console.log("인증번호 검증:", data);
  };

  const handleChangePassword = (data: {
    email: string;
    verificationCode: string;
    currentPassword: string;
    newPassword: string;
    newPasswordConfirm: string;
  }) => {
    // TODO: API - 비밀번호 변경
    console.log("비밀번호 변경:", data);
    navigate("/auth");
  };

  return (
    <S.Container>
      <S.ContentWrapper>
        <S.LeftFrame>
          <AuthDescription />
        </S.LeftFrame>
        <S.FormFrame>
          <S.FormFrameContentWithPadding>
            <FindPasswordForm
              onSendVerificationCode={handleSendVerificationCode}
              onVerifyAndGoNext={handleVerifyAndGoNext}
              onChangePassword={handleChangePassword}
            />
          </S.FormFrameContentWithPadding>
        </S.FormFrame>
      </S.ContentWrapper>
      <Modal
        isOpen={isSentModalOpen}
        onClose={() => setIsSentModalOpen(false)}
        mainTitle="인증번호가 발송되었습니다"
        subTitle="입력한 이메일로 인증번호를 발송했습니다."
        leftButtonText="확인"
        rightButtonText="확인"
        onLeftButtonClick={() => setIsSentModalOpen(false)}
        onRightButtonClick={() => setIsSentModalOpen(false)}
      />
    </S.Container>
  );
}
