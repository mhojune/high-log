import Title from "@/components/title/Title";
import FaqList from "@/features/faq/FaqList";
import * as S from "@/pages/faq/Faq.styles";

export default function Faq() {
  return (
    <S.FaqContainer>
      <S.FaqWrapper>
        <Title text="FAQ" />
        <FaqList />
      </S.FaqWrapper>
    </S.FaqContainer>
  );
}
