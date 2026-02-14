import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-width: 1440px;
  min-height: calc(100vh - 89px);
  padding: 96px 120px;
  background-color: ${({ theme }) => theme.colors.grayScale["10"]};
  box-sizing: border-box;
`;
