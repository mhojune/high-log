import * as S from "@/components/card/QuestionCard.styles";
import * as L from "@/components/card/LoadingCard.styles";

export default function LoadingCard() {
  return (
    <L.LoadingCardContainer>
      <L.LoadingCardTop />
      <S.QuestionCardBottom>
        <S.QuestionCardContent>
          <L.SkeletonRowsWrapper>
            <L.SkeletonBox $width="200px" $height="18px" />
            <L.SkeletonBox $width="280px" $height="18px" />
          </L.SkeletonRowsWrapper>
        </S.QuestionCardContent>
      </S.QuestionCardBottom>
    </L.LoadingCardContainer>
  );
}
