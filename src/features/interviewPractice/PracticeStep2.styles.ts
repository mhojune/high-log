import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
`;

export const PageContainer = styled.div`
  display: flex;
  width: 1200px;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
`;

export const PracticeStep2Container = styled.div`
  display: flex;
  padding: 48px 38px 70px 38px;
  flex-direction: column;
  align-items: flex-end;
  gap: 74px;
  align-self: stretch;
  background-color: ${({ theme }) => theme.colors.grayScale["11"]};
  border-radius: 12px;
`;

export const PracticeWrapper = styled.div`
  display: flex;
  width: 1124px;
  flex-direction: column;
  align-items: flex-end;
  gap: 24px;
`;

export const TimerResetBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const TimerBox = styled.div`
  display: flex;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.colors.secondary["09"]};
`;

export const Timer = styled.p`
  ${({ theme }) => theme.typography.body.S1};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
`;

export const ChattingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 469px;
  align-self: stretch;
  padding: 25px 0;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.secondary["07"]};
  background-color: ${({ theme }) => theme.colors.grayScale["11"]};
  gap: 15px;
  overflow-y: auto;
`;

export const AIChatBox = styled.div`
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 16px 16px 16px 0;
  background-color: ${({ theme }) => theme.colors.secondary["08"]};
  align-self: flex-start;
  max-width: 80%;
`;

export const AIChatText = styled.div`
  ${({ theme }) => theme.typography.body.L1};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
`;

export const TypingIndicator = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  height: 24px;

  span {
    width: 6px;
    height: 6px;
    background-color: ${({ theme }) => theme.colors.grayScale["05"]};
    border-radius: 50%;
    display: inline-block;
    animation: ${bounce} 1.4s infinite ease-in-out both;

    &:nth-child(1) {
      animation-delay: -0.32s;
    }
    &:nth-child(2) {
      animation-delay: -0.16s;
    }
  }
`;

export const UserChatBox = styled.div`
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 16px 16px 0 16px;
  background-color: ${({ theme }) => theme.colors.secondary["06"]};
  align-self: flex-end;
  max-width: 80%;
`;

export const UserChatText = styled.div`
  ${({ theme }) => theme.typography.body.L0};
  color: ${({ theme }) => theme.colors.grayScale["11"]};
`;

export const AnswerButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const AnswerBox = styled.div`
  display: flex;
  padding: 19px 21px 19px 24px;
  justify-content: center;
  align-items: center;
  gap: 37px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.secondary["07"]};
  background-color: ${({ theme }) => theme.colors.grayScale["11"]};
`;

export const AnswerInput = styled.input`
  width: 826px;
  height: 44px;
  ${({ theme }) => theme.typography.head.H3};
  color: ${({ theme }) => theme.colors.grayScale["05"]};
  border: none;
  outline: none;
  background: transparent;
`;
