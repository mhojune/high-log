import styled, { keyframes, css } from "styled-components";
import {
  QuestionCardContainer,
  QuestionCardTop,
} from "@/components/card/QuestionCard.styles";

export const LoadingCardContainer = styled(QuestionCardContainer)`
  width: 100%;
`;

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const shimmerStyles = css`
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.4) 50%,
      transparent 100%
    );
    animation: ${shimmer} 1.5s ease-in-out infinite;
  }
`;

export const LoadingCardTop = styled(QuestionCardTop)`
  background: linear-gradient(135deg, #ebebf5 0%, #f6f7fd 100%);
  ${shimmerStyles}
`;

export const SkeletonRowsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SkeletonBox = styled.div<{ $width?: string; $height?: string }>`
  background: linear-gradient(135deg, #ebebf5 0%, #f6f7fd 100%);
  border-radius: 4px;
  width: ${({ $width }) => $width ?? "100px"};
  height: ${({ $height }) => $height ?? "20px"};
  ${shimmerStyles}
`;
