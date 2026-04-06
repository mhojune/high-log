import * as S from "@/features/interviewPractice/PracticeStep2.styles";
import type { Message } from "@/features/interviewPractice/PracticeStep2.types";
import { useEffect, useRef } from "react";
import TypeWriter from "@/features/interviewPractice/TypeWriter";

interface PracticeStep2ChatListProps {
  messages: Message[];
}

export default function PracticeStep2ChatList({
  messages,
}: PracticeStep2ChatListProps) {
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log("messages", messages);
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
            <S.AIChatText>
              {msg.state === "pending" ? (
                <S.TypingIndicator>
                  <span />
                  <span />
                  <span />
                </S.TypingIndicator>
              ) : (
                <TypeWriter text={msg.text} />
              )}
            </S.AIChatText>
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
