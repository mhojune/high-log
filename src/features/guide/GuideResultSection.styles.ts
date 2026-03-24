import styled from "styled-components";

export const ResultSectionContainer = styled.section``;

export const ResultTitle = styled.h2`
  ${({ theme }) => theme.typography.head.H3};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
`;

export const ResultCardsArea = styled.div`
  margin-top: 32px;
  width: 100%;
  display: flex;
  gap: 16px;
`;

export const ResultExampleBox = styled.div`
  flex: 1;
  min-width: 388px;
  height: 260px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.grayScale["11"]};
  border: 1px solid ${({ theme }) => theme.colors.secondary["07"]};
  padding: 19px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const ResultExampleBoxTitle = styled.span`
  ${({ theme }) => theme.typography.body.S2};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
`;

export const ResultExampleBoxDescription = styled.div`
  margin-top: 8px;
  flex: 1;
  min-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
`;

export const ResultExampleBoxDescriptionItem = styled.span`
  ${({ theme }) => theme.typography.body.S1};
  color: ${({ theme }) => theme.colors.grayScale["04"]};
  white-space: pre-wrap;
  tab-size: 4;
`;
