import { DefaultButton } from "@/components/button/Button";
import Title from "@/components/title/Title";
import * as S from "@/features/interviewPractice/PracticeStep2.styles";
import Modal from "@/components/modal/Modal";
import PracticeStep2Timer from "@/features/interviewPractice/PracticeStep2Timer";
import PracticeStep2ChatList from "@/features/interviewPractice/PracticeStep2ChatList";
import PracticeStep2AnswerInput from "@/features/interviewPractice/PracticeStep2AnswerInput";
import PracticeStep2AudioInput from "@/features/interviewPractice/PracticeStep2AudioInput";
import useInterviewSession from "@/hooks/useInterviewSession";
import { useEffect, useState, useRef } from "react";
import baseImg from "@/assets/images/기본.png";
import m0 from "@/assets/images/0.svg";
import m1 from "@/assets/images/1.svg";
import m2 from "@/assets/images/2.svg";
import m3 from "@/assets/images/3.svg";
import m4 from "@/assets/images/4.svg";
import m5 from "@/assets/images/5.svg";
import m6 from "@/assets/images/6.svg";
import m7 from "@/assets/images/7.svg";
import m8 from "@/assets/images/8.svg";
import m9 from "@/assets/images/9.svg";
import m10 from "@/assets/images/10.svg";
import m11 from "@/assets/images/11.svg";
import m12 from "@/assets/images/12.svg";
import m13 from "@/assets/images/13.svg";
import m14 from "@/assets/images/14.svg";
import m15 from "@/assets/images/15.svg";
import m16 from "@/assets/images/16.svg";
import m17 from "@/assets/images/17.svg";
import m18 from "@/assets/images/18.svg";
import m19 from "@/assets/images/19.svg";
import m20 from "@/assets/images/20.svg";
import m21 from "@/assets/images/21.svg";

const MOUTH_IMAGES = [
  m0,
  m1,
  m2,
  m3,
  m4,
  m5,
  m6,
  m7,
  m8,
  m9,
  m10,
  m11,
  m12,
  m13,
  m14,
  m15,
  m16,
  m17,
  m18,
  m19,
  m20,
  m21,
];

interface PracticeStep2Props {
  onNext: (sessionId: string) => void;
  recordId: number | null;
  difficulty: "Easy" | "Normal" | "Hard" | null;
  univ: string;
  department: string;
  mode: "text" | "voice" | null;
}

export default function PracticeStep2({
  onNext,
  recordId,
  difficulty,
  univ,
  department,
  mode,
}: PracticeStep2Props) {
  const isInterviewConfigReady =
    !!recordId && !!difficulty && !!mode && !!univ && !!department;

  const {
    sessionId,
    text,
    setText,
    messages,
    isInterviewFinished,
    responseTimer,
    isSessionReady,
    isPending,
    isModalOpen,
    modalMessage,
    closeModal,
    handleSendMessage,
    handleSendAudioMessage,
    resetTimer,
    formatTime,
    visemeId,
  } = useInterviewSession({
    recordId: recordId ?? 0,
    difficulty: difficulty ?? "Easy",
    univ,
    department,
    enabled: isInterviewConfigReady,
    mode: mode ?? "text",
  });

  const [displayViseme, setDisplayViseme] = useState<number>(0);
  const [prevViseme, setPrevViseme] = useState<number | null>(null);
  const visemeFadeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  useEffect(() => {
    if (visemeFadeTimeoutRef.current) {
      clearTimeout(visemeFadeTimeoutRef.current);
      visemeFadeTimeoutRef.current = null;
    }

    if (visemeId === displayViseme) return;

    setPrevViseme(displayViseme);
    setDisplayViseme(visemeId);

    visemeFadeTimeoutRef.current = setTimeout(() => {
      setPrevViseme(null);
      visemeFadeTimeoutRef.current = null;
    }, 140);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visemeId]);

  const answeredQuestions = messages.filter(
    (message) => message.sender === "AI" && message.state === "success",
  );
  const currentQuestion =
    answeredQuestions[answeredQuestions.length - 1]?.text || "";
  const questionNumber = answeredQuestions.length;

  useEffect(() => {
    if (isInterviewFinished) {
      const timer = setTimeout(() => {
        onNext(sessionId ?? "");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isInterviewFinished, onNext, sessionId]);

  if (!isInterviewConfigReady) {
    return (
      <S.PageContainer>
        <Title text="면접 연습" />
        <S.PracticeStep2Container>
          <p>면접 설정을 불러오는 중 오류가 발생했습니다.</p>
          <DefaultButton
            width={78}
            type="primary"
            text="돌아가기"
            onClick={() => onNext("")}
          />
        </S.PracticeStep2Container>
      </S.PageContainer>
    );
  }

  const PracticeContainer =
    mode === "voice" ? S.PracticeStep2Container : S.PracticeStep2TextContainer;

  return (
    <S.PageContainer>
      <Title text="면접 연습" />
      <PracticeContainer>
        <S.PracticeWrapper>
          <PracticeStep2Timer
            responseTimer={responseTimer}
            formatTime={formatTime}
            onReset={resetTimer}
          />
          {mode === "voice" ? (
            <S.ChattingWrapper
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <div
                style={{
                  position: "relative",
                  width: 400,
                  height: 260,
                  overflow: "hidden",
                }}
              >
                <img
                  src={baseImg}
                  alt="base"
                  style={{
                    width: "400px",
                    height: "400px",
                  }}
                />
                {prevViseme !== null && (
                  <img
                    src={MOUTH_IMAGES[prevViseme] || m0}
                    alt={`mouth-prev-${prevViseme}`}
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "58%",
                      transform: "translate(-50%, -50%)",
                      width: "83px",
                      zIndex: 1,
                      pointerEvents: "none",
                      opacity: 1,
                      transition: "opacity 140ms ease",
                    }}
                  />
                )}
                <img
                  src={MOUTH_IMAGES[displayViseme] || m0}
                  alt={`mouth-${displayViseme}`}
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "58%",
                    transform: "translate(-50%, -50%)",
                    width: "83px",
                    zIndex: 2,
                    pointerEvents: "none",
                    opacity: prevViseme !== null ? 0 : 1,
                    transition: "opacity 140ms ease",
                  }}
                />
              </div>
            </S.ChattingWrapper>
          ) : (
            <PracticeStep2ChatList messages={messages} />
          )}

          {mode === "voice" ? (
            <PracticeStep2AudioInput
              isPending={isPending}
              isSessionReady={isSessionReady}
              isInterviewFinished={isInterviewFinished}
              onSendAudio={handleSendAudioMessage}
              questionNumber={questionNumber}
              currentQuestion={currentQuestion}
            />
          ) : (
            <PracticeStep2AnswerInput
              text={text}
              setText={setText}
              isPending={isPending}
              isSessionReady={isSessionReady}
              isInterviewFinished={isInterviewFinished}
              onSend={handleSendMessage}
            />
          )}
        </S.PracticeWrapper>
      </PracticeContainer>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          mainTitle={modalMessage.mainTitle}
          subTitle={modalMessage.subTitle}
          leftButtonText="닫기"
          rightButtonText="확인"
          onLeftButtonClick={closeModal}
          onRightButtonClick={closeModal}
        />
      )}
    </S.PageContainer>
  );
}
