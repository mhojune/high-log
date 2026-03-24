import styled from "styled-components";

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

export const AIChatText = styled.p`
  ${({ theme }) => theme.typography.body.L1};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
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

export const UserChatText = styled.p`
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
