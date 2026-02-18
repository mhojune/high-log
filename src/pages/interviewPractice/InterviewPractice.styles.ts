import styled from "styled-components";

export const InterviewPracticeContainer = styled.div`
  width: 100%;
  min-width: 1440px;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 96px;
  padding-bottom: 96px;
  gap: 48px;
  background-color: ${({ theme }) => theme.colors.grayScale["10"]};
`;
