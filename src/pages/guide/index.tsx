import * as S from "./Guide.styles";
import GuideTitleSection from "@/features/guide/GuideTitleSection";
import GuideFlowSection from "@/features/guide/GuideFlowSection";
import GuideResultSection from "@/features/guide/GuideResultSection";
import GuideTrySection from "@/features/guide/GuideTrySection";

export default function Guide() {
  return (
    <S.Container>
      <GuideTitleSection />
      <S.FlowResultWrapper>
        <GuideFlowSection />
        <GuideResultSection />
        <GuideTrySection />
      </S.FlowResultWrapper>
    </S.Container>
  );
}
