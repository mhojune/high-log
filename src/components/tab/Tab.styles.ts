import styled from "styled-components";

export const TabContainer = styled.div`
  width: 358px;
  height: 43px;
  display: flex;
  border-radius: 8px;
  overflow: hidden;
`;

export const TabItem = styled.button<{ isActive: boolean }>`
  width: 179px;
  height: 43px;
  padding: 8px 66px;
  box-sizing: border-box;
  ${({ theme }) => theme.typography.body.M2}
  background-color: ${({ theme, isActive }) =>
    isActive
      ? theme.colors.secondary["08"]
      : theme.colors.grayScale["08"]};
  color: ${({ theme, isActive }) =>
    isActive
      ? theme.colors.secondary["05"]
      : theme.colors.grayScale["05"]};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;
