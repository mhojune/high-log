import { DefaultButton } from "@/components/button/Button"
import Label from "@/components/label/Label"
import Title from "@/components/title/Title"
import * as S from "@/features/interviewResult/ResultStep1.styles"

// 더미 데이터 생성
const DUMMY_DATA = {
    subject: "세특 기반 질문 5문항",
    totalScore: 82,
    scoreDescription: "이번 연습 기준 종합 평가입니다",
    specifyScores: [
        { subject: "전공 적합성", score: 15, total: 25 },
        { subject: "인성", score: 20, total: 25 },
        { subject: "발전가능성", score: 16, total: 25 },
        { subject: "의사소통능력", score: 24, total: 25 },
    ],
    pros: ["구체적 사례 제시", "논리적 구조(서론·본론·결론)", "태도/톤 안정적"],
    cons: ["결론이 늦게 나옴", "근거(수치/성과) 부족", "질문 의도 재확인 필요"],
    questions: [
        {
            id: 1,
            question: "지원 동기를 말해보세요.",
            time: "1:55",
            evaluation: "normal" as const, // Label 컴포넌트 타입에 맞춤
            feedback: {
                improve: "결론을 먼저 말하고 근거 2개로 압축하기",
                complement: "활동 성과를 수치로 1개 이상 제시",
            },
        },
        {
            id: 2,
            question: "갈등 상황을 해결한 경험이 있나요?",
            time: "1:55",
            evaluation: "improve" as const,
            feedback: {
                improve: "상황 설명을 줄이고 해결 행동(본인 행동)을 중심으로 말하기",
                complement: "결과/변화(전후 비교)를 짧게 마무리로 넣기",
            },
        },
        {
            id: 3,
            question: "가장 기억에 남는 세특 활동은?",
            time: "1:55",
            evaluation: "good" as const,
            feedback: {
                improve: "“내 역할”을 더 명확히 강조하기",
                complement: "배운 점을 전공과 연결하는 문장 1줄 추가",
            },
        },
    ],
};

export default function ResultStep1() {
    return (
        <S.Step1Container>
            <S.TitleBox>
                <Title text="결과 분석" />
                <DefaultButton width={78} type="primary" text="저장" onClick={() => {}} />
            </S.TitleBox>
            <S.ResultWrapper>
                <S.SubjectText>{DUMMY_DATA.subject}</S.SubjectText>
                <S.ScoreBox>
                    <S.Score>{DUMMY_DATA.totalScore} / 100</S.Score> 
                    <S.ScoreDescription>{DUMMY_DATA.scoreDescription}</S.ScoreDescription>
                </S.ScoreBox>
                <S.SpecifyScoreBox>
                    <S.Title>영역별 점수</S.Title>
                    {DUMMY_DATA.specifyScores.map((item, index) => (
                        <S.SpecifyBox key={index}>
                            <S.SpecifySubject>{item.subject}</S.SpecifySubject>
                            <S.ProgressContainer>
                                <S.ProgressBar width={`${(item.score / item.total) * 100}%`} />
                            </S.ProgressContainer>
                            <S.SpecifyScore>{item.score}/{item.total}</S.SpecifyScore>
                        </S.SpecifyBox>
                    ))}
                </S.SpecifyScoreBox>
                <S.ProsconsBox>
                    <S.Title>강점/약점 한눈에 보기</S.Title>
                    <S.ProsBox>
                        {DUMMY_DATA.pros.map((pro, index) => (
                            <S.Pros key={index}>
                                <S.ProsText>{pro}</S.ProsText>
                            </S.Pros>
                        ))}
                    </S.ProsBox>
                    <S.ConsBox>
                        {DUMMY_DATA.cons.map((con, index) => (
                            <S.Cons key={index}>
                                <S.ConsText>{con}</S.ConsText>
                            </S.Cons>
                        ))}
                    </S.ConsBox>
                </S.ProsconsBox>
                <S.AnalyzeBox>
                    <S.Title>
                        상세 분석
                    </S.Title>
                    <S.Wrapper>
                        <S.LableBox>
                            <S.Column>질문</S.Column>
                            <S.RightBox>
                                <S.Column>답변시간</S.Column>
                                <S.Column>평가</S.Column>
                            </S.RightBox>
                        </S.LableBox>
                        {DUMMY_DATA.questions.map((q) => (
                            <S.SetBox key={q.id}>
                                <S.QuestionBox>
                                    <S.QuestionText>{q.question}</S.QuestionText>
                                    <S.RightBox>
                                        <S.Time>{q.time}</S.Time>
                                        <Label type={q.evaluation} />
                                    </S.RightBox>
                                </S.QuestionBox>
                                <S.PointBox>
                                    <S.ImproveBox>
                                        <S.BlueText>개선 포인트</S.BlueText>
                                        <S.SuggestText>{q.feedback.improve}</S.SuggestText>
                                    </S.ImproveBox>
                                    <S.ComplementBox>
                                        <S.BlueText>보완 필요</S.BlueText>
                                        <S.SuggestText>{q.feedback.complement}</S.SuggestText>
                                    </S.ComplementBox>
                                </S.PointBox>
                            </S.SetBox>
                        ))}
                    </S.Wrapper>
                </S.AnalyzeBox>
            </S.ResultWrapper>
        </S.Step1Container>
    )
}