import { useCallback, useEffect, useRef, useState } from "react";
import {
  useChatInterviewText,
  useInitializeInterviewText,
} from "@/api/interview/useInterviewApi";
import type { Message } from "@/features/interviewPractice/PracticeStep2.types";

const INITIAL_QUESTION = "자기소개 해주세요.";

interface UseInterviewSessionParams {
  recordId: number;
  difficulty: "Easy" | "Normal" | "Hard";
}

interface ModalMessage {
  mainTitle: string;
  subTitle: string;
}

const getErrorMessage = (error: unknown): string | null => {
  if (
    typeof error === "object" &&
    error !== null &&
    "response" in error &&
    typeof (error as { response?: unknown }).response === "object" &&
    (error as { response?: unknown }).response !== null
  ) {
    const response = (error as { response: { data?: unknown } }).response;
    if (
      response.data &&
      typeof response.data === "object" &&
      "message" in response.data &&
      typeof (response.data as { message?: unknown }).message === "string"
    ) {
      return (response.data as { message: string }).message;
    }
  }

  if (error instanceof Error && error.message) {
    return error.message;
  }

  return null;
};

export default function useInterviewSession({
  recordId,
  difficulty,
}: UseInterviewSessionParams) {
  const [text, setText] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: "AI", text: INITIAL_QUESTION },
  ]);
  const [threadId, setThreadId] = useState<string | null>(null);
  const [isInterviewFinished, setIsInterviewFinished] =
    useState<boolean>(false);
  const [responseTimer, setResponseTimer] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState<ModalMessage>({
    mainTitle: "",
    subTitle: "",
  });

  const timerIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopTimer = useCallback(() => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }
  }, []);

  const startTimer = useCallback(() => {
    stopTimer();
    timerIntervalRef.current = setInterval(() => {
      setResponseTimer((prev) => prev + 1);
    }, 1000);
  }, [stopTimer]);

  const handleInterviewError = (error: unknown, defaultMessage: string) => {
    console.error(defaultMessage, error);
    const message = getErrorMessage(error);

    setModalMessage({
      mainTitle: message ? "면접 진행 실패" : "오류 발생",
      subTitle: message ?? defaultMessage,
    });
    setIsModalOpen(true);
    stopTimer();
  };

  const { mutate: mutateInitialize, isPending: isInitializePending } =
    useInitializeInterviewText({
      onSuccess: (data) => {
        if (!data.thread_id) {
          setModalMessage({
            mainTitle: "면접 시작 실패",
            subTitle: "thread_id를 받지 못해 면접을 진행할 수 없습니다.",
          });
          setIsModalOpen(true);
          stopTimer();
          return;
        }

        setThreadId(data.thread_id);
        setMessages((prev) => [
          ...prev,
          { id: prev.length + 1, sender: "AI", text: data.next_question },
        ]);
        setIsInterviewFinished(data.is_finished);

        if (data.is_finished) {
          stopTimer();
          return;
        }

        setResponseTimer(0);
        startTimer();
      },
      onError: (error) => {
        handleInterviewError(error, "면접 시작 중 오류가 발생했습니다.");
      },
    });

  const { mutate: mutateChat, isPending: isChatPending } = useChatInterviewText(
    {
      onSuccess: (data) => {
        setMessages((prev) => [
          ...prev,
          { id: prev.length + 1, sender: "AI", text: data.next_question },
        ]);
        setIsInterviewFinished(data.is_finished);

        if (data.is_finished) {
          stopTimer();
          return;
        }

        setResponseTimer(0);
        startTimer();
      },
      onError: (error) => {
        handleInterviewError(error, "면접 진행 중 오류가 발생했습니다.");
      },
    },
  );

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, [startTimer, stopTimer]);

  const handleSendMessage = () => {
    if (!text.trim() || isInterviewFinished) {
      return;
    }

    const userMessage: Message = {
      id: messages.length + 1,
      sender: "User",
      text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setText("");
    stopTimer();

    if (!threadId) {
      mutateInitialize({
        record_id: recordId,
        difficulty,
        first_answer: userMessage.text,
        response_time: responseTimer,
      });
      return;
    }

    mutateChat({
      threadId,
      request: {
        answer: userMessage.text,
        response_time: responseTimer,
      },
    });
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return {
    text,
    setText,
    messages,
    isInterviewFinished,
    responseTimer,
    isPending: isInitializePending || isChatPending,
    isModalOpen,
    modalMessage,
    closeModal: () => setIsModalOpen(false),
    handleSendMessage,
    resetTimer: () => setResponseTimer(0),
    formatTime,
  };
}
