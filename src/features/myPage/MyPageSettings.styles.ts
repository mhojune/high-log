import styled from "styled-components";

export const SettingsContent = styled.div``;

export const SettingsTitle = styled.p`
  ${({ theme }) => theme.typography.body.L2};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
  margin-top: 19px;
  margin-left: 22px;
`;

export const SettingsCardSection = styled.div`
  margin-top: 16px;
  margin-left: 20px;
  margin-right: 40px;
`;

export const SettingsCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 76px;
  background-color: ${({ theme }) => theme.colors.grayScale["11"]};
  border: 1px solid ${({ theme }) => theme.colors.secondary["07"]};
  border-radius: 12px;
  box-sizing: border-box;
`;

export const SettingsCardTextWrapper = styled.div`
  flex: 1;
`;

export const SettingsCardTitle = styled.p`
  ${({ theme }) => theme.typography.body.S1};
  line-height: 20px;
  color: ${({ theme }) => theme.colors.grayScale["00"]};
  margin-top: 19px;
  margin-left: 13px;
  margin-bottom: 0;
`;

export const SettingsCardDescription = styled.p`
  margin-top: 3px;
  margin-left: 13px;
  margin-bottom: 21px;
  ${({ theme }) => theme.typography.body.S0};
  line-height: 20px;
  color: ${({ theme }) => theme.colors.grayScale["05"]};
`;

export const SettingsCardButtonWrapper = styled.div`
  flex-shrink: 0;
  margin-top: 20px;
  margin-right: 12px;
  margin-bottom: 20px;
`;
