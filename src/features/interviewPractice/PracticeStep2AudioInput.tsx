import { DefaultButton } from "@/components/button/Button";
import * as S from "@/features/interviewPractice/PracticeStep2.styles";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface PracticeStep2AudioInputProps {
  isPending: boolean;
  isSessionReady: boolean;
  isInterviewFinished: boolean;
  onSendAudio: (audioBlob: Blob) => void;
}

const VisualizerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 44px;
  width: 100%;
`;

const Bar = styled.div<{ height: number }>`
  width: 4px;
  height: ${({ height }) => Math.max(4, height)}px;
  background-color: ${({ theme }) => theme.colors.grayScale["02"]};
  border-radius: 2px;
  transition: height 0.05s ease;
`;

export default function PracticeStep2AudioInput({
  isPending,
  isSessionReady,
  isInterviewFinished,
  onSendAudio,
}: PracticeStep2AudioInputProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [audioData, setAudioData] = useState<Uint8Array>(new Uint8Array(20));
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationRef = useRef<number | null>(null);
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
        if (
          audioContextRef.current &&
          audioContextRef.current.state !== "closed"
        ) {
          audioContextRef.current.close();
        }
      };

      const audioContext = new (
        window.AudioContext || window.webkitAudioContext
      )();
      audioContextRef.current = audioContext;
      const analyser = audioContext.createAnalyser();
      analyserRef.current = analyser;
      analyser.fftSize = 64;

      const source = audioContext.createMediaStreamSource(stream);
      source.connect(analyser);

      const updateVisualizer = () => {
        if (analyserRef.current) {
          const bufferLength = analyserRef.current.frequencyBinCount;
          const dataArray = new Uint8Array(bufferLength);
          analyserRef.current.getByteFrequencyData(dataArray);

          const sampledData = new Uint8Array(20);
          const step = Math.floor(bufferLength / 20);
          for (let i = 0; i < 20; i++) {
            sampledData[i] = dataArray[i * step] || 0;
          }
          setAudioData(sampledData);
        }
        animationRef.current = requestAnimationFrame(updateVisualizer);
      };

      mediaRecorder.start();
      setIsRecording(true);
      updateVisualizer();
    } catch (error) {
      console.error("Error accessing microphone:", error);
      alert("마이크 접근에 실패했습니다.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      setAudioData(new Uint8Array(20)); // Reset visualizer
    }
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
      if (
        audioContextRef.current &&
        audioContextRef.current.state !== "closed"
      ) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const isDisabled = isPending || isInterviewFinished || !isSessionReady;

  return (
    <S.AnswerButtonBox>
      <S.AnswerBox
        style={{
          flex: 1,
          marginRight: "16px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {isRecording ? (
          <VisualizerContainer>
            {Array.from(audioData).map((val, idx) => (
              <Bar key={idx} height={(val / 255) * 44} />
            ))}
          </VisualizerContainer>
        ) : (
          <S.AnswerInput
            as="div"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#888",
              cursor: isDisabled ? "not-allowed" : "pointer",
            }}
            onClick={!isDisabled && !isRecording ? startRecording : undefined}
          >
            {isInterviewFinished
              ? "면접이 종료되었습니다."
              : "버튼을 눌러 녹음을 시작하세요"}
          </S.AnswerInput>
        )}
      </S.AnswerBox>

      {isRecording ? (
        <DefaultButton
          width={100}
          type="primary"
          text="답변 완료"
          onClick={stopRecording}
        />
      ) : (
        <DefaultButton
          width={100}
          type={isDisabled ? "disabled" : "primary"}
          text={
            isPending
              ? "전송 중..."
              : !isSessionReady
                ? "준비 중..."
                : "녹음 시작"
          }
          onClick={isDisabled ? undefined : startRecording}
        />
      )}
    </S.AnswerButtonBox>
  );
}
