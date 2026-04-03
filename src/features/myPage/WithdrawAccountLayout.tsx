import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "@/components/title/Title";
import CheckBox from "@/components/input/CheckBox";
import { DefaultButton } from "@/components/button/Button";
import * as S from "@/features/myPage/MyPageLayout.styles";
import * as W from "@/features/myPage/WithdrawAccountLayout.styles";
import {
  WITHDRAW_ACCOUNT_CANCEL_BUTTON_TEXT,
  WITHDRAW_ACCOUNT_CONFIRM_LABEL,
  WITHDRAW_ACCOUNT_DESCRIPTION_ITEMS,
  WITHDRAW_ACCOUNT_HEADING,
  WITHDRAW_ACCOUNT_PAGE_TITLE,
  WITHDRAW_ACCOUNT_REASON_HEADING,
  WITHDRAW_ACCOUNT_SUBMIT_BUTTON_TEXT,
} from "@/constants/myPage";

export default function WithdrawAccountLayout() {
  const navigate = useNavigate();
  const [withdrawReason, setWithdrawReason] = useState("");
  const [withdrawConfirm, setWithdrawConfirm] = useState(false);

  const toggleWithdrawConfirm = () => setWithdrawConfirm((prev) => !prev);

  const handleCancel = () => {
    navigate("/mypage");
  };

  const handleSubmitWithdraw = () => {
    // TODO: 회원 탈퇴 API
  };

  return (
    <S.LayoutWrapper>
      <W.WithdrawTitleSection>
        <Title text={WITHDRAW_ACCOUNT_PAGE_TITLE} />
      </W.WithdrawTitleSection>
      <S.ContentWrapper>
        <W.WithdrawMainArea aria-label="회원 탈퇴">
          <W.WithdrawHeading>{WITHDRAW_ACCOUNT_HEADING}</W.WithdrawHeading>
          <W.WithdrawDescriptionList>
            {WITHDRAW_ACCOUNT_DESCRIPTION_ITEMS.map((line, index) => (
              <W.WithdrawDescriptionLine key={index}>{line}</W.WithdrawDescriptionLine>
            ))}
          </W.WithdrawDescriptionList>
          <W.WithdrawReasonSection aria-labelledby="withdraw-reason-heading">
            <W.WithdrawReasonHeading id="withdraw-reason-heading">
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
              <W.WithdrawConfirmLabel>{WITHDRAW_ACCOUNT_CONFIRM_LABEL}</W.WithdrawConfirmLabel>
            </W.WithdrawConfirmRow>
            <W.WithdrawButtonGroup>
              <DefaultButton
                width={60}
                type="primary"
                text={WITHDRAW_ACCOUNT_CANCEL_BUTTON_TEXT}
                onClick={handleCancel}
              />
              <DefaultButton
                width={120}
                type="secondary"
                text={WITHDRAW_ACCOUNT_SUBMIT_BUTTON_TEXT}
                onClick={handleSubmitWithdraw}
              />
            </W.WithdrawButtonGroup>
          </W.WithdrawReasonSection>
        </W.WithdrawMainArea>
      </S.ContentWrapper>
    </S.LayoutWrapper>
  );
}
