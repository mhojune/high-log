import { DefaultButton } from "@/components/button/Button";
import Title from "@/components/title/Title";
import * as S from "@/features/interviewPractice/PracticeStep2.styles";
import { useState, useEffect } from "react";
import MIC from "@/assets/icons/microphone.svg?react";

interface Message {
  id: number;
  sender: "AI" | "User";
  text: string;
}

interface PracticeStep2Props {
  onNext: () => void;
}

export default function PracticeStep2({ onNext }: PracticeStep2Props) {
  const [text, setText] = useState<string>("");
  const [timeLeft, setTimeLeft] = useState<number>(600);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "AI",
      text: "동아리 활동 중 가장 기억에 남는 프로젝트를 하나 골라 설명해 주세요.",
    },
    {
      id: 2,
      sender: "User",
      text: "저는 학교 동아리에서 소규모 팀 프로젝트를 진행했고, 저는 자료 조사와 발표 구조 설계를 맡았습니다.",
    },
    {
      id: 3,
      sender: "AI",
      text: "그 프로젝트에서 가장 어려웠던 점은 무엇이었나요?",
    },
    {
      id: 4,
      sender: "User",
      text: "팀원 간의 의견 조율이 가장 힘들었습니다. 서로 다른 주제를 원했거든요.",
    },
    { id: 5, sender: "AI", text: "그 갈등을 어떻게 해결하셨나요?" },
    {
      id: 6,
      sender: "User",
      text: "팀원 간의 의견 조율이 가장 힘들었습니다. 서로 다른 주제를 원했거든요.",
    },
  ]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleReset = () => {
    setTimeLeft(600);
  };

  const handleSendMessage = () => {
    if (!text.trim()) return;
    const newMessage: Message = {
      id: messages.length + 1,
      sender: "User",
      text: text,
    };
    setMessages([...messages, newMessage]);
    setText("");
  };

  return (
    <S.PageContainer>
      <Title text="면접 연습" />
      <S.PracticeStep2Container>
        <S.PracticeWrapper>
          <S.TimerResetBox>
            <S.TimerBox>
              <S.Timer>타이머 : {formatTime(timeLeft)}</S.Timer>
            </S.TimerBox>
            <DefaultButton
              width={78}
              type="secondary"
              text="리셋"
              onClick={handleReset}
            />
          </S.TimerResetBox>
          <S.ChattingWrapper>
            {messages.map((msg) =>
              msg.sender === "AI" ? (
                <S.AIChatBox key={msg.id}>
                  <S.AIChatText>{msg.text}</S.AIChatText>
                </S.AIChatBox>
              ) : (
                <S.UserChatBox key={msg.id}>
                  <S.UserChatText>{msg.text}</S.UserChatText>
                </S.UserChatBox>
              ),
            )}
          </S.ChattingWrapper>
          <S.AnswerButtonBox>
            <S.AnswerBox>
              <S.AnswerInput
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="여기에 답변을 작성하세요..."
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <MIC width={48} height={48} style={{ cursor: "pointer" }} />
            </S.AnswerBox>
            <DefaultButton
              width={100}
              type="secondary"
              text="임시 저장"
              onClick={() => {}}
            />
          </S.AnswerButtonBox>
        </S.PracticeWrapper>
        <DefaultButton width={78} type="primary" text="완료" onClick={onNext} />
      </S.PracticeStep2Container>
    </S.PageContainer>
  );
}
