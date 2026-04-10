import { useEffect, useState } from "react";
import { DefaultButton } from "@/components/button/Button";
import * as S from "@/features/myPage/MyPageAccount.styles";
import { useMyPageAccountInfo } from "@/api/myPage/useMyPageAccountInfo";
import { useChangeName } from "@/api/myPage/useChangeName";

const MAX_NAME_LENGTH = 50;

type MyPageAccountProps = {
  onNavigateToPasswordChange: () => void;
};

export default function MyPageAccount({
  onNavigateToPasswordChange,
}: MyPageAccountProps) {
  const { data, isLoading } = useMyPageAccountInfo();
  const { mutateAsync: submitNameChange, isPending } = useChangeName();

  const [name, setName] = useState("");

  useEffect(() => {
    if (data?.userName !== undefined) {
      setName(data.userName);
    }
  }, [data?.userName]);

  const displayName = isLoading ? "…" : data?.userName ? `${data.userName} 님` : "-";
  const fieldsKey = data ? `${data.userName}-${data.email}` : "loading";

  const handleSaveName = async () => {
    const trimmed = name.trim();
    if (!trimmed || trimmed.length > MAX_NAME_LENGTH) return;
    if (trimmed === (data?.userName ?? "")) return;
    try {
      await submitNameChange({ newName: trimmed });
    } catch {}
  };

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
              maxLength={MAX_NAME_LENGTH}
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isLoading}
              autoComplete="name"
            />
          </S.AccountField>
          <S.AccountField>
            <S.AccountFieldLabel htmlFor="account-email">이메일</S.AccountFieldLabel>
            <S.AccountEmailInput
              key={`email-${fieldsKey}`}
              id="account-email"
              type="email"
              readOnly
              autoComplete="email"
              defaultValue={data?.email ?? ""}
            />
          </S.AccountField>
        </S.AccountFieldRow>
      </S.AccountFormSection>
      <S.AccountButtonGroup>
        <DefaultButton
          width={60}
          type={isPending ? "disabled" : "primary"}
          text="저장"
          onClick={() => void handleSaveName()}
        />
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
