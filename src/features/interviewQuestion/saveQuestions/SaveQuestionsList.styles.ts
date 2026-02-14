import styled from "styled-components";

export const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 48px;
  margin-bottom: 24px;
`;

export const TotalCount = styled.span`
  ${({ theme }) => theme.typography.head.H4};
  color: ${({ theme }) => theme.colors.grayScale["04"]};
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

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 96px;
  width: 100%;
`;
