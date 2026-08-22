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
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true }); // 유저한테 audio 권한을 요청
      streamRef.current = stream; // 나중에 stream을 끄기 위해 Ref에 저장

      const mediaRecorder = new MediaRecorder(stream); // 마이크의 MediaStream을 녹음하고 Blob 데이터로 제공하는 브라우저 API
      mediaRecorderRef.current = mediaRecorder; // 녹음을 종료하기 위해 Ref
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data); // 새로운 음성 데이터가 들어올 때마다, audioChunks에 차례대로 저장
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          // 다른 함수에서 stop을 눌렀을 시, onstop() 실행
          type: "audio/webm", // audio를 audio/webm으로 변환 후 Blob으로 저장
        });
        onSendAudio(audioBlob); // onSendAudio로 서버로 Blob 파일을 전송

        if (streamRef.current) {
          streamRef.current.getTracks().forEach((track) => track.stop()); // 마이크 사용을 종료하고 자원 해제
        }
      };

      mediaRecorder.start(); // 녹음 시작
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
        // 사용자가 다른 페이지 이동으로 stop이 실행되지 않았을 때를 대비해, 언마운트 될 때 stop 실행
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
