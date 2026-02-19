import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
`;

export const LogoutButton = styled.button`
  margin-top: 24px;
  padding: 12px 24px;
  border: 1px solid ${({ theme }) => theme.colors.secondary["07"]};
  border-radius: 8px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.grayScale["00"]};
  ${({ theme }) => theme.typography.body.S1};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayScale["11"]};
  }
`;
