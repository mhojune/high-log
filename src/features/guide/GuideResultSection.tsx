import * as S from "./GuideResultSection.styles";
import { GUIDE_RESULT_TITLE, GUIDE_RESULT_EXAMPLES } from "@/constants/guide";

export default function GuideResultSection() {
  return (
    <S.ResultSectionContainer>
      <S.ResultTitle>{GUIDE_RESULT_TITLE}</S.ResultTitle>
      <S.ResultCardsArea>
        {GUIDE_RESULT_EXAMPLES.map((item, index) => (
          <S.ResultExampleBox key={index}>
            <S.ResultExampleBoxTitle>{item.title}</S.ResultExampleBoxTitle>
            <S.ResultExampleBoxDescription>
              {item.descriptions.map((desc, i) => (
                <S.ResultExampleBoxDescriptionItem key={i}>{desc}</S.ResultExampleBoxDescriptionItem>
              ))}
            </S.ResultExampleBoxDescription>
          </S.ResultExampleBox>
        ))}
      </S.ResultCardsArea>
    </S.ResultSectionContainer>
  );
}
