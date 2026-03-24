import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { DefaultButton } from "@/components/button/Button";
import PasswordInput from "@/components/input/PasswordInput";
import * as S from "./MyPagePasswordChange.styles";

type MyPagePasswordChangeProps = {
  onClose: () => void;
};

export default function MyPagePasswordChange({ onClose }: MyPagePasswordChangeProps) {
  const { user } = useAuth();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");

  return (
    <S.Content>
      <S.UserName>{user?.name ? `${user.name} 님` : "-"}</S.UserName>
      <S.CurrentPasswordSection>
        <S.FieldLabel htmlFor="current-password">현재 비밀번호</S.FieldLabel>
        <S.CurrentPasswordFieldWrapper>
          <PasswordInput
            id="current-password"
            placeholder="현재 비밀번호를 입력해주세요"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
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
            />
          </S.FieldWrapper>
        </S.NewPasswordField>
      </S.NewPasswordSection>
      <S.ButtonGroup>
        <DefaultButton width={60} type="primary" text="취소" onClick={() => {}} />
        <DefaultButton
          width={120}
          type="secondary"
          text="비밀번호 저장"
          onClick={onClose}
        />
      </S.ButtonGroup>
    </S.Content>
  );
}
