import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateQuestionCarousel from "@/features/interviewQuestion/createQuestionCarousel/CreateQuestionCarousel";
import ArrowRight from "@/assets/icons/arrow_right.svg?react";
import theme from "@/styles/theme";
import * as S from "@/features/interviewQuestion/createQuestions/CreateQuestions.styles";
import Modal from "@/components/modal/Modal";
import { useAuth } from "@/contexts/AuthContext";

interface CreateQuestionsMainProps {
  onNext: () => void;
}

export default function CreateQuestionsMain({ onNext }: CreateQuestionsMainProps) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (isAuthenticated) {
      onNext();
    } else {
      setIsLoginModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(false);
    navigate("/auth");
  };

  return (
    <S.MainExplanationBox>
      <S.MainExplanationContent>
        <S.MainTitle>
          <S.MainTitleAccent>클릭 한 번</S.MainTitleAccent>
          <S.MainTitleText>으로 시작하는 맞춤 면접 준비</S.MainTitleText>
        </S.MainTitle>
        <CreateQuestionCarousel />
        <S.MainButtonWrapper>
          <S.MainUnderBarButton onClick={handleButtonClick}>
            <S.MainUnderBarButtonText>
              생기부 업로드하고 맞춤 질문 받아보기
            </S.MainUnderBarButtonText>
            <S.MainUnderBarButtonIcon>
              <ArrowRight width={24} height={24} stroke={theme.colors.secondary["01"]} />
            </S.MainUnderBarButtonIcon>
          </S.MainUnderBarButton>
        </S.MainButtonWrapper>
      </S.MainExplanationContent>
      <Modal
        isOpen={isLoginModalOpen}
        onClose={handleCloseModal}
        mainTitle="로그인 후 사용해주세요"
        subTitle="로그인이 필요한 서비스 입니다"
        leftButtonText="닫기"
        rightButtonText="로그인 하기"
        onLeftButtonClick={handleCloseModal}
        onRightButtonClick={handleLoginClick}
      />
    </S.MainExplanationBox>
  );
}
