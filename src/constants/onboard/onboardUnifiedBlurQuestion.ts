import type { QuestionCardProps } from "@/components/card/QuestionCard";

/**
 * 모든 온보딩 탭에서 블러 예시 카드에만 쓰는 단일 카피·난이도.
 * 탭별 스텁 질문과 겹치지 않게 별도 시나리오로 둡니다.
 */
export const ONBOARD_UNIFIED_BLUR_QUESTION_CARD: Pick<
  QuestionCardProps,
  | "labelType"
  | "text"
  | "questionPurposeText"
  | "answerPointText"
  | "answerText"
  | "answerCriteriaText"
  | "favoriteType"
> = {
  labelType: "intermediate",
  favoriteType: "default",
  text:
    "지원 학과·전형 선택 이유와, 생활기록부에 나타난 본인의 역량이 그 선택과 어떻게 연결된다고 보는지 말해 주세요.",
  questionPurposeText:
    "학업 목표와 학생부 간 서사의 일관성, 학과 적합성에 대한 성찰이 있는지 확인합니다.",
  answerPointText:
    "학과 특성 또는 관심 계기 한 줄 → 생기부 속 구체 활동이나 교과 역량 근거 → 앞으로의 학습 각오 순으로 말합니다.",
  answerText:
    "○○ 학과에는 데이터 기반 문제 정의 과정에서 흥미가 생겼습니다. 과제형 수행평가에서 자료 신뢰성을 검증하며 설문 설계까지 맡았고, 대학에서도 동일한 디테일 기준으로 탐구를 이어가고 싶습니다.",
  answerCriteriaText: "진로·전형과 기록의 연결 논리, 근거의 구체성, 표현의 진정성.",
};
