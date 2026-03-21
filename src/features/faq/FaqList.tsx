import * as S from "@/features/faq/Faq.styles";
import { type FaqItem, DUMMY_FAQ } from "@/features/faq/FaqData";
import { useState } from "react";

export default function FaqList() {
  const [openId, setOpenId] = useState<number | null>(null);
  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <S.FaqContainer>
      {DUMMY_FAQ.map((item: FaqItem) => {
        const isOpen = openId === item.id;
        return (
          <S.FaqList $isOpen={isOpen} key={item.id}>
            <S.ContentBox key={item.id}>
              <S.TextBox>
                <S.QIcon>Q</S.QIcon>
                <S.QuestionText>{item.question}</S.QuestionText>
              </S.TextBox>
              <S.Acodian
                onClick={() => toggleFaq(item.id)}
                $isOpen={openId === item.id}
              />
            </S.ContentBox>
            <S.AnswerBox $isOpen={isOpen}>
              <S.AnswerText>{item.answer}</S.AnswerText>
            </S.AnswerBox>
          </S.FaqList>
        );
      })}
    </S.FaqContainer>
  );
}
