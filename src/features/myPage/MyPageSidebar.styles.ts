import styled from "styled-components";

export const SidebarBox = styled.aside`
  min-width: 330px;
  width: 330px;
  flex-shrink: 0;
  min-height: 358px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.grayScale["11"]};
  border: 1px solid ${({ theme }) => theme.colors.secondary["07"]};
  border-radius: 12px;
  box-sizing: border-box;
`;

export const SidebarUserSection = styled.div`
  padding: 19px 28px 0 20px;
  box-sizing: border-box;
`;

export const SidebarUserRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 13px;
`;

export const SidebarUserAvatar = styled.div`
  width: 55px;
  height: 55px;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.secondary["09"]};
  border: 1px solid ${({ theme }) => theme.colors.secondary["07"]};
  border-radius: 8px;
  box-sizing: border-box;
`;

export const SidebarUserInfo = styled.div`
  flex: 1;
  min-width: 0;
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SidebarUserName = styled.span`
  height: 20px;
  ${({ theme }) => theme.typography.body.L2};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
`;

export const SidebarUserJoinDate = styled.span`
  height: 18px;
  ${({ theme }) => theme.typography.body.S0};
  color: ${({ theme }) => theme.colors.grayScale["05"]};
`;

export const SidebarDivider = styled.div`
  margin: 14px 23px;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.secondary["07"]};
`;

export const SidebarNavSection = styled.div`
  margin: 0 25px 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;
`;

export const SidebarNavButton = styled.button<{ $active: boolean }>`
  width: 100%;
  height: 50px;
  padding: 0;
  border: 1px solid ${({ theme }) => theme.colors.secondary["07"]};
  border-radius: 12px;
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.secondary["09"] : theme.colors.grayScale["11"]};
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary["09"]};
  }
`;

export const SidebarNavButtonText = styled.span`
  padding: 16px 0 16px 13px;
  ${({ theme }) => theme.typography.body.S2};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
`;

export const SidebarNavButtonIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13px 6px 13px 0;

  svg {
    width: 24px;
    height: 24px;
  }

  path {
    stroke: ${({ theme }) => theme.colors.grayScale["00"]};
  }
`;

export const SidebarActionSection = styled.div`
  margin: 0px 25px 19px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-sizing: border-box;
`;

export const SidebarActionButton = styled.button`
  width: 100%;
  height: 50px;
  padding: 16px 20px;
  border: 1px solid ${({ theme }) => theme.colors.secondary["07"]};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.grayScale["11"]};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
  ${({ theme }) => theme.typography.body.S2};
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;

export const SidebarWithdrawButton = styled(SidebarActionButton)`
  height: 55px;
  padding: 19px 20px 18px;
  ${({ theme }) => theme.typography.body.L2};
`;
