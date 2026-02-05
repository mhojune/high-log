import * as S from "./Toast.styles";
import type { MouseEvent } from "react";
import CircleCheck from "@/assets/icons/circle-check.svg?react";
import X from "@/assets/icons/x.svg?react";

interface ToastProps {
  message: string;
  onClose: () => void;
  isOpen: boolean;
}

export default function Toast({ message, onClose, isOpen }: ToastProps) {
  if (!isOpen) return null;

  const handleToastClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <S.Overlay onClick={onClose}>
      <S.ToastContainer onClick={handleToastClick}>
        <S.Content>
          <S.IconWrapper>
            <CircleCheck />
          </S.IconWrapper>
          <S.Message>{message}</S.Message>
          <S.CloseButton onClick={onClose}>
            <X />
          </S.CloseButton>
        </S.Content>
      </S.ToastContainer>
    </S.Overlay>
  );
}
