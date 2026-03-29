import { DefaultButton } from "@/components/button/Button";
import { SETTINGS_ITEMS } from "@/constants/myPage";
import * as S from "@/features/myPage/MyPageSettings.styles";
import { useMyPageSetting } from "@/api/myPage/useMyPageSetting";

export default function MyPageSettings() {
  const { data, isLoading } = useMyPageSetting();

  const autoSaveOn = data?.responseAutoSave === true;

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
              <DefaultButton
                width={60}
                type={isLoading ? "disabled" : autoSaveOn ? "primary" : "secondary"}
                text={isLoading ? "…" : autoSaveOn ? "켜짐" : "꺼짐"}
                onClick={() => {}}
              />
            </S.SettingsCardButtonWrapper>
          </S.SettingsCard>
        ))}
      </S.SettingsCardSection>
    </S.SettingsContent>
  );
}
