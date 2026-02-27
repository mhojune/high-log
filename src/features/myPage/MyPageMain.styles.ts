import styled from "styled-components";

export const MainBox = styled.main`
  flex: 1;
  min-width: 845px;
  height: 332px;
  background-color: ${({ theme }) => theme.colors.grayScale["11"]};
  border: 1px solid ${({ theme }) => theme.colors.secondary["07"]};
  border-radius: 12px;
  box-sizing: border-box;
`;
