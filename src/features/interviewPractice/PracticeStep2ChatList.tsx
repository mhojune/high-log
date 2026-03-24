import * as S from "@/features/interviewPractice/PracticeStep2.styles";
import type { Message } from "@/features/interviewPractice/PracticeStep2.types";
import { useEffect, useRef } from "react";

interface PracticeStep2ChatListProps {
  messages: Message[];
}

export default function PracticeStep2ChatList({
  messages,
}: PracticeStep2ChatListProps) {
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!chatContainerRef.current) {
      return;
    }

    chatContainerRef.current.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <S.ChattingWrapper ref={chatContainerRef}>
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
  );
}
