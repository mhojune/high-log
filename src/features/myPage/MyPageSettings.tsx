import { DefaultButton } from "@/components/button/Button";
import { SETTINGS_ITEMS } from "@/constants/myPage";
import * as S from "./MyPageSettings.styles";

export default function MyPageSettings() {
  return (
    <S.SettingsContent>
      <S.SettingsTitle>설정</S.SettingsTitle>
      <S.SettingsCardSection>
        {SETTINGS_ITEMS.map((item) => (
          <S.SettingsCard key={item.id}>
            <S.SettingsCardTextWrapper>
              <S.SettingsCardTitle>{item.title}</S.SettingsCardTitle>
              <S.SettingsCardDescription>{item.description}</S.SettingsCardDescription>
            </S.SettingsCardTextWrapper>
            <S.SettingsCardButtonWrapper>
              <DefaultButton width={60} type="primary" text="켜짐" onClick={() => {}} />
            </S.SettingsCardButtonWrapper>
          </S.SettingsCard>
        ))}
      </S.SettingsCardSection>
    </S.SettingsContent>
  );
}
