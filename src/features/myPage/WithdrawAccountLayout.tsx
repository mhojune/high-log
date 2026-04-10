import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "@/components/title/Title";
import CheckBox from "@/components/input/CheckBox";
import PasswordInput from "@/components/input/PasswordInput";
import Modal from "@/components/modal/Modal";
import { DefaultButton } from "@/components/button/Button";
import * as S from "@/features/myPage/MyPageLayout.styles";
import * as W from "@/features/myPage/WithdrawAccountLayout.styles";
import { FieldLabel } from "@/features/myPage/MyPagePasswordChange.styles";
import { ApiErrorException, parseApiError } from "@/api/client";
import { useWithdrawAccount } from "@/api/myPage/useWithdrawAccount";
import { useAuth } from "@/contexts/AuthContext";
import {
  WITHDRAW_ACCOUNT_CANCEL_BUTTON_TEXT,
  WITHDRAW_ACCOUNT_CONFIRM_LABEL,
  WITHDRAW_ACCOUNT_DESCRIPTION_ITEMS,
  WITHDRAW_ACCOUNT_HEADING,
  WITHDRAW_ACCOUNT_PAGE_TITLE,
  WITHDRAW_ACCOUNT_REASON_HEADING,
  WITHDRAW_ACCOUNT_SUBMIT_BUTTON_TEXT,
  WITHDRAW_PASSWORD_MODAL_MAIN,
  WITHDRAW_PASSWORD_MODAL_SUB,
} from "@/constants/myPage";

function isWithdrawPasswordRelatedApiError(err: unknown): boolean {
  if (!(err instanceof ApiErrorException)) return false;
  if (err.status === 401) return true;
  const c = err.code.toLowerCase();
  const m = err.message.toLowerCase();
  if (c.includes("password") || c.includes("credential")) return true;
  if (m.includes("비밀번호")) return true;
  if (
    m.includes("password") &&
    (m.includes("wrong") || m.includes("incorrect") || m.includes("invalid"))
  ) {
    return true;
  }
  if (err.status !== 500) return false;
  return (
    m.includes("internal server") ||
    m.includes("서버 내부") ||
    m.includes("내부 서버")
  );
}

export default function WithdrawAccountLayout() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { mutateAsync: submitWithdraw, isPending } = useWithdrawAccount();

  const [withdrawReason, setWithdrawReason] = useState("");
  const [withdrawPassword, setWithdrawPassword] = useState("");
  const [withdrawConfirm, setWithdrawConfirm] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState({ main: "", sub: "" });

  const toggleWithdrawConfirm = () => setWithdrawConfirm((prev) => !prev);

  const closeModal = () => setModalOpen(false);

  const showModal = (main: string, sub?: string) => {
    setModalMessage({ main, sub: sub ?? "" });
    setModalOpen(true);
  };

  const showPasswordModal = () => {
    showModal(WITHDRAW_PASSWORD_MODAL_MAIN, WITHDRAW_PASSWORD_MODAL_SUB);
  };

  const handleCancel = () => {
    navigate("/mypage");
  };

  const handleSubmitWithdraw = async () => {
    if (!withdrawConfirm) {
      showModal("안내", "회원탈퇴 안내를 확인하고 동의해주세요.");
      return;
    }
    const pwd = withdrawPassword.trim();
    if (!pwd) {
      showPasswordModal();
      return;
    }
    try {
      const reasonTrimmed = withdrawReason.trim();
      await submitWithdraw({
        password: pwd,
        ...(reasonTrimmed ? { reason: reasonTrimmed } : {}),
      });
      await logout();
    } catch (err) {
      if (isWithdrawPasswordRelatedApiError(err)) {
        showPasswordModal();
        return;
      }
      const { message } = parseApiError(err);
      showModal("회원탈퇴 실패", message);
    }
  };

  return (
    <S.LayoutWrapper>
      <W.WithdrawTitleSection>
        <Title text={WITHDRAW_ACCOUNT_PAGE_TITLE} />
      </W.WithdrawTitleSection>
      <S.ContentWrapper>
        <W.WithdrawMainArea>
          <W.WithdrawHeading>{WITHDRAW_ACCOUNT_HEADING}</W.WithdrawHeading>
          <W.WithdrawDescriptionList>
            {WITHDRAW_ACCOUNT_DESCRIPTION_ITEMS.map((line, index) => (
              <W.WithdrawDescriptionLine key={index}>{line}</W.WithdrawDescriptionLine>
            ))}
          </W.WithdrawDescriptionList>
          <W.WithdrawReasonSection>
            <W.WithdrawReasonHeading>
              {WITHDRAW_ACCOUNT_REASON_HEADING}
            </W.WithdrawReasonHeading>
            <W.WithdrawReasonTextarea
              id="withdraw-reason"
              name="withdrawReason"
              value={withdrawReason}
              onChange={(e) => setWithdrawReason(e.target.value)}
              autoComplete="off"
            />
            <W.WithdrawConfirmRow>
              <CheckBox isChecked={withdrawConfirm} onClick={toggleWithdrawConfirm} />
              <W.WithdrawConfirmLabel>
                {WITHDRAW_ACCOUNT_CONFIRM_LABEL}
              </W.WithdrawConfirmLabel>
            </W.WithdrawConfirmRow>
            <W.WithdrawPasswordSection>
              <FieldLabel htmlFor="withdraw-password">현재 비밀번호</FieldLabel>
              <W.WithdrawPasswordFieldWrapper>
                <PasswordInput
                  id="withdraw-password"
                  placeholder="비밀번호를 입력해주세요"
                  value={withdrawPassword}
                  onChange={(e) => setWithdrawPassword(e.target.value)}
                  autoComplete="current-password"
                  disabled={isPending}
                />
              </W.WithdrawPasswordFieldWrapper>
            </W.WithdrawPasswordSection>
            <W.WithdrawButtonGroup>
              <DefaultButton
                width={60}
                type="primary"
                text={WITHDRAW_ACCOUNT_CANCEL_BUTTON_TEXT}
                onClick={handleCancel}
              />
              <DefaultButton
                width={120}
                type={isPending ? "disabled" : "secondary"}
                text={WITHDRAW_ACCOUNT_SUBMIT_BUTTON_TEXT}
                onClick={() => void handleSubmitWithdraw()}
              />
            </W.WithdrawButtonGroup>
          </W.WithdrawReasonSection>
        </W.WithdrawMainArea>
      </S.ContentWrapper>
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        mainTitle={modalMessage.main}
        subTitle={modalMessage.sub || undefined}
        leftButtonText="닫기"
        rightButtonText="다시입력"
        onLeftButtonClick={closeModal}
        onRightButtonClick={closeModal}
      />
    </S.LayoutWrapper>
  );
}
