import * as S from "@/pages/term/Term.styles"
import { TERM_INTRO, TERM_SECTIONS } from "@/constants/term";

export default function Term() {
    return (
        <S.TermContainer>
            <S.TermWrapper>
                <S.TitleBox>
                    <S.MainTitle>하이로그 서비스 이용약관</S.MainTitle>
                    <S.Line />
                </S.TitleBox>
                <S.InfoBox>
                    {TERM_INTRO}
                </S.InfoBox>
                {TERM_SECTIONS.map((section) => (
                    <S.BodyBox key={section.id}>
                        <S.TitleBox>
                            <S.BodyTitle>{section.title}</S.BodyTitle>
                            <S.Line />
                        </S.TitleBox>
                        <S.BodyText>{section.content}</S.BodyText>
                    </S.BodyBox>
                ))}
            </S.TermWrapper>
        </S.TermContainer>
    );
};
  