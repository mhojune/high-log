import styled from "styled-components";

export const Practice1Container = styled.div`
  display: flex;
  width: 1200px;
  flex-direction: column;
  align-items: flex-end;
  gap: 48px;
`;

export const PracticeSettingWrapper = styled.div`
  display: flex;
  padding: 48px 72px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 240px;
  align-self: stretch;
  background-color: ${({ theme }) => theme.colors.grayScale["11"]};
  border-radius: 12px;
`;

export const SettingBox = styled.div`
  display: flex;
  width: 1056px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

export const SettingText = styled.p`
  ${({ theme }) => theme.typography.head.H4};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
`;

export const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 56px;
  align-self: stretch;
`;

export const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const TitleSelect = styled.div`
  width: 489px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.body.L2};
  color: ${({ theme }) => theme.colors.grayScale["03"]};
`;

export const DropDownWrapper = styled.div`
  position: relative;
`;
