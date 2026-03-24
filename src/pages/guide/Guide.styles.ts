import styled from "styled-components";

export const Container = styled.main`
  min-width: 1440px;
  padding: 96px 120px 96px 0;
  background-color: ${({ theme }) => theme.colors.grayScale["10"]};
`;

export const FlowResultWrapper = styled.div`
  padding: 96px 0 96px 120px;
  display: flex;
  flex-direction: column;
  gap: 96px;
`;
