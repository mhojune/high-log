import { DefaultButton } from "@/components/button/Button";
import Label from "@/components/label/Label";
import Title from "@/components/title/Title";
import * as S from "@/features/interviewResult/ResultStep1.styles";
import { useInterviewAnalyze } from "@/api/interview/useInterviewApi";
import { useParams } from "react-router-dom";

const formatTime = (seconds: number) => {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
};

const mapEvaluation = (evalString: string) => {
  if (evalString === "좋음" || evalString === "우수") return "good";
  if (evalString === "보통") return "normal";
  return "improve";
};

const DUMMY_RESULT_DATA = {
  interview_logs: [
    {
      question: "자기소개 부탁드립니다.",
      answer:
        "안녕하세요, 저는 도전을 즐기고 끊임없이 성장하는 개발자를 꿈꾸는 지원자입니다. 고등학교 재학 시절 알고리즘 동아리 기장을 맡아 팀원들과 소통하며 협업의 중요성을 배웠습니다.",
      response_time: 45,
      sub_topic: "공통",
    },
    {
      question: "리더십 경험에 대해 말씀해주세요",
      answer:
        "동아리 부장으로서 부원들의 의견을 조율하고 프로젝트 일정을 관리했습니다. 특히 갈등이 발생했을 때 중재자 역할을 하여 성공적으로 프로젝트를 마무리할 수 있었습니다.",
      response_time: 60,
      sub_topic: "리더십",
    },
  ],
  scores: {
    전공적합성: 20,
    인성: 18,
    발전가능성: 22,
    의사소통능력: 19,
    총점: 79,
  },
  strength_tags: [
    "구체적 사례 제시",
    "논리적 구조(서론·본론·결론)",
    "태도/톤 안정적",
  ],
  weakness_tags: [
    "결론이 늦게 나옴",
    "답변 시간이 느림",
    "질문 의도 재확인 필요",
  ],
  detailed_analysis: [
    {
      question: "자기소개 부탁드립니다.",
      response_time: 45,
      evaluation: "좋음",
      improvement_point: "결론을 먼저 말하고 구체 사례 덧붙이기",
      supplement_needed: "활동 성과를 수치로 1개 이상 제시",
    },
    {
      question: "리더십 경험에 대해 말씀해주세요",
      response_time: 60,
      evaluation: "보통",
      improvement_point:
        "상황 설명을 줄이고 해결 행동(본인 행동)을 중심으로 말하기",
      supplement_needed: "구체적인 결과 수치 언급하기",
    },
  ],
};

