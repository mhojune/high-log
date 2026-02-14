import { useState } from "react";
import Label from "@/components/label/Label";
import Favorite from "@/components/favorite/Favorite";
import { DefaultButton } from "@/components/button/Button";
import Wand from "@/assets/icons/wand.svg?react";
import * as S from "@/components/card/QuestionCard.styles";

export interface QuestionCardProps {
  labelType: "basic" | "intermediate" | "advanced" | "good" | "normal" | "improve";
  text: string;
  favoriteType?: "default" | "select";
  onFavoriteClick?: () => void;
  passage?: string;
  questionPurposeText: string;
  answerPointText: string;
  answerText?: string;
  answerCriteriaText?: string;
  onAnswerButtonClick?: () => void;
}

export default function QuestionCard({
  labelType,
  text,
  favoriteType = "default",
  onFavoriteClick,
  passage,
  questionPurposeText,
  answerPointText,
  answerText,
  answerCriteriaText,
  onAnswerButtonClick,
}: QuestionCardProps) {
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);

  const handleAnswerButtonClick = () => {
    setIsAnswerRevealed(true);
    if (onAnswerButtonClick) {
      onAnswerButtonClick();
    }
  };

  return (
    <S.QuestionCardContainer>
      <S.QuestionCardTop>
        <S.QuestionCardLeft>
          <Label type={labelType} />
          <S.QuestionCardText>{text}</S.QuestionCardText>
        </S.QuestionCardLeft>
        <Favorite type={favoriteType} onClick={onFavoriteClick || (() => {})} />
      </S.QuestionCardTop>

      <S.QuestionCardBottom>
        <S.QuestionCardContent>
          {passage && <S.Passage>{passage}</S.Passage>}
          <S.QuestionCardDetailsSection>
            <S.QuestionCardDetailsLeft>
              <S.QuestionPurposeRow>
                <S.QuestionPurposeLabel>질문 목적</S.QuestionPurposeLabel>
                <S.QuestionPurposeText>{questionPurposeText}</S.QuestionPurposeText>
              </S.QuestionPurposeRow>
              <S.AnswerPointRow>
                <S.AnswerPointLabel>답변 포인트</S.AnswerPointLabel>
                <S.AnswerPointText>{answerPointText}</S.AnswerPointText>
              </S.AnswerPointRow>
            </S.QuestionCardDetailsLeft>
            <S.QuestionCardDetailsRight>
              <DefaultButton
                width={165}
                type={isAnswerRevealed ? "disabled" : "secondary"}
                text="모범 답변 확인하기"
                onClick={handleAnswerButtonClick}
              />
            </S.QuestionCardDetailsRight>
          </S.QuestionCardDetailsSection>
          {isAnswerRevealed && answerText && (
            <>
              <S.Divider />
              <S.AnswerContent>{answerText}</S.AnswerContent>
              {answerCriteriaText && (
                <S.AnswerCriteriaBox>
                  <S.AnswerCriteriaHeader>
                    <S.WandIcon as={Wand} width={24} height={24} />
                    <S.AnswerCriteriaTitle>모범 답변 기준</S.AnswerCriteriaTitle>
                  </S.AnswerCriteriaHeader>
                  <S.AnswerCriteriaText>{answerCriteriaText}</S.AnswerCriteriaText>
                </S.AnswerCriteriaBox>
              )}
            </>
          )}
        </S.QuestionCardContent>
      </S.QuestionCardBottom>
    </S.QuestionCardContainer>
  );
}
