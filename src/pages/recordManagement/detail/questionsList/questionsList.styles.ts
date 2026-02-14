import styled from "styled-components";

export const questionsListContainer = styled.div`
    width: 100%;
    min-width: 1440px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 96px;
    padding-bottom: 96px;
    gap: 96px;
`;

export const questionsListWrapper = styled.div`
    display: flex;
    width: 1200px;
    flex-direction: column;
    align-items: flex-start;
    gap: 48px;
`;

export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;
`;

export const Title = styled.p`
    ${({theme}) => theme.typography.head.H2};
    color: ${({theme}) => theme.colors.grayScale["00"]};
`;

export const DescriptionBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
`;

export const UniversityBox = styled.div`
    display: flex;
    width: 560px;
    justify-content: space-between;
    align-items: center;
`;

export const NameBox = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
`;

export const Subject = styled.p`
    ${({theme}) => theme.typography.body.M1};
    color: ${({theme}) => theme.colors.grayScale["05"]};
`;

export const Name = styled.p`
    ${({theme}) => theme.typography.body.L1};
    color: ${({theme}) => theme.colors.grayScale["02"]};
`;

export const TypeBox = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 72px;
`;

export const QuestionTabBox = styled.div`
    display: flex;
    width: 1200px;
    padding: 8px 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
`;

export const TabContainer = styled.div`
  display: flex;
  gap: 0;
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

export const EmptyState = styled.div`
  display: flex;
  width: 100%;
  padding: 64px 0;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.grayScale["05"]};
  ${({ theme }) => theme.typography.body.M1};
`;
