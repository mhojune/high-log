import styled from "styled-components";

export const DashboardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const DashboardUserName = styled.p`
  ${({ theme }) => theme.typography.body.L2};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
  margin-top: 19px;
  margin-left: 10px;
  margin-bottom: 0;
`;

export const UsageAnalysisSection = styled.section`
  margin-left: 11px;
  margin-right: 102px;
`;

export const UsageAnalysisGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

export const UsageAnalysisCard = styled.div`
  height: 74px;
  padding: 13px 14px 9px 14px;
  background-color: ${({ theme }) => theme.colors.secondary["09"]};
  border: 1px solid ${({ theme }) => theme.colors.secondary["07"]};
  border-radius: 12px;
  box-sizing: border-box;
`;

export const UsageAnalysisCardValue = styled.span`
  display: block;
  ${({ theme }) => theme.typography.body.L2};
  line-height: 24px;
  color: ${({ theme }) => theme.colors.grayScale["00"]};
`;

export const UsageAnalysisCardLabel = styled.span`
  display: block;
  margin-top: 10px;
  ${({ theme }) => theme.typography.body.S0};
  line-height: 18px;
  color: ${({ theme }) => theme.colors.grayScale["05"]};
`;

export const EvaluationSection = styled.section`
  margin-left: 10px;
  margin-right: 39px;
  margin-bottom: 27px;
`;

export const EvaluationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const EvaluationCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 76px;
  background-color: ${({ theme }) => theme.colors.grayScale["11"]};
  border: 1px solid ${({ theme }) => theme.colors.secondary["07"]};
  border-radius: 12px;
  box-sizing: border-box;
`;

export const EvaluationCardTextWrapper = styled.div`
  flex: 1;
`;

export const EvaluationCardTitle = styled.p`
  ${({ theme }) => theme.typography.body.S2};
  line-height: 24px;
  color: ${({ theme }) => theme.colors.grayScale["00"]};
  margin-top: 15px;
  margin-left: 14px;
  margin-bottom: 0;
`;

export const EvaluationCardDescription = styled.p`
  margin-top: 3px;
  margin-left: 14px;
  margin-bottom: 13px;
  ${({ theme }) => theme.typography.body.XS1};
  line-height: 21px;
  color: ${({ theme }) => theme.colors.grayScale["05"]};
`;

export const EvaluationCardStatus = styled.span`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 39px;
  margin-top: 19px;
  margin-right: 15px;
  margin-bottom: 18px;
  padding: 10px 10px 9px 10px;
  background-color: ${({ theme }) => theme.colors.secondary["09"]};
  border: 1px solid ${({ theme }) => theme.colors.secondary["07"]};
  border-radius: 9999px;
  ${({ theme }) => theme.typography.body.S1};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
  box-sizing: border-box;
`;
