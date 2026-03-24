import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import * as S from "@/pages/recordManagement/detail/questionsList/questionsList.styles";
import QuestionCard from "@/components/card/QuestionCard";
import { RECORDS_DUMMY_DATA, type TabType } from "@/constants/records";

const TABS: TabType[] = [
  "출결 상황",
  "교과 성적",
  "세부능력 및 특기사항",
  "창의적 체험활동",
  "행동특성 및 종합의견",
];

export default function QuestionsList() {
    const { id } = useParams<{ id: string }>();
    const [activeTab, setActiveTab] = useState<TabType>("출결 상황");

    const record = useMemo(() => {
        return RECORDS_DUMMY_DATA.find((r) => r.id === Number(id));
    }, [id]);

    const questions = useMemo(() => {
        if (!record) return [];
        return record.questions.filter((q) => q.category === activeTab);
    }, [record, activeTab]);

    if (!record) {
        return <S.EmptyState>생기부를 찾을 수 없습니다.</S.EmptyState>;
    }

    return (
        <S.questionsListContainer>
            <S.questionsListWrapper>
                <S.TextBox>
                    <S.Title>{record.title}</S.Title>
                    <S.DescriptionBox>
                        <S.UniversityBox>
                            <S.NameBox>
                                <S.Subject>지원하는 학교</S.Subject>
                                <S.Name>{record.targetSchool}</S.Name>
                            </S.NameBox>
                            <S.NameBox>
                                <S.Subject>지원 학과</S.Subject>
                                <S.Name>{record.targetMajor}</S.Name>
                            </S.NameBox>
                        </S.UniversityBox>
                        <S.TypeBox>
                            <S.Subject>면접 전형</S.Subject>
                            <S.Name>학생부 종합 전형</S.Name>
                        </S.TypeBox>
                    </S.DescriptionBox>
                </S.TextBox>
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
                    {questions.length > 0 ? (
                        questions.map((q) => (
                        <S.QuestionCardWrapper key={q.id}>
                            <QuestionCard 
                                labelType={q.labelType}
                                text={q.question}
                                questionPurposeText={q.questionPurposeText}
                                answerPointText={q.answerPointText}
                                answerText={q.answerText}
                                answerCriteriaText={q.answerCriteriaText}
                                passage={q.passage}
                            />
                        </S.QuestionCardWrapper>
                        ))
                    ) : (
                        <S.EmptyState>해당 영역에 대한 질문이 없습니다.</S.EmptyState>
                    )}
                </S.QuestionList>
            </S.questionsListWrapper>
        </S.questionsListContainer>
    )
}
