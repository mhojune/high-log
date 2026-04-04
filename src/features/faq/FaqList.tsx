import * as S from "@/features/faq/Faq.styles";
import { useState } from "react";
import { useFaqs } from "@/api/faq/useFaqApi";
import type { FaqItem } from "@/api/faq/faqTypes";

export default function FaqList() {
  const [openId, setOpenId] = useState<number | null>(null);
  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const { data, isLoading, isError } = useFaqs();

  if (isLoading) return <div>로딩 중...</div>;
  if (isError || !data) return <div>FAQ 목록을 불러올 수 없습니다.</div>;

  return (
    <S.FaqContainer>
      {data.faqs.map((item: FaqItem) => {
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
