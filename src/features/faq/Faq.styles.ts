import styled from "styled-components";
import UP_ACODIAN from "@/assets/icons/acodian.svg?react";

export const FaqContainer = styled.div`
  width: 100%;
  width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-top: 2px solid ${({ theme }) => theme.colors.secondary["04"]};
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary["04"]};
`;

export const FaqList = styled.div<{ $isOpen: boolean }>`
  display: flex;
  padding: ${({ $isOpen }) => ($isOpen ? "16px 0 0 0" : "16px 0")};
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary["04"]};
  background: ${({ theme }) => theme.colors.grayScale["11"]};
`;

export const ContentBox = styled.div`
  display: flex;
  width: 1040px;
  justify-content: space-between;
  align-items: center;
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  flex-shrink: 0;
`;

export const QIcon = styled.span`
  ${({ theme }) => theme.typography.head.H3};
  color: ${({ theme }) => theme.colors.secondary["02"]};
`;

export const QuestionText = styled.span`
  ${({ theme }) => theme.typography.body.L2};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
`;

export const AnswerText = styled.span`
  ${({ theme }) => theme.typography.body.L0};
  color: ${({ theme }) => theme.colors.grayScale["01"]};
`;

export const Acodian = styled(UP_ACODIAN)<{ $isOpen: boolean }>`
  width: 48px;
  height: 48px;
  cursor: pointer;
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const AnswerBox = styled.div<{ $isOpen: boolean }>`
  display: flex;
  width: 1200px;
  justify-content: center;
  align-items: center;
  background: #f6f6fb;

  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;

  max-height: 0;
  opacity: 0;
  margin-top: 16px;
  padding: 0 80px;

  ${({ $isOpen }) =>
    $isOpen &&
    `
    max-height: 500px;
    opacity: 1;
    padding: 40px 80px;
  `}
`;
