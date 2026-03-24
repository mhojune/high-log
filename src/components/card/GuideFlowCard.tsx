import * as S from "./GuideFlowCard.styles";

interface GuideFlowCardProps {
  number: number;
  title: string;
  description: string;
  result: string;
}

export default function GuideFlowCard({
  number,
  title,
  description,
  result,
}: GuideFlowCardProps) {
  return (
    <S.GuideFlowCardContainer>
      <S.NumberBox>{number}</S.NumberBox>
      <S.FlowTitle>{title}</S.FlowTitle>
      <S.Description>{description}</S.Description>
      <S.ResultBox>
        <S.ResultLabel>결과</S.ResultLabel>
        <S.ResultValue>{result}</S.ResultValue>
      </S.ResultBox>
    </S.GuideFlowCardContainer>
  );
}
