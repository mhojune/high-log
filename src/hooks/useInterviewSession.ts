import { useCallback, useEffect, useRef, useState } from "react";
import { useInitializeInterviewText } from "@/api/interview/useInterviewApi";
import {
  chatInterviewTextStream,
  chatInterviewAudio,
  getAzureSpeechToken,
} from "@/api/interview/interviewApi";
import type { Message } from "@/features/interviewPractice/PracticeStep2.types";
import * as SpeechSDK from "microsoft-cognitiveservices-speech-sdk";

const INITIAL_QUESTION = "자기소개 해주세요.";
const VISEME_TIME_SCALE = 1.2;

interface UseInterviewSessionParams {
  recordId: number;
  difficulty: "Easy" | "Normal" | "Hard";
  univ: string;
  department: string;
  enabled: boolean;
  mode?: "text" | "voice";
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
  mode = "text",
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
  const [visemeId, setVisemeId] = useState<number>(0);

  const timerIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const visemeTimeoutRefs = useRef<ReturnType<typeof setTimeout>[]>([]);
  const visemeResetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const visemeBaseOffsetRef = useRef<number | null>(null);
  const visemePlaybackRunRef = useRef(0);
  const VISEME_BUCKET_COUNT = 7;
  const MIN_VISEME_UPDATE_MS = 90;
  const VISEME_AMPLITUDE = 0.9; // 0..1, higher = larger mouth movements
  const lastVisemeUpdateRef = useRef<number>(0);
  const lastVisemeBucketRef = useRef<number | null>(null);
  const VISEME_SMOOTH_WINDOW = 4;
  const visemeBufferRef = useRef<number[]>([]);
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

  const clearVisemeTimers = useCallback(() => {
    visemeTimeoutRefs.current.forEach((timeoutId) => clearTimeout(timeoutId));
    visemeTimeoutRefs.current = [];
    if (visemeResetTimeoutRef.current) {
      clearTimeout(visemeResetTimeoutRef.current);
      visemeResetTimeoutRef.current = null;
    }
    visemeBaseOffsetRef.current = null;
  }, []);

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

