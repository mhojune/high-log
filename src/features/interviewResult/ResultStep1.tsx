import { DefaultButton } from "@/components/button/Button";
import Label from "@/components/label/Label";
import Title from "@/components/title/Title";
import * as S from "@/features/interviewResult/ResultStep1.styles";
import { useInterviewAnalyze } from "@/api/interview/useInterviewApi";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

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

export default function ResultStep1() {
  const { sessionId } = useParams<{ sessionId: string }>();

  const { data } = useInterviewAnalyze(sessionId || "", {
    enabled: !!sessionId,
  });
  useEffect(() => {
    console.log(data);
  }, [data]);
  const displayData = data;

  const specifyScores = [
    {
      subject: "전공적합성",
      score: displayData?.scores.전공적합성 ?? 0,
      total: 25,
    },
    { subject: "인성", score: displayData?.scores.인성 ?? 0, total: 25 },
    {
      subject: "발전가능성",
      score: displayData?.scores.발전가능성 ?? 0,
      total: 25,
    },
    {
      subject: "의사소통능력",
      score: displayData?.scores.의사소통능력 ?? 0,
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
            <S.SettingLabel>지원 대학</S.SettingLabel>
            <S.SettingValue>{displayData?.target_university}</S.SettingValue>
          </S.SettingBox>
          <S.SettingBox>
            <S.SettingLabel>지원 학과/전공</S.SettingLabel>
            <S.SettingValue>{displayData?.target_department}</S.SettingValue>
          </S.SettingBox>
          <S.SettingBox>
            <S.SettingLabel>면접 모드</S.SettingLabel>
            <S.SettingValue>
              {displayData?.mode === "TEXT" ? "필기 면접" : "음성 면접"}
            </S.SettingValue>
          </S.SettingBox>
          <S.SettingBox>
            <S.SettingLabel>난이도</S.SettingLabel>
            <S.SettingValue>{displayData?.difficulty}</S.SettingValue>
          </S.SettingBox>
        </S.SettingsContainer>
        <S.ScoreBox>
          <S.Score>{displayData?.scores.총점} / 100</S.Score>
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
                <S.ProgressBar width={`${(item?.score / item.total) * 100}%`} />
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
            {displayData?.strength_tags.map((pro, index) => (
              <S.Pros key={index}>
                <S.ProsText>{pro}</S.ProsText>
              </S.Pros>
            ))}
          </S.ProsBox>
          <S.ConsBox>
            {displayData?.weakness_tags.map((con, index) => (
              <S.Cons key={index}>
                <S.ConsText>{con}</S.ConsText>
              </S.Cons>
            ))}
          </S.ConsBox>
        </S.ProsconsBox>

        <S.ReplayBox>
          <S.Title>내 답변 다시보기</S.Title>
          <S.ReplayList>
            {displayData?.interview_logs.map((log, index) => (
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
            {displayData?.detailed_analysis.map((q, index) => (
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
