import OnboardSingleQuestionBlurPreview from "@/features/onboard/step5-questions/OnboardSingleQuestionBlurPreview";

export type OnboardBlurredQuestionCardProps = {
  onFavoriteClick?: () => void;
};

/**
 * 온보딩 탭별 동일 블러 예시 카드(문구·유형 고정).
 * 탭별 `QuestionCard` 스텁 props와 무관합니다.
 */
export default function OnboardBlurredQuestionCard({
  onFavoriteClick,
}: OnboardBlurredQuestionCardProps = {}) {
  return <OnboardSingleQuestionBlurPreview onFavoriteClick={onFavoriteClick} />;
}
