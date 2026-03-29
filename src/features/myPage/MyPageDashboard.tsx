import { useMemo } from "react";
import * as S from "@/features/myPage/MyPageDashboard.styles";
import { USAGE_ANALYSIS_LABELS, EVALUATION_ITEMS } from "@/constants/myPage";
import { useMyPageDashboard } from "@/api/myPage/useMyPageDashboard";

export default function MyPageDashboard() {
  const { data, isLoading } = useMyPageDashboard();

  const usageValues = useMemo(() => {
    if (!data) return [null, null, null] as const;
    return [
      data.questionBookmarkCnt,
      data.interviewSessionCnt,
      data.interviewResponseAvg,
    ] as const;
  }, [data]);

  return (
    <S.DashboardContent>
      <S.DashboardUserName>
        {isLoading ? "…" : data?.userName ? `${data.userName} 님` : "-"}
      </S.DashboardUserName>
      <S.UsageAnalysisSection>
        <S.UsageAnalysisGrid>
          {USAGE_ANALYSIS_LABELS.map((item, index) => (
            <S.UsageAnalysisCard key={item.id}>
              <S.UsageAnalysisCardValue>
                {isLoading
                  ? "…"
                  : usageValues[index] === null || usageValues[index] === undefined
                    ? "-"
                    : String(usageValues[index])}
              </S.UsageAnalysisCardValue>
              <S.UsageAnalysisCardLabel>{item.label}</S.UsageAnalysisCardLabel>
            </S.UsageAnalysisCard>
          ))}
        </S.UsageAnalysisGrid>
      </S.UsageAnalysisSection>
      <S.EvaluationSection>
        <S.EvaluationList>
          {EVALUATION_ITEMS.map((item) => (
            <S.EvaluationCard key={item.id}>
              <S.EvaluationCardTextWrapper>
                <S.EvaluationCardTitle>{item.title}</S.EvaluationCardTitle>
                <S.EvaluationCardDescription>{item.description}</S.EvaluationCardDescription>
              </S.EvaluationCardTextWrapper>
              <S.EvaluationCardStatus>{item.status}</S.EvaluationCardStatus>
            </S.EvaluationCard>
          ))}
        </S.EvaluationList>
      </S.EvaluationSection>
    </S.DashboardContent>
  );
}
