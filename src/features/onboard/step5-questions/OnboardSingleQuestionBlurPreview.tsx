import Label from "@/components/label/Label";
import Favorite from "@/components/favorite/Favorite";
import { DefaultButton } from "@/components/button/Button";
import Wand from "@/assets/icons/wand.svg?react";
import * as QC from "@/components/card/QuestionCard.styles";
import { ONBOARD_UNIFIED_BLUR_QUESTION_CARD } from "@/constants/onboard/onboardUnifiedBlurQuestion";
import * as S from "@/features/onboard/step5-questions/OnboardSingleQuestionBlurPreview.styles";

export type OnboardSingleQuestionBlurPreviewProps = {
  onFavoriteClick?: () => void;
};

/**
 * 블러 온보딩 예시 — `QuestionCard`와 동일 마크업·스타일(`QuestionCard.styles`),
 * 펼친 상태는 온보딩 전용으로 여기서만 구성합니다.(`QuestionCard` 컴포넌트 미사용)
 */
export default function OnboardSingleQuestionBlurPreview({
  onFavoriteClick,
}: OnboardSingleQuestionBlurPreviewProps = {}) {
  const {
    labelType,
    text,
    favoriteType = "default",
    questionPurposeText,
    answerPointText,
    answerText,
    answerCriteriaText,
  } = ONBOARD_UNIFIED_BLUR_QUESTION_CARD;

  const hasAnswerSection = Boolean(answerText) || Boolean(answerCriteriaText);

  return (
    <S.Outer>
      <S.BlurredInner>
        <QC.QuestionCardContainer>
          <QC.QuestionCardTop>
            <QC.QuestionCardLeft>
              <Label type={labelType} />
              <QC.QuestionCardText>{text}</QC.QuestionCardText>
            </QC.QuestionCardLeft>
            <Favorite type={favoriteType} onClick={onFavoriteClick ?? (() => {})} />
          </QC.QuestionCardTop>

          <QC.QuestionCardBottom>
            <QC.QuestionCardContent>
              <QC.QuestionCardDetailsSection>
                <QC.QuestionCardDetailsLeft>
                  <QC.QuestionPurposeRow>
                    <QC.QuestionPurposeLabel>질문 목적</QC.QuestionPurposeLabel>
                    <QC.QuestionPurposeText>{questionPurposeText}</QC.QuestionPurposeText>
                  </QC.QuestionPurposeRow>
                  <QC.AnswerPointRow>
                    <QC.AnswerPointLabel>답변 포인트</QC.AnswerPointLabel>
                    <QC.AnswerPointText>{answerPointText}</QC.AnswerPointText>
                  </QC.AnswerPointRow>
                </QC.QuestionCardDetailsLeft>
                <QC.QuestionCardDetailsRight>
                  <DefaultButton
                    width={165}
                    type="disabled"
                    text="모범 답변 확인하기"
                    onClick={() => {}}
                  />
                </QC.QuestionCardDetailsRight>
              </QC.QuestionCardDetailsSection>

              {hasAnswerSection && (
                <>
                  <QC.Divider />
                  {answerText && <QC.AnswerContent>{answerText}</QC.AnswerContent>}
                  {answerCriteriaText && (
                    <QC.AnswerCriteriaBox>
                      <QC.AnswerCriteriaHeader>
                        <QC.WandIcon as={Wand} width={24} height={24} />
                        <QC.AnswerCriteriaTitle>모범 답변 기준</QC.AnswerCriteriaTitle>
                      </QC.AnswerCriteriaHeader>
                      <QC.AnswerCriteriaText>{answerCriteriaText}</QC.AnswerCriteriaText>
                    </QC.AnswerCriteriaBox>
                  )}
                </>
              )}
            </QC.QuestionCardContent>
          </QC.QuestionCardBottom>
        </QC.QuestionCardContainer>
      </S.BlurredInner>
    </S.Outer>
  );
}
