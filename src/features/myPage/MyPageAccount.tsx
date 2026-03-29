import { DefaultButton } from "@/components/button/Button";
import * as S from "@/features/myPage/MyPageAccount.styles";
import { useMyPageAccountInfo } from "@/api/myPage/useMyPageAccountInfo";

type MyPageAccountProps = {
  onNavigateToPasswordChange: () => void;
};

export default function MyPageAccount({ onNavigateToPasswordChange }: MyPageAccountProps) {
  const { data, isLoading } = useMyPageAccountInfo();

  const displayName = isLoading ? "…" : data?.userName ? `${data.userName} 님` : "-";
  const fieldsKey = data ? `${data.userName}-${data.email}` : "loading";

  return (
    <S.AccountContent>
      <S.AccountUserName>{displayName}</S.AccountUserName>
      <S.AccountFormSection>
        <S.AccountFieldRow>
          <S.AccountField>
            <S.AccountFieldLabel htmlFor="account-name">이름</S.AccountFieldLabel>
            <S.AccountFieldInput
              key={`name-${fieldsKey}`}
              id="account-name"
              type="text"
              placeholder="이름을 입력해주세요"
              defaultValue={data?.userName ?? ""}
            />
          </S.AccountField>
          <S.AccountField>
            <S.AccountFieldLabel htmlFor="account-email">이메일</S.AccountFieldLabel>
            <S.AccountFieldInput
              key={`email-${fieldsKey}`}
              id="account-email"
              type="email"
              placeholder="이메일을 입력해주세요"
              defaultValue={data?.email ?? ""}
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
