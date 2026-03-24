import { useAuth } from "@/contexts/AuthContext";
import * as S from "./MyPageDashboard.styles";
import { USAGE_ANALYSIS_ITEMS, EVALUATION_ITEMS } from "@/constants/myPage";

export default function MyPageDashboard() {
  const { user } = useAuth();

  return (
    <S.DashboardContent>
      <S.DashboardUserName>{user?.name ? `${user.name} 님` : "-"}</S.DashboardUserName>
      <S.UsageAnalysisSection>
        <S.UsageAnalysisGrid>
          {USAGE_ANALYSIS_ITEMS.map((item) => (
            <S.UsageAnalysisCard key={item.id}>
              <S.UsageAnalysisCardValue>{item.value}</S.UsageAnalysisCardValue>
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
