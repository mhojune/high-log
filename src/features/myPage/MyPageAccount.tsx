import { useAuth } from "@/contexts/AuthContext";
import { DefaultButton } from "@/components/button/Button";
import * as S from "./MyPageAccount.styles";

type MyPageAccountProps = {
  onNavigateToPasswordChange: () => void;
};

export default function MyPageAccount({ onNavigateToPasswordChange }: MyPageAccountProps) {
  const { user } = useAuth();

  return (
    <S.AccountContent>
      <S.AccountUserName>{user?.name ? `${user.name} 님` : "-"}</S.AccountUserName>
      <S.AccountFormSection>
        <S.AccountFieldRow>
          <S.AccountField>
            <S.AccountFieldLabel htmlFor="account-name">이름</S.AccountFieldLabel>
            <S.AccountFieldInput
              id="account-name"
              type="text"
              placeholder="이름을 입력해주세요"
              defaultValue={user?.name ?? ""}
            />
          </S.AccountField>
          <S.AccountField>
            <S.AccountFieldLabel htmlFor="account-email">이메일</S.AccountFieldLabel>
            <S.AccountFieldInput
              id="account-email"
              type="email"
              placeholder="이메일을 입력해주세요"
              defaultValue={user?.email ?? ""}
            />
          </S.AccountField>
        </S.AccountFieldRow>
      </S.AccountFormSection>
      <S.AccountButtonGroup>
        <DefaultButton width={60} type="primary" text="저장" onClick={() => {}} />
        <DefaultButton
          width={120}
          type="secondary"
          text="비밀번호 변경"
          onClick={onNavigateToPasswordChange}
        />
      </S.AccountButtonGroup>
    </S.AccountContent>
  );
}
