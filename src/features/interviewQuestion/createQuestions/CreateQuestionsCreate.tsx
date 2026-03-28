import { useRef, useState, useEffect } from "react";
import { useNavigate, useBlocker, Navigate } from "react-router-dom";
import * as S from "@/features/interviewQuestion/createQuestions/CreateQuestions.styles";
import CreateQuestionFormBox, {
  type CreateQuestionFormBoxRef,
} from "@/features/interviewQuestion/createQuestionFormBox/CreateQuestionFormBox";
import Title from "@/components/title/Title";
import Modal from "@/components/modal/Modal";
import type { CreateQuestionFormData } from "@/features/interviewQuestion/types/createQuestion";
import { useAuth } from "@/contexts/AuthContext";

export default function CreateQuestionsCreate() {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuth();
  const formRef = useRef<CreateQuestionFormBoxRef>(null);
  const [isLeaveModalOpen, setIsLeaveModalOpen] = useState(false);
  const [hasContent, setHasContent] = useState(false);
  const pendingActionRef = useRef<(() => void) | null>(null);

  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      hasContent &&
      currentLocation.pathname === "/question" &&
      currentLocation.pathname !== nextLocation.pathname &&
      nextLocation.pathname !== "/question/loading"
  );

  useEffect(() => {
    if (blocker.state === "blocked") {
      pendingActionRef.current = blocker.proceed;
      setIsLeaveModalOpen(true);
    }
  }, [blocker.state, blocker.proceed]);

  const handleStay = () => {
    setIsLeaveModalOpen(false);
    if (blocker.state === "blocked") {
      blocker.reset();
    }
    pendingActionRef.current = null;
  };

  const handleLeave = () => {
    formRef.current?.clear();
    setIsLeaveModalOpen(false);
    const action = pendingActionRef.current;
    pendingActionRef.current = null;
    if (typeof action === "function") {
      action();
    }
  };

  const handleSubmit = (data: CreateQuestionFormData) => {
    navigate("/question/loading", { state: data });
  };

  if (isLoading) {
    return null;
  }
  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <S.ContentWrapper>
      <S.CreateHeaderSection>
        <S.TitleWrapper>
          <Title text="질문 생성" />
        </S.TitleWrapper>
        <S.Description>
          맞춤형 면접 질문을 위한 지원 정보를 상세하게 입력해주세요
        </S.Description>
      </S.CreateHeaderSection>
      <CreateQuestionFormBox
        ref={formRef}
        onSubmit={handleSubmit}
        onFormStateChange={setHasContent}
        onBackToMain={() => navigate("/")}
      />
      <Modal
        isOpen={isLeaveModalOpen}
        onClose={handleStay}
        mainTitle="업로드를 취소할까요?"
        subTitle="작성 중인 내용이 저장되지 않아요"
        leftButtonText="돌아가기"
        rightButtonText="취소하기"
        onLeftButtonClick={handleStay}
        onRightButtonClick={handleLeave}
      />
    </S.ContentWrapper>
  );
}