export default function ResultStep1() {
  const { sessionId } = useParams<{ sessionId: string }>();

  const { data, isError } = useInterviewAnalyze(sessionId || "", {
    enabled: !!sessionId,
  });
  const displayData = data && !isError ? data : DUMMY_RESULT_DATA;

  const specifyScores = [
    { subject: "전공적합성", score: displayData.scores.전공적합성, total: 25 },
    { subject: "인성", score: displayData.scores.인성, total: 25 },
    { subject: "발전가능성", score: displayData.scores.발전가능성, total: 25 },
    {
      subject: "의사소통능력",
      score: displayData.scores.의사소통능력,
      total: 25,
    },
  ];

  return (
    <S.Step1Container>
      <S.TitleBox>
        <Title text="결과 분석" />
        <DefaultButton
          width={78}
          type="primary"
          text="저장"
          onClick={() => {}}
        />
      </S.TitleBox>
      <S.ResultWrapper>
        <S.SubjectText>질문 설정 정보</S.SubjectText>
        <S.SettingsContainer>
          <S.SettingBox>
            <S.SettingLabel>지원 계열</S.SettingLabel>
            <S.SettingValue>인문</S.SettingValue>
          </S.SettingBox>
          <S.SettingBox>
            <S.SettingLabel>지원 학과/전공</S.SettingLabel>
            <S.SettingValue>경영학과</S.SettingValue>
          </S.SettingBox>
          <S.SettingBox>
            <S.SettingLabel>면접 모드</S.SettingLabel>
            <S.SettingValue>필기 면접</S.SettingValue>
          </S.SettingBox>
          <S.SettingBox>
            <S.SettingLabel>난이도</S.SettingLabel>
            <S.SettingValue>보통</S.SettingValue>
          </S.SettingBox>
        </S.SettingsContainer>
        <S.ScoreBox>
          <S.Score>{displayData.scores.총점} / 100</S.Score>
          <S.ScoreDescription>
            이번 연습 기준 종합 평가입니다
          </S.ScoreDescription>
        </S.ScoreBox>
        <S.SpecifyScoreBox>
          <S.Title>영역별 점수</S.Title>
          {specifyScores.map((item, index) => (
            <S.SpecifyBox key={index}>
              <S.SpecifySubject>{item.subject}</S.SpecifySubject>
              <S.ProgressContainer>
                <S.ProgressBar width={`${(item.score / item.total) * 100}%`} />
              </S.ProgressContainer>
              <S.SpecifyScore>
                {item.score}/{item.total}
              </S.SpecifyScore>
            </S.SpecifyBox>
          ))}
        </S.SpecifyScoreBox>
        <S.ProsconsBox>
          <S.Title>강점/약점 한눈에 보기</S.Title>
          <S.ProsBox>
            {displayData.strength_tags.map((pro, index) => (
              <S.Pros key={index}>
                <S.ProsText>{pro}</S.ProsText>
              </S.Pros>
            ))}
          </S.ProsBox>
          <S.ConsBox>
            {displayData.weakness_tags.map((con, index) => (
              <S.Cons key={index}>
                <S.ConsText>{con}</S.ConsText>
              </S.Cons>
            ))}
          </S.ConsBox>
        </S.ProsconsBox>

        <S.ReplayBox>
          <S.Title>내 답변 다시보기</S.Title>
          <S.ReplayList>
            {displayData.interview_logs.map((log, index) => (
              <S.ReplayItem key={index}>
                <S.AIChatBox>
                  <S.AIChatText>{log.question}</S.AIChatText>
                </S.AIChatBox>
                <S.UserChatBox>
                  <S.UserChatText>{log.answer}</S.UserChatText>
                </S.UserChatBox>
              </S.ReplayItem>
            ))}
          </S.ReplayList>
        </S.ReplayBox>

        <S.AnalyzeBox>
          <S.Title>상세 분석</S.Title>
          <S.Wrapper>
            <S.LableBox>
              <S.Column>질문</S.Column>
              <S.RightBox>
                <S.Column>답변시간</S.Column>
                <S.Column>평가</S.Column>
              </S.RightBox>
            </S.LableBox>
            {displayData.detailed_analysis.map((q, index) => (
              <S.SetBox key={index}>
                <S.QuestionBox>
                  <S.QuestionText>{q.question}</S.QuestionText>
                  <S.RightBox>
                    <S.Time>{formatTime(q.response_time)}</S.Time>
                    <Label
                      type={
                        mapEvaluation(q.evaluation) as
                          | "good"
                          | "normal"
                          | "improve"
                      }
                    />
                  </S.RightBox>
                </S.QuestionBox>
                <S.PointBox>
                  <S.ImproveBox>
                    <S.BlueText>개선 포인트</S.BlueText>
                    <S.SuggestText>{q.improvement_point}</S.SuggestText>
                  </S.ImproveBox>
                  <S.ComplementBox>
                    <S.BlueText>보완 필요</S.BlueText>
                    <S.SuggestText>{q.supplement_needed}</S.SuggestText>
                  </S.ComplementBox>
                </S.PointBox>
              </S.SetBox>
            ))}
          </S.Wrapper>
        </S.AnalyzeBox>
      </S.ResultWrapper>
    </S.Step1Container>
  );
}
