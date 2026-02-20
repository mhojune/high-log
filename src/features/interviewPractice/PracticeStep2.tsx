import { DefaultButton } from "@/components/button/Button";
import Title from "@/components/title/Title";
import * as S from "@/features/interviewPractice/PracticeStep2.styles";
import Modal from "@/components/modal/Modal";
import PracticeStep2Timer from "@/features/interviewPractice/PracticeStep2Timer";
import PracticeStep2ChatList from "@/features/interviewPractice/PracticeStep2ChatList";
import PracticeStep2AnswerInput from "@/features/interviewPractice/PracticeStep2AnswerInput";
import useInterviewSession from "@/features/interviewPractice/hooks/useInterviewSession";

interface PracticeStep2Props {
  onNext: () => void;
  recordId: number | null;
  difficulty: "Easy" | "Normal" | "Hard" | null;
  mode: "text" | "voice" | null;
}

export default function PracticeStep2({
  onNext,
  recordId,
  difficulty,
  mode,
}: PracticeStep2Props) {
  const {
    text,
    setText,
    messages,
    isInterviewFinished,
    responseTimer,
    isPending,
    isModalOpen,
    modalMessage,
    closeModal,
    handleSendMessage,
    resetTimer,
    formatTime,
  } = useInterviewSession({
    recordId: recordId ?? 0,
    difficulty: difficulty ?? "Easy",
  });

  if (!recordId || !difficulty || !mode) {
    return (
      <S.PageContainer>
        <Title text="면접 연습" />
        <S.PracticeStep2Container>
          <p>면접 설정을 불러오는 중 오류가 발생했습니다.</p>
          <DefaultButton
            width={78}
            type="primary"
            text="돌아가기"
            onClick={onNext}
          />
        </S.PracticeStep2Container>
      </S.PageContainer>
    );
  }

  return (
    <S.PageContainer>
      <Title text="면접 연습" />
      <S.PracticeStep2Container>
        <S.PracticeWrapper>
          <PracticeStep2Timer
            responseTimer={responseTimer}
            formatTime={formatTime}
            onReset={resetTimer}
          />
          <PracticeStep2ChatList messages={messages} />
          <PracticeStep2AnswerInput
            text={text}
            setText={setText}
            isPending={isPending}
            isInterviewFinished={isInterviewFinished}
            onSend={handleSendMessage}
          />
        </S.PracticeWrapper>
        <DefaultButton
          width={78}
          type={!isInterviewFinished ? "disabled" : "primary"}
          text="완료"
          onClick={!isInterviewFinished ? undefined : onNext}
        />
      </S.PracticeStep2Container>
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
