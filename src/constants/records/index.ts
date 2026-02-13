export interface QuestionItem {
    id: number;
    question: string;
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

export const RECORDS_DUMMY_DATA: ReportProps[] = Array.from({ length: 32 }, (_, i) => ({
    id: i + 1,
    title: `202${4 - Math.floor(i / 10)}학년도 ${1 + (i % 2)}학기 생기부 - ${i + 1}`,
    targetSchool: i % 3 === 0 ? "한양대학교(ERICA)" : (i % 3 === 1 ? "서울대학교" : "성균관대학교"),
    targetMajor: i % 3 === 0 ? "컴퓨터학부" : (i % 3 === 1 ? "컴퓨터공학부" : "소프트웨어학과"),
    status: i % 3 === 0 ? "작성 완료" : (i % 3 === 1 ? "검토 중" : "임시 저장"),
    createdAt: `202${5 - Math.floor(i / 10)}.03.${String((i % 12) + 1).padStart(2, '0')}`,
    fileName: `생기부_${i + 1}.pdf`,
    questions: Array.from({ length: Math.floor(Math.random() * 6) + 5 }, (_, j) => ({
        id: j + 1,
        question: `생기부 기반 면접 예상 질문 ${j + 1} - ${i + 1}번 학생`
    }))
}));