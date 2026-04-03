import { useState } from "react";
import { DefaultButton } from "@/components/button/Button";
import PasswordInput from "@/components/input/PasswordInput";
import Modal from "@/components/modal/Modal";
import * as S from "@/features/myPage/MyPagePasswordChange.styles";
import { useMyPageAccountInfo } from "@/api/myPage/useMyPageAccountInfo";
import { useChangePassword } from "@/api/myPage/useChangePassword";
import { ApiErrorException, parseApiError } from "@/api/client";

function isInternalServerError(err: unknown): boolean {
  if (err instanceof ApiErrorException && err.status === 500) return true;
  const { message } = parseApiError(err);
  const m = message.toLowerCase();
  return (
    m.includes("internal server") ||
    m.includes("서버 내부") ||
    m.includes("내부 서버")
  );
}

function getPasswordChangeFailureMessage(err: unknown, newPassword: string): string {
  const { message } = parseApiError(err);
  if (newPassword.length >= 8 && isInternalServerError(err)) {
    return "현재 비밀번호가 올바르지 않습니다.";
  }
  return message;
}

type MyPagePasswordChangeProps = {
  onClose: () => void;
};

export default function MyPagePasswordChange({ onClose }: MyPagePasswordChangeProps) {
  const { data: account, isLoading: isAccountLoading } = useMyPageAccountInfo();
  const { mutateAsync: submitChangePassword, isPending } = useChangePassword();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState({ main: "", sub: "" });

  const closeModal = () => setModalOpen(false);

  const showModal = (main: string, sub?: string) => {
    setModalMessage({ main, sub: sub ?? "" });
    setModalOpen(true);
  };

  const displayName = isAccountLoading
    ? "…"
    : account?.userName
      ? `${account.userName} 님`
      : "-";

  const handleSave = async () => {
    if (!currentPassword.trim() || !newPassword || !newPasswordConfirm) {
      showModal("입력 확인", "모든 항목을 입력해주세요.");
      return;
    }
    if (newPassword !== newPasswordConfirm) {
      showModal("비밀번호 확인", "새 비밀번호가 서로 일치하지 않습니다.");
      return;
    }
    try {
      await submitChangePassword({ currentPassword, newPassword });
      onClose();
    } catch (err) {
      showModal("비밀번호 변경 실패", getPasswordChangeFailureMessage(err, newPassword));
    }
  };

  return (
    <S.Content>
      <S.UserName>{displayName}</S.UserName>
      <S.CurrentPasswordSection>
        <S.FieldLabel htmlFor="current-password">현재 비밀번호</S.FieldLabel>
        <S.CurrentPasswordFieldWrapper>
          <PasswordInput
            id="current-password"
            placeholder="현재 비밀번호를 입력해주세요"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            autoComplete="current-password"
          />
        </S.CurrentPasswordFieldWrapper>
      </S.CurrentPasswordSection>
      <S.NewPasswordSection>
        <S.NewPasswordField>
          <S.FieldLabel htmlFor="new-password">새 비밀번호</S.FieldLabel>
          <S.FieldWrapper>
            <PasswordInput
              id="new-password"
              placeholder="새 비밀번호를 입력해주세요"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              autoComplete="new-password"
            />
          </S.FieldWrapper>
        </S.NewPasswordField>
        <S.NewPasswordField>
          <S.FieldLabel htmlFor="new-password-confirm">새 비밀번호 확인</S.FieldLabel>
          <S.FieldWrapper>
            <PasswordInput
              id="new-password-confirm"
              placeholder="새 비밀번호를 다시 입력해주세요"
              value={newPasswordConfirm}
              onChange={(e) => setNewPasswordConfirm(e.target.value)}
              autoComplete="new-password"
            />
          </S.FieldWrapper>
        </S.NewPasswordField>
      </S.NewPasswordSection>
      <S.ButtonGroup>
        <DefaultButton width={60} type="primary" text="취소" onClick={onClose} />
        <DefaultButton
          width={120}
          type={isPending ? "disabled" : "secondary"}
          text="비밀번호 저장"
          onClick={() => void handleSave()}
        />
      </S.ButtonGroup>
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        mainTitle={modalMessage.main}
        subTitle={modalMessage.sub || undefined}
        leftButtonText="닫기"
        rightButtonText="확인"
        onLeftButtonClick={closeModal}
        onRightButtonClick={closeModal}
      />
    </S.Content>
  );
}
