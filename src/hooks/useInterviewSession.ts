import { useCallback, useEffect, useRef, useState } from "react";
import { useInitializeInterviewText } from "@/api/interview/useInterviewApi";
import { chatInterviewTextStream } from "@/api/interview/interviewApi";
import type { Message } from "@/features/interviewPractice/PracticeStep2.types";

const INITIAL_QUESTION = "자기소개 해주세요.";

interface UseInterviewSessionParams {
  recordId: number;
  difficulty: "Easy" | "Normal" | "Hard";
  univ: string;
  department: string;
  enabled: boolean;
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
  univ,
  department,
  enabled,
}: UseInterviewSessionParams) {
  const [text, setText] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isInterviewFinished, setIsInterviewFinished] =
    useState<boolean>(false);
  const [responseTimer, setResponseTimer] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChatPending, setIsChatPending] = useState(false);
  const [modalMessage, setModalMessage] = useState<ModalMessage>({
    mainTitle: "",
    subTitle: "",
  });

  const timerIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hasInitializedRef = useRef(false);

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
        if (!data.session_id) {
          setModalMessage({
            mainTitle: "면접 시작 실패",
            subTitle: "session_id를 받지 못해 면접을 진행할 수 없습니다.",
          });
          setIsModalOpen(true);
          stopTimer();
          return;
        }

        setSessionId(data.session_id);
        setMessages([
          {
            id: 1,
            sender: "AI",
            text: data.next_question || INITIAL_QUESTION,
            state: "success",
          },
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

  useEffect(() => {
    if (!enabled || hasInitializedRef.current) {
      return;
    }

    hasInitializedRef.current = true;
    mutateInitialize({
      record_id: recordId,
      difficulty,
      target_university: univ,
      target_department: department,
    });
  }, [department, difficulty, enabled, mutateInitialize, recordId, univ]);

  useEffect(() => {
    return stopTimer;
  }, [stopTimer]);

  const handleSendMessage = async () => {
    if (!text.trim() || isInterviewFinished || !sessionId) {
      return;
    }

    const userMessage: Message = {
      id: messages.length + 1,
      sender: "User",
      text,
      state: "success",
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
      {
        id: prev.length + 2,
        sender: "AI",
        text: "",
        state: "pending",
      },
    ]);
    setText("");
    stopTimer();
    setIsChatPending(true);

    let currentIsFinished = false;

    try {
      await chatInterviewTextStream(
        sessionId,
        {
          answer: userMessage.text,
          response_time: responseTimer,
        },
        (data: unknown) => {
          const d = data as { status?: string; token?: string; message?: string };
          if (d.status === "generating") {
            setMessages((prev) => {
              const lastIndex = prev.length - 1;
              const newMessages = [...prev];
              newMessages[lastIndex] = {
                ...newMessages[lastIndex],
                text: newMessages[lastIndex].text + (d.token || ""),
                state: "typing",
              };
              return newMessages;
            });
          } else if (d.status === "completed") {
            setMessages((prev) => {
              const lastIndex = prev.length - 1;
              const newMessages = [...prev];
              newMessages[lastIndex] = {
                ...newMessages[lastIndex],
                state: "success",
              };
              return newMessages;
            });
          } else if (d.status === "finished") {
            setMessages((prev) => [
              ...prev,
              {
                id: prev.length + 1,
                sender: "AI",
                text: "고생하셨습니다.",
                state: "success",
              },
            ]);
            setIsInterviewFinished(true);
            currentIsFinished = true;
            stopTimer();
          } else if (d.status === "error") {
            setMessages((prev) =>
              prev.filter((m) => m.state !== "pending" && m.state !== "typing")
            );
            handleInterviewError(
              new Error(d.message || "오류가 발생했습니다."),
              "질문 생성 중 오류가 발생했습니다."
            );
          }
        },
        (error) => {
          setMessages((prev) =>
            prev.filter((m) => m.state !== "pending" && m.state !== "typing")
          );
          handleInterviewError(error, "면접 진행 중 오류가 발생했습니다.");
        }
      );

      if (!currentIsFinished) {
        setResponseTimer(0);
        startTimer();
      }
    } catch {
      // Error is already handled via onError callback
    } finally {
      setIsChatPending(false);
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return {
    sessionId,
    text,
    setText,
    messages,
    isInterviewFinished,
    responseTimer,
    isPending: isChatPending,
    isInitializing: isInitializePending,
    isSessionReady: !!sessionId,
    isModalOpen,
    modalMessage,
    closeModal: () => setIsModalOpen(false),
    handleSendMessage,
    resetTimer: () => setResponseTimer(0),
    formatTime,
  };
}
