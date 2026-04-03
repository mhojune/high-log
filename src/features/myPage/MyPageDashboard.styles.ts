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
  background-color: ${({ theme }) => theme.colors.grayScale["11"]};
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