  const playQuestionAudio = async (questionText: string, audioUrl?: string) => {
    clearVisemeTimers();

    if (mode === "voice") {
      console.log("[interview] start Azure TTS", { questionText });
      await playAzureTTS(questionText);
      return;
    }

    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play().catch((e) => console.error("Audio playback failed:", e));
    }
  };

  const playAzureTTS = async (ttsText: string) => {
    if (!ttsText) return;
    try {
      const playbackRunId = ++visemePlaybackRunRef.current;
      const tokenData = await getAzureSpeechToken();
      const speechConfig = SpeechSDK.SpeechConfig.fromAuthorizationToken(
        tokenData.token,
        tokenData.region,
      );
      speechConfig.speechSynthesisLanguage =
        tokenData.speech_synthesis_language;
      speechConfig.speechSynthesisVoiceName =
        tokenData.speech_synthesis_voice_name;

      const audioConfig = SpeechSDK.AudioConfig.fromDefaultSpeakerOutput();
      const synthesizer = new SpeechSDK.SpeechSynthesizer(
        speechConfig,
        audioConfig,
      );

      // Fallback: show a small mouth immediately while waiting for viseme events
      try {
        setVisemeId(1);
        if (visemeResetTimeoutRef.current) {
          clearTimeout(visemeResetTimeoutRef.current);
        }
        visemeResetTimeoutRef.current = setTimeout(() => {
          setVisemeId(0);
          visemeResetTimeoutRef.current = null;
        }, 500);
      } catch {
        // swallow in non-reactive contexts
      }

      synthesizer.visemeReceived = function (_s, e) {
        const id = typeof e.visemeId === "number" ? e.visemeId : 0;
        const audioOffset =
          typeof e.audioOffset === "number" ? e.audioOffset : 0;
        const baseOffset =
          visemeBaseOffsetRef.current ??
          (visemeBaseOffsetRef.current = audioOffset);
        const scheduledDelayMs = Math.max(
          0,
          ((audioOffset - baseOffset) / 10000) * VISEME_TIME_SCALE,
        );
        console.log("[interview] visemeReceived", {
          visemeId: id,
          audioOffset,
          scheduledDelayMs,
        });

        const timeoutId = setTimeout(() => {
          if (visemePlaybackRunRef.current !== playbackRunId) {
            return;
          }

          console.log("[interview] scheduled viseme fire", {
            scheduledDelayMs,
            rawViseme: id,
          });

          // Map raw viseme (0..21) into fewer buckets to reduce jitter
          const rawMax = 21;
          const bucket = Math.round((id / rawMax) * (VISEME_BUCKET_COUNT - 1));
          const normalized = bucket / (VISEME_BUCKET_COUNT - 1);
          const center = rawMax / 2;
          let repVisemeId = Math.round(
            (normalized * rawMax - center) * VISEME_AMPLITUDE + center,
          );
          repVisemeId = Math.max(0, Math.min(rawMax, repVisemeId));

          const now = Date.now();
          const lastUpdate = lastVisemeUpdateRef.current || 0;

          // Throttle rapid updates: if updates come faster than MIN_VISEME_UPDATE_MS, ignore
          if (
            lastVisemeBucketRef.current === bucket &&
            now - lastUpdate < MIN_VISEME_UPDATE_MS
          ) {
            return;
          }

          if (
            now - lastUpdate < MIN_VISEME_UPDATE_MS &&
            lastVisemeBucketRef.current !== bucket
          ) {
            return;
          }

          lastVisemeBucketRef.current = bucket;
          lastVisemeUpdateRef.current = now;

          // smoothing: keep recent repVisemeId values and pick the mode
          visemeBufferRef.current.push(repVisemeId);
          if (visemeBufferRef.current.length > VISEME_SMOOTH_WINDOW) {
            visemeBufferRef.current.shift();
          }

          const counts: Record<number, number> = {};
          visemeBufferRef.current.forEach(
            (v) => (counts[v] = (counts[v] || 0) + 1),
          );
          let best =
            visemeBufferRef.current[visemeBufferRef.current.length - 1];
          let bestCount = 0;
          Object.entries(counts).forEach(([k, c]) => {
            const key = Number(k);
            if (c > bestCount) {
              bestCount = c;
              best = key;
            }
          });

          setVisemeId(best);
        }, scheduledDelayMs);

        visemeTimeoutRefs.current.push(timeoutId);

        if (visemeResetTimeoutRef.current) {
          clearTimeout(visemeResetTimeoutRef.current);
        }

        visemeResetTimeoutRef.current = setTimeout(() => {
          if (visemePlaybackRunRef.current !== playbackRunId) {
            return;
          }
          setVisemeId(0);
        }, scheduledDelayMs + 150);
      };

      synthesizer.speakTextAsync(
        ttsText,
        function (result) {
          if (
            result.reason === SpeechSDK.ResultReason.SynthesizingAudioCompleted
          ) {
            console.log("TTS synthesis finished.");
            // Do not clear viseme timers here; allow scheduled viseme timeouts
            // (based on audioOffset) to run until the audio playback actually ends.
          } else {
            console.error("Speech synthesis canceled:", result.errorDetails);
            clearVisemeTimers();
            setVisemeId(0);
          }
          synthesizer.close();
        },
        function (err) {
          console.trace("TTS error:", err);
          clearVisemeTimers();
          setVisemeId(0);
          synthesizer.close();
        },
      );
    } catch (error) {
      console.error("Failed to play Azure TTS:", error);
      clearVisemeTimers();
    }
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

        void playQuestionAudio(
          data.next_question || INITIAL_QUESTION,
          data.audio_url,
        );

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
      mode,
    });
  }, [department, difficulty, enabled, mode, mutateInitialize, recordId, univ]);

  useEffect(() => {
    return stopTimer;
  }, [stopTimer]);

  useEffect(() => {
    return () => {
      clearVisemeTimers();
      visemePlaybackRunRef.current += 1;
    };
  }, [clearVisemeTimers]);

  const handleSendAudioMessage = async (audioBlob: Blob) => {
    if (isInterviewFinished || !sessionId) {
      return;
    }

    const userMessage: Message = {
      id: messages.length + 1,
      sender: "User",
      text: "...",
      state: "pending",
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

    stopTimer();
    setIsChatPending(true);

    try {
      const response = await chatInterviewAudio(
        sessionId,
        audioBlob,
        responseTimer,
      );

      void playQuestionAudio(response.next_question, response.audio_url);

      setMessages((prev) => {
        const newMessages = [...prev];
        const userMsgIndex = newMessages.findIndex(
          (m) => m.id === userMessage.id,
        );
        if (userMsgIndex !== -1) {
          newMessages[userMsgIndex] = {
            ...newMessages[userMsgIndex],
            text: response.transcript || "음성 인식 실패",
            state: "success",
          };
        }

        const aiMsgIndex = newMessages.length - 1;
        newMessages[aiMsgIndex] = {
          ...newMessages[aiMsgIndex],
          text: response.next_question,
          state: "success",
        };

        if (response.is_finished) {
          return [
            ...newMessages,
            {
              id: newMessages.length + 1,
              sender: "AI",
              text: "고생하셨습니다.",
              state: "success",
            },
          ];
        }

        return newMessages;
      });

      if (response.is_finished) {
        setIsInterviewFinished(true);
        stopTimer();
      } else {
        setResponseTimer(0);
        startTimer();
      }
    } catch (error) {
      setMessages((prev) =>
        prev.filter((m) => m.state !== "pending" && m.state !== "typing"),
      );
      handleInterviewError(error, "면접 진행 중 오류가 발생했습니다.");
      setResponseTimer(0);
      startTimer();
    } finally {
      setIsChatPending(false);
    }
  };

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
          const d = data as {
            status?: string;
            token?: string;
            message?: string;
          };
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
              prev.filter((m) => m.state !== "pending" && m.state !== "typing"),
            );
            handleInterviewError(
              new Error(d.message || "오류가 발생했습니다."),
              "질문 생성 중 오류가 발생했습니다.",
            );
          }
        },
        (error) => {
          setMessages((prev) =>
            prev.filter((m) => m.state !== "pending" && m.state !== "typing"),
          );
          handleInterviewError(error, "면접 진행 중 오류가 발생했습니다.");
        },
      );

      if (!currentIsFinished) {
        setResponseTimer(0);
        startTimer();
      }
    } catch {
      //
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
    handleSendAudioMessage,
    resetTimer: () => setResponseTimer(0),
    formatTime,
    visemeId,
  };
}
