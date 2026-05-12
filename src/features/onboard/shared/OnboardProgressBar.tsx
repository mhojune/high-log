import * as S from "@/features/onboard/shared/OnboardProgressBar.styles";

interface OnboardProgressBarProps {
  totalSteps?: number;
  currentStep?: number;
}

export default function OnboardProgressBar({
  totalSteps = 5,
  currentStep = 1,
}: OnboardProgressBarProps) {
  return (
    <S.Wrapper>
      <S.Segments $totalSteps={totalSteps}>
        {Array.from({ length: totalSteps }, (_, index) => {
          const step = index + 1;
          const isActive = step <= currentStep;
          const isActiveEnd =
            isActive && (step === totalSteps || step + 1 > currentStep);

          return (
            <S.Segment key={step} $active={isActive} $activeEnd={isActiveEnd} />
          );
        })}
      </S.Segments>
    </S.Wrapper>
  );
}
