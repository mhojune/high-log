import styled from "styled-components";

export const FaqContainer = styled.div`
  width: 100%;
  min-width: 1440px;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 96px;
  padding-bottom: 96px;
  background-color: ${({ theme }) => theme.colors.grayScale["10"]};
`;

export const FaqWrapper = styled.div`
  display: flex;
  width: 1200px;
  height: 100%;
  flex-direction: column;
  align-items: center;
  gap: 48px;
`;
