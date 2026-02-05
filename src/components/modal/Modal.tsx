import * as S from "./Modal.styles";
import type { MouseEvent } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  mainTitle: string;
  subTitle?: string;
  leftButtonText: string;
  rightButtonText: string;
  onLeftButtonClick: () => void;
  onRightButtonClick: () => void;
}

export default function Modal({
  isOpen,
  onClose,
  mainTitle,
  subTitle,
  leftButtonText,
  rightButtonText,
  onLeftButtonClick,
  onRightButtonClick,
}: ModalProps) {
  if (!isOpen) return null;

  const handleModalClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <S.Overlay onClick={onClose}>
      <S.ModalContainer onClick={handleModalClick}>
        <S.Content>
          <S.TitleWrapper>
            <S.MainTitle>{mainTitle}</S.MainTitle>
            {subTitle && <S.SubTitle>{subTitle}</S.SubTitle>}
          </S.TitleWrapper>
          <S.ButtonContainer>
            <S.LeftButton onClick={onLeftButtonClick}>{leftButtonText}</S.LeftButton>
            <S.RightButton onClick={onRightButtonClick}>{rightButtonText}</S.RightButton>
          </S.ButtonContainer>
        </S.Content>
      </S.ModalContainer>
    </S.Overlay>
  );
}
