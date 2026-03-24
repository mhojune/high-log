import * as S from "./GuideFlowSection.styles";
import GuideFlowCard from "@/components/card/GuideFlowCard";
import { GUIDE_FLOW_TITLE, GUIDE_FLOW_ITEMS } from "@/constants/guide";

const TOP_ROW_ITEMS = GUIDE_FLOW_ITEMS.slice(0, 3);
const BOTTOM_ROW_ITEMS = GUIDE_FLOW_ITEMS.slice(3, 5);

export default function GuideFlowSection() {
  return (
    <S.GuideFlowSectionContainer>
      <S.FlowTitle>{GUIDE_FLOW_TITLE}</S.FlowTitle>
      <S.FlowCardsArea>
        <S.FlowCardsTopRowWrapper>
          <S.FlowCardsRow>
            {TOP_ROW_ITEMS.map((item) => (
              <GuideFlowCard
                key={item.number}
                number={item.number}
                title={item.title}
                description={item.description}
                result={item.result}
              />
            ))}
          </S.FlowCardsRow>
          <S.FlowCardsTopRowCircle aria-hidden>
            <S.FlowCardsTopRowCircleInner />
          </S.FlowCardsTopRowCircle>
          <S.FlowCardsTopRowLine aria-hidden />
        </S.FlowCardsTopRowWrapper>
        <S.FlowCardsBottomRowWrapper>
          <S.FlowCardsBottomRowLine aria-hidden />
          <S.FlowCardsBottomRowCircle aria-hidden>
            <S.FlowCardsBottomRowCircleInner />
          </S.FlowCardsBottomRowCircle>
          <S.FlowCardsBottomRow>
            {BOTTOM_ROW_ITEMS.map((item) => (
              <GuideFlowCard
                key={item.number}
                number={item.number}
                title={item.title}
                description={item.description}
                result={item.result}
              />
            ))}
          </S.FlowCardsBottomRow>
        </S.FlowCardsBottomRowWrapper>
      </S.FlowCardsArea>
    </S.GuideFlowSectionContainer>
  );
}
