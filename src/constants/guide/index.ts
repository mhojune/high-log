export const GUIDE_TITLE = "한 눈에 보는 하이로그";

export const GUIDE_SUBTITLE = [
  "학교 생활 기록부를 업로드 하면 대입 5개 영역 맞춤 질문을 확인할 수 있어요.",
  "질문은 보관함에 쌓이고, 면접 연습으로 실전 대비까지 이어집니다.",
] as const;

export const GUIDE_FLOW_TITLE = "5단계로 끝내는 준비 흐름";

export const GUIDE_RESULT_TITLE = "결과 확인해보기";

export const GUIDE_TRY_TITLE = "지금 바로 생기부 업로드하고 예상 질문을 만나보세요";
export const GUIDE_TRY_PRIMARY_BUTTON = "질문 생성 시작하기";
export const GUIDE_TRY_SECONDARY_BUTTON = "셈플 데이터 보기";

export interface GuideResultExampleItem {
  title: string;
  descriptions: string[];
}

export const GUIDE_RESULT_EXAMPLES: GuideResultExampleItem[] = [
  {
    title: "질문 예시",
    descriptions: [
      "1. 전공(지원학과)을 선택한 이유와,\n\t그 선택에 영향을 준 경험을 말해보세요.",
      "2. 동아리/프로젝트에서 맡았던 역할과,\n\t그 과정에서 배운 점은 무엇인가요?",
      "3. 활동 중 예상과 다르게 결과가 나왔을 때,\n\t문제를 어떻게 해결했나요?",
    ],
  },
  {
    title: "답변 포인트",
    descriptions: [
      " 결론: 컴퓨터공학을 선택한 이유(흥미/강점)를\n1문장으로 말하기",
      " 근거: 행렬 곱셈 최적화 과제에서 구현 → 성능 측정 →\n비교/개선 한 경험 제시",
      " 연결: 효율 중심 설계를 배웠고, 데이터 처리·성능\n최적화를 더 공부하겠다고 마무리",
    ],
  },
  {
    title: "모범 답변",
    descriptions: [
      " 저는 컴퓨터공학을 선택한 이유가, 문제를 더 효율적으로\n해결하는 과정이 재미있었기 때문입니다.",
      " 알고리즘 과제에서 행렬 곱셈을 구현하며 실행 시간을\n비교해 더 빠른 방식의 필요성을 정리했습니다.",
      " 이 경험을 통해 효율의 중요성을 배웠고, 데이터 처리와\n성능 최적화를 더 깊게 공부하고 싶습니다.",
    ],
  },
];

export interface GuideFlowItem {
  number: number;
  title: string;
  description: string;
  result: string;
}

export const GUIDE_FLOW_ITEMS: GuideFlowItem[] = [
  {
    number: 1,
    title: "회원가입",
    description: "원활한 서비스 이용을 위해\n회원가입이 필요해요.",
    result: "회원가입 완료",
  },
  {
    number: 2,
    title: "생기부 업로드",
    description: "생기부를 업로드하면 대입 5개 영역\n맞춤 질문을 받을 수 있어요.",
    result: "항목별 질문 목록",
  },
  {
    number: 3,
    title: "예상 질문 생성",
    description: "항목별 질문과 답변\n포인트를 만나볼 수 있어요.",
    result: "질문 세트 + 포인트",
  },
  {
    number: 4,
    title: "질문 보관함",
    description: "즐겨찾기를 통해 질문을 반복 학습\n할 수 있어요.",
    result: "나의 질문 보관함",
  },
  {
    number: 5,
    title: "면접 연습",
    description: "성공적인 면접을 위해 질문을 바탕\n으로 연습할 수 있어요.",
    result: "실전 대비 루틴 완성",
  },
];
