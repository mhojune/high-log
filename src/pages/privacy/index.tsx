import * as S from "@/pages/privacy/Privacy.styles"
import { PRIVACY_INTRO, PRIVACY_SECTIONS } from "@/constants/privacy";

export default function Privacy() {
    return (
        <S.PrivacyContainer>
            <S.PrivacyWrapper>
                <S.TitleBox>
                    <S.MainTitle>개인정보 처리방침</S.MainTitle>
                    <S.Line />
                </S.TitleBox>
                <S.InfoBox>
                    {PRIVACY_INTRO}
                </S.InfoBox>
                {PRIVACY_SECTIONS.map((section) => (
                    <S.BodyBox key={section.id}>
                        <S.TitleBox>
                            <S.BodyTitle>{section.title}</S.BodyTitle>
                            <S.Line />
                        </S.TitleBox>
                        <S.BodyText>{section.content}</S.BodyText>
                    </S.BodyBox>
                ))}
            </S.PrivacyWrapper>
        </S.PrivacyContainer>
    );
};
  