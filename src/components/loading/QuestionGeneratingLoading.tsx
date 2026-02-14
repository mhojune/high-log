import * as S from "@/components/loading/QuestionGeneratingLoading.styles";

export interface QuestionGeneratingLoadingProps {
  percent?: number;
  isComplete?: boolean;
}

export default function QuestionGeneratingLoading({
  percent = 0,
  isComplete = false,
}: QuestionGeneratingLoadingProps) {
  const displayPercent = isComplete ? 100 : Math.min(100, Math.max(0, percent));
  const text = isComplete ? "생각 완료!" : "질문을 생각하고 있어요...";

  return (
    <S.Container>
      <S.TextRow>
        <S.Text $isComplete={isComplete}>{text}</S.Text>
        <S.PercentText $isComplete={isComplete}>{displayPercent}%</S.PercentText>
      </S.TextRow>
      <S.ProgressBarTrack>
        <S.ProgressBarFill $percent={displayPercent} $isComplete={isComplete} />
      </S.ProgressBarTrack>
    </S.Container>
  );
}
