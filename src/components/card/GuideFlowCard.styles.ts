import styled from "styled-components";

export const GuideFlowCardContainer = styled.div`
  width: 286px;
  height: 274px;
  padding: 32px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.grayScale["11"]};
  border: 0.5px solid ${({ theme }) => theme.colors.secondary["07"]};
  box-sizing: border-box;
`;

export const NumberBox = styled.div`
  width: 44px;
  height: 44px;
  padding: 11px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.secondary["09"]};
  border: 1px solid ${({ theme }) => theme.colors.secondary["07"]};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.typography.body.S2};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
`;

export const FlowTitle = styled.h3`
  margin-top: 16px;
  ${({ theme }) => theme.typography.body.L2};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
`;

export const Description = styled.p`
  margin-top: 16px;
  white-space: pre-line;
  ${({ theme }) => theme.typography.body.S0};
  color: ${({ theme }) => theme.colors.grayScale["05"]};
`;

export const ResultBox = styled.div`
  margin-top: 16px;
  width: 100%;
  min-height: 40px;
  padding: 8px 19px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.secondary["09"]};
  border: 1px solid ${({ theme }) => theme.colors.secondary["07"]};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const ResultLabel = styled.span`
  ${({ theme }) => theme.typography.body.S2};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
`;

export const ResultValue = styled.span`
  ${({ theme }) => theme.typography.body.S0};
  color: ${({ theme }) => theme.colors.secondary["02"]};
  white-space: pre-line;
`;
