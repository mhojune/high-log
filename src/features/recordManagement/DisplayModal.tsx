import { DefaultButton } from "@/components/button/Button";
import * as S from "@/features/recordManagement/DIsplayModal.styles";
import { useNavigate } from "react-router-dom";
import CREATE_QUESTION_1 from "@/assets/images/create_question_1.png";
import CREATE_QUESTION_2 from "@/assets/images/create_question_2.png";
import CREATE_QUESTION_3 from "@/assets/images/create_question_3.png";
import { useEffect, useState } from "react";

interface DisplayModal {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DisplayModal({ setIsModalOpen }: DisplayModal) {
  const navigate = useNavigate();
  const images = [CREATE_QUESTION_1, CREATE_QUESTION_2, CREATE_QUESTION_3];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <S.ModalOverlay>
      <S.ModalContainer onClick={(e) => e.stopPropagation()}>
        <S.ImageContainer>
          {images.map((imgSrc, index) => (
            <S.FadeImage
              key={index}
              src={imgSrc}
              alt={`Modal Image ${index + 1}`}
              $isActive={index === currentIndex}
            />
          ))}
        </S.ImageContainer>
        <S.CloseButton
          width={24}
          height={24}
          onClick={() => setIsModalOpen(false)}
        />
        <S.ModalInfo>
          <S.InfoTitle>
            업로드한 생기부로 면접 대비 질문을 받아보세요
          </S.InfoTitle>
          <S.InfoContent>
            {`생기부를 업로드하면 AI가 자동으로 분석해요\n각 영역별 맞춤 질문으로면접 준비를 시작해 보세요`}
          </S.InfoContent>
        </S.ModalInfo>
        <DefaultButton
          width={174}
          type="primary"
          text="사용해 보기"
          onClick={() => {
            setIsModalOpen(false);
            navigate("/question");
          }}
        />
      </S.ModalContainer>
    </S.ModalOverlay>
  );
}
