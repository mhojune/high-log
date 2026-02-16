export type TabType = "출결 상황" | "교과 성적" | "세부능력 및 특기사항" | "창의적 체험활동" | "행동특성 및 종합의견";

export interface QuestionItem {
    id: number;
    question: string;
    labelType: "basic" | "intermediate" | "advanced" | "good" | "normal";
    questionPurposeText: string;
    answerPointText: string;
    category: TabType;
    answerText?: string;
    answerCriteriaText?: string;
    passage?: string; // Added passage field
}

export interface ReportProps {
    id: number;
    title: string;
    targetSchool: string;
    targetMajor: string;
    status: '작성 완료' | '검토 중' | '임시 저장';
    createdAt: string;
    fileName?: string; // Optional for uploaded files
    questions: QuestionItem[];
}

const TABS: TabType[] = [
    "출결 상황",
    "교과 성적",
    "세부능력 및 특기사항",
    "창의적 체험활동",
    "행동특성 및 종합의견",
];

const LABEL_TYPES = ["basic", "intermediate", "advanced", "good", "normal"] as const;

const AI_BOOKSTORE_PASSAGE =
  '최근 한 대형 서점이 AI를 활용한 도서 추천 시스템을 도입했다. 이 시스템은 고객의 구매 이력, 검색 기록, 체류 시간 등을 분석하여 개인 맞춤형 도서를 추천한다. 실제로 매출은 30% 증가했지만 일부 비평가들은 "AI가 추천하는 책만 읽게 되면 사고의 다양성이 줄어들고 우연히 새로운 분야의 책을 발견할 기회가 사라진다"고 우려를 표명했다. 반면 서점 측은 "고객이 원하는 책을 더 쉽게 찾도록 돕는 것일 뿐"이라고 반박했다.';

export const RECORDS_DUMMY_DATA: ReportProps[] = Array.from({ length: 32 }, (_, i) => ({
    id: i + 1,
    title: `202${4 - Math.floor(i / 10)}학년도 ${1 + (i % 2)}학기 생기부 - ${i + 1}`,
    targetSchool: i % 3 === 0 ? "한양대학교(ERICA)" : (i % 3 === 1 ? "서울대학교" : "성균관대학교"),
    targetMajor: i % 3 === 0 ? "컴퓨터학부" : (i % 3 === 1 ? "컴퓨터공학부" : "소프트웨어학과"),
    status: i % 3 === 0 ? "작성 완료" : (i % 3 === 1 ? "검토 중" : "임시 저장"),
    createdAt: `202${5 - Math.floor(i / 10)}.03.${String((i % 12) + 1).padStart(2, '0')}`,
    fileName: `생기부_${i + 1}.pdf`,
    questions: Array.from({ length: Math.floor(Math.random() * 6) + 10 }, (_, j) => {
        const labelType = LABEL_TYPES[Math.floor(Math.random() * LABEL_TYPES.length)];
        return {
            id: j + 1,
            question: `생기부 기반 면접 예상 질문 ${j + 1} - ${i + 1}번 학생`,
            labelType: labelType,
            questionPurposeText: "이 질문은 학생의 ~ 능력을 파악하기 위함입니다.",
            answerPointText: "구체적인 사례를 들어 답변하는 것이 좋습니다.",
            category: TABS[Math.floor(Math.random() * TABS.length)],
            answerText: Math.random() > 0.5 ? "이것은 예시 답변입니다. 학생의 경험을 바탕으로 솔직하게 답변하세요." : undefined,
            answerCriteriaText: Math.random() > 0.5 ? "① 구체성 ② 논리성 ③ 태도" : undefined,
            passage: labelType === "advanced" ? AI_BOOKSTORE_PASSAGE : undefined, // Assign passage only for advanced questions
        };
    })
}));