import styled from "styled-components";

export const Container = styled.div`
  min-width: 1440px;
  padding: 96px 120.5px;
  background-color: ${({ theme }) => theme.colors.grayScale["10"]};
  box-sizing: border-box;
  min-height: 100%;
`;
