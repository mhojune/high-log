import styled from "styled-components";
import CLOSE_ICON from "@/assets/icons/x.svg?react";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(10, 10, 10, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  width: 800px;
  padding-bottom: 48px;
  flex-direction: column;
  align-items: center;
  gap: 56px;
  border-radius: 16px;
  border: 0.5px solid ${({ theme }) => theme.colors.secondary["07"]};
  background-color: ${({ theme }) => theme.colors.secondary["09"]};
`;

export const CloseButton = styled(CLOSE_ICON)`
  position: absolute;
  top: 15px;
  right: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  &:hover {
    opacity: 0.7;
  }
`;

export const ModalInfo = styled.div`
  display: flex;
  height: 122px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const InfoTitle = styled.span`
  ${({ theme }) => theme.typography.head.H3};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
  text-align: center;
`;

export const InfoContent = styled.span`
  ${({ theme }) => theme.typography.body.XL};
  color: ${({ theme }) => theme.colors.grayScale["02"]};
  text-align: center;
  white-space: pre-wrap;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 221px;
`;

export const FadeImage = styled.img<{ $isActive: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;

  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;
