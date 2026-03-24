import styled from "styled-components";

export const QuestionCardContainer = styled.div`
  width: 100%;
`;

export const QuestionCardTop = styled.div`
  width: 100%;
  min-height: 84px;
  background-color: ${({ theme }) => theme.colors.secondary["09"]};
  border: 0.5px solid ${({ theme }) => theme.colors.secondary["07"]};
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.secondary["07"]};
  padding: 18px 24px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const QuestionCardLeft = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
  flex: 1;
  min-width: 0;
  padding-right: 24px;
`;

export const QuestionCardText = styled.p`
  ${({ theme }) => theme.typography.head.H4};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
  flex: 1;
  word-break: keep-all;
  overflow-wrap: break-word;
`;

export const QuestionCardBottom = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grayScale["11"]};
  border-left: 0.5px solid ${({ theme }) => theme.colors.secondary["07"]};
  border-right: 0.5px solid ${({ theme }) => theme.colors.secondary["07"]};
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.secondary["07"]};
  border-top: none;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  box-sizing: border-box;
`;

export const QuestionCardContent = styled.div`
  padding: 24px 28px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const Passage = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary["09"]};
  border-radius: 8px;
  padding: 20px 30px;
  margin-bottom: 20px;
  ${({ theme }) => theme.typography.body.L0};
  color: ${({ theme }) => theme.colors.grayScale["03"]};
`;

export const QuestionCardDetailsSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const QuestionCardDetailsLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  flex: 1;
  min-width: 0;
  padding-right: 24px;
`;

export const QuestionCardDetailsRight = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 11px;
  flex-shrink: 0;
`;

export const QuestionPurposeRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 36px;
  min-width: 0;
`;

export const QuestionPurposeLabel = styled.span`
  ${({ theme }) => theme.typography.body.M0};
  color: ${({ theme }) => theme.colors.grayScale["04"]};
  flex-shrink: 0;
  white-space: nowrap;
`;

export const QuestionPurposeText = styled.span`
  ${({ theme }) => theme.typography.body.M1};
  color: ${({ theme }) => theme.colors.grayScale["02"]};
  flex: 1;
  min-width: 0;
  word-break: keep-all;
  overflow-wrap: break-word;
`;

export const AnswerPointRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  min-width: 0;
`;

export const AnswerPointLabel = styled.span`
  ${({ theme }) => theme.typography.body.M0};
  color: ${({ theme }) => theme.colors.grayScale["04"]};
  flex-shrink: 0;
  white-space: nowrap;
`;

export const AnswerPointText = styled.span`
  ${({ theme }) => theme.typography.body.M1};
  color: ${({ theme }) => theme.colors.grayScale["02"]};
  flex: 1;
  min-width: 0;
  word-break: keep-all;
  overflow-wrap: break-word;
`;

export const Divider = styled.div`
  width: 100%;
  height: 0.5px;
  background-color: ${({ theme }) => theme.colors.grayScale["08"]};
  margin: 24px 0;
`;

export const AnswerContent = styled.div`
  ${({ theme }) => theme.typography.body.L0};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
  margin-bottom: 24px;
`;

export const AnswerCriteriaBox = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary["09"]};
  border-radius: 8px;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
`;

export const AnswerCriteriaHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const WandIcon = styled.svg`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  
  path {
    stroke: ${({ theme }) => theme.colors.primary["00"]};
  }
`;

export const AnswerCriteriaTitle = styled.span`
  ${({ theme }) => theme.typography.body.M2};
  color: ${({ theme }) => theme.colors.grayScale["01"]};
`;

export const AnswerCriteriaText = styled.div`
  ${({ theme }) => theme.typography.body.M0};
  color: ${({ theme }) => theme.colors.grayScale["02"]};
  margin-top: 10px;
`;
