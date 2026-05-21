import { DefaultButton } from "@/components/button/Button";
import * as S from "@/features/interviewPractice/PracticeStep2.styles";
import { useEffect, useRef, useState } from "react";

interface PracticeStep2AudioInputProps {
  isPending: boolean;
  isSessionReady: boolean;
  isInterviewFinished: boolean;
  onSendAudio: (audioBlob: Blob) => void;
  questionNumber: number;
  currentQuestion: string;
}

export default function PracticeStep2AudioInput({
  isPending,
  isSessionReady,
  isInterviewFinished,
  onSendAudio,
  questionNumber,
  currentQuestion,
}: PracticeStep2AudioInputProps) {
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm",
        });
        onSendAudio(audioBlob);

        if (streamRef.current) {
          streamRef.current.getTracks().forEach((track) => track.stop());
        }
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
      alert("마이크 접근에 실패했습니다.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <S.VoiceAnswerContainer>
      <S.QuestionHeader>
        <S.QuestionBadge>
          Q{questionNumber > 0 ? questionNumber : 1}
        </S.QuestionBadge>
        <S.QuestionText>
          {isInterviewFinished
            ? "면접이 종료되었습니다."
            : isPending
              ? "질문을 불러오는 중입니다."
              : currentQuestion || "버튼을 눌러 녹음을 시작하세요"}
        </S.QuestionText>
      </S.QuestionHeader>

      <S.VoiceControls>
        <S.VoiceStatusArea>
          {isRecording && (
            <S.VoiceStatusDots>
              <span />
              <span />
              <span />
            </S.VoiceStatusDots>
          )}
        </S.VoiceStatusArea>
        {!isInterviewFinished && (
          <DefaultButton
            type={isPending || !isSessionReady ? "disabled" : "secondary"}
            text={
              isPending ? "질문 대기 중" : isRecording ? "완료" : "답변시작"
            }
            onClick={
              isPending || !isSessionReady
                ? undefined
                : isRecording
                  ? stopRecording
                  : startRecording
            }
            width={120}
          />
        )}
      </S.VoiceControls>
    </S.VoiceAnswerContainer>
  );
}
