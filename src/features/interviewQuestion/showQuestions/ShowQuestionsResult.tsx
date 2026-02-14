import { useState } from "react";
import * as S from "@/features/interviewQuestion/showQuestions/ShowQuestions.styles";
import QuestionCard, { type QuestionCardProps } from "@/components/card/QuestionCard";
import Title from "@/components/title/Title";

const TABS = [
  "출결 상황",
  "교과 성적",
  "세부능력 및 특기사항",
  "창의적 체험활동",
  "행동특성 및 종합의견",
] as const;

type TabType = (typeof TABS)[number];

const AI_BOOKSTORE_PASSAGE =
  '최근 한 대형 서점이 AI를 활용한 도서 추천 시스템을 도입했다. 이 시스템은 고객의 구매 이력, 검색 기록, 체류 시간 등을 분석하여 개인 맞춤형 도서를 추천한다. 실제로 매출은 30% 증가했지만 일부 비평가들은 "AI가 추천하는 책만 읽게 되면 사고의 다양성이 줄어들고 우연히 새로운 분야의 책을 발견할 기회가 사라진다"고 우려를 표명했다. 반면 서점 측은 "고객이 원하는 책을 더 쉽게 찾도록 돕는 것일 뿐"이라고 반박했다.';
const MOCK_ANSWER_TEXT =
  "수학 성적이 낮았던 이유를 분석해 보니 개념 이해가 부족했습니다. 매일 1시간씩 기초 개념을 복습하고, 오답 노트를 작성하며 약점을 보완했어요. 2학기에는 성적이 한 등급 올랐습니다.";

const MOCK_ANSWER_CRITERIA =
  "① 구체적인 어려움이 무엇이었는지 ② 어떤 방법으로 극복했는지 ③ 그 결과가 어떠했는지가 담겨 있는지 확인하세요.";

const MOCK_QUESTIONS: Record<TabType, Array<QuestionCardProps>> = {
  "출결 상황": [
    {
      labelType: "basic",
      text: "출결 상황에 대해 설명해주세요",
      questionPurposeText: "출결 태도 파악",
      answerPointText: "지각/결석 사유, 개선 노력",
    },
  ],
  "교과 성적": [
    {
      labelType: "basic",
      text: "발표를 준비하면서 가장 어려웠던 점은 무엇이었나요?",
      questionPurposeText: "문제해결 과정 확인",
      answerPointText: "자료 조사, 해석의 어려움, 극복 과정",
    },
    {
      labelType: "basic",
      text: "발표를 준비하면서 가장 어려웠던 점은 무엇이었나요?",
      questionPurposeText: "문제해결 과정 확인",
      answerPointText: "자료 조사, 해석의 어려움, 극복 과정",
    },
    {
      labelType: "advanced",
      text: "다음 제시문을 읽고 본인의 견해와 그렇게 생각하는 근거를 설명해주세요.",
      passage: AI_BOOKSTORE_PASSAGE,
      questionPurposeText: "비판적 사고력, 균형 잡힌 관점, 논리적 근거 제시 능력",
      answerPointText: "제시문 핵심 쟁점 파악 (편리성 vs 다양성)",
    },
    {
      labelType: "intermediate",
      text: "발표를 준비하면서 가장 어려웠던 점은 무엇이었나요?",
      questionPurposeText: "문제해결 과정 확인",
      answerPointText: "원인 분석, 구체적 노력, 결과",
      answerText: MOCK_ANSWER_TEXT,
      answerCriteriaText: MOCK_ANSWER_CRITERIA,
    },
  ],
  "세부능력 및 특기사항": [
    {
      labelType: "advanced",
      text: "세부능력 및 특기사항에서 배운 점은?",
      questionPurposeText: "역량 파악",
      answerPointText: "경험 기반 성장",
    },
  ],
  "창의적 체험활동": [
    {
      labelType: "good",
      text: "창의적 체험활동 경험을 공유해주세요",
      questionPurposeText: "활동 경험 파악",
      answerPointText: "역할, 배운 점",
    },
  ],
  "행동특성 및 종합의견": [
    {
      labelType: "normal",
      text: "행동특성 및 종합의견에 대한 소감은?",
      questionPurposeText: "자아 인식 파악",
      answerPointText: "성장 과정, 반성",
    },
  ],
};

export default function ShowQuestionsResult() {
  const [activeTab, setActiveTab] = useState<TabType>("출결 상황");
  const questions = MOCK_QUESTIONS[activeTab];

  return (
    <>
      <S.HeaderSection>
        <S.TitleWrapper>
          <Title text="질문 생성" />
        </S.TitleWrapper>
        <S.Description>
          하이로그의 면접 예상 질문은 대입 전형용 생활기록부를 기반으로
        </S.Description>
        <S.Description>
          총 5개 영역(출결, 성적, 교과 및 세부능력 특기사항, 창의적 체험활동, 행동특성 및
          종합의견)의 예상 질문을 받아볼 수 있어요
        </S.Description>
      </S.HeaderSection>
      <S.TabContainer>
        {TABS.map((tab) => (
          <S.TabItem
            key={tab}
            $isActive={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </S.TabItem>
        ))}
      </S.TabContainer>
      <S.QuestionList>
        {questions.map((q, i) => (
          <S.QuestionCardWrapper key={i}>
            <QuestionCard {...q} />
          </S.QuestionCardWrapper>
        ))}
      </S.QuestionList>
    </>
  );
}
