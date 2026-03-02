import styled from "styled-components";

export const SupportContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary["04"]};
  border-top: 2px solid ${({ theme }) => theme.colors.secondary["04"]};
  background-color: ${({ theme }) => theme.colors.grayScale["11"]};
`;

export const Header = styled.div`
  display: flex;
  padding: 16px 0;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  background-color: ${({ theme }) => theme.colors.secondary["09"]};
`;

export const TextBox = styled.div`
  display: flex;
  width: 1140px;
  padding-bottom: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const HeaderTitle = styled.span`
  ${({ theme }) => theme.typography.head.H4};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
`;

export const HeaderDateBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const HeaderDateText = styled.span`
  ${({ theme }) => theme.typography.body.L0};
  color: ${({ theme }) => theme.colors.grayScale["04"]};
`;

export const ContentBox = styled.div`
  display: flex;
  padding: 80px;
  flex-direction: column;
  align-self: stretch;
  background-color: ${({ theme }) => theme.colors.grayScale["11"]};
`;

export const ContentText = styled.span`
  ${({ theme }) => theme.typography.body.M0};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
  white-space: pre-wrap;
`;
