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
  background-color: ${({ theme }) => theme.colors.grayScale["08"]};
  border-radius: 16px;
`;

export const PracticeStep2TextContainer = styled.div`
  display: flex;
  padding: 48px 38px 70px 38px;
  flex-direction: column;
  align-items: stretch;
  gap: 74px;
  align-self: stretch;
  background-color: ${({ theme }) => theme.colors.grayScale["11"]};
  border-radius: 16px;
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
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.colors.secondary["09"]};
`;

export const Timer = styled.p`
  ${({ theme }) => theme.typography.body.S2};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
`;

export const ChattingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  overflow-y: auto;
`;

export const TextChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  overflow-y: auto;
  display: flex;
  height: 410px;
  border-radius: 12px;
  border: 0.5px solid #031786;
  padding: 10px 15px;
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
  display: flex;
  height: 226px;
  padding: 32px 32px 24px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex-shrink: 0;
  align-self: stretch;
  border-radius: 12px;
  border: 0.5px solid #e5e8fa;
  background: #fafafa;
  ${({ theme }) => theme.typography.head.H3};
  color: ${({ theme }) => theme.colors.grayScale["05"]};
  border: none;
  outline: none;
  background: transparent;
`;

export const AnswerTextInput = styled.input`
  width: 826px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex-shrink: 0;
  align-self: stretch;
  border: none;
  outline: none;
  background: #fafafa;
  ${({ theme }) => theme.typography.head.H3};
  background: #fdfdfd;
`;

export const VoiceAnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding: 32px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.grayScale["11"]};
  border: 1px solid ${({ theme }) => theme.colors.secondary["07"]};
  min-height: 226px;
  justify-content: space-between;
`;

export const QuestionHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const QuestionBadge = styled.div`
  display: flex;
  padding: 6px 14px;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.colors.primary["00"]};
  color: ${({ theme }) => theme.colors.grayScale["11"]};
  ${({ theme }) => theme.typography.body.M2};
`;

export const QuestionText = styled.div`
  ${({ theme }) => theme.typography.head.H4};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
  line-height: 1.5;
`;

export const VoiceControls = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: auto;
`;

export const VoiceStatusArea = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const VoiceStatusDots = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  height: 24px;
  margin-left: 80px;

  span {
    width: 8px;
    height: 8px;
    background-color: ${({ theme }) => theme.colors.primary["00"]};
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
