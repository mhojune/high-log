import styled from "styled-components";

export const InterviewResultContainer = styled.div`
  display: flex;
  width: 100%;
  min-width: 1440px;
  flex-direction: column;
  align-items: center;
  padding: 96px 0;
  gap: 96px;
  background-color: ${({ theme }) => theme.colors.grayScale["10"]};
`;
