import styled from "styled-components";

export const HeaderSection = styled.div``;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
`;

export const TitleAccentBar = styled.div`
  width: 8px;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.primary["00"]};
  border-radius: 4px;
  flex-shrink: 0;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.grayScale["00"]};
  ${({ theme }) => theme.typography.head.H0};
  margin: 0;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.grayScale["03"]};
  ${({ theme }) => theme.typography.body.M0};
  line-height: 1.6;
  white-space: pre-line;
  margin-left: 24px;
`;

export const TabContainer = styled.div`
  display: flex;
  gap: 0;
  margin-top: 32px;
  margin-bottom: 24px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.grayScale["08"]};
  width: 100%;
`;

export const TabItem = styled.button<{ $isActive: boolean }>`
  padding: 12px 20px;
  ${({ theme }) => theme.typography.body.L2};
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.primary["00"] : theme.colors.grayScale["03"]};
  background: none;
  border: none;
  border-bottom: 2px solid
    ${({ theme, $isActive }) => ($isActive ? theme.colors.primary["00"] : "transparent")};
  cursor: pointer;
  margin-bottom: -1px;
  white-space: nowrap;
`;

export const QuestionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
`;

export const QuestionCardWrapper = styled.div`
  width: 100%;

  & > * {
    width: 100%;
  }
`;
