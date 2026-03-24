import styled from "styled-components";

export const SupportListContainer = styled.div`
  width: 100%;
  height: 551px;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary["04"]};
  border-top: 2px solid ${({ theme }) => theme.colors.secondary["04"]};
  background-color: ${({ theme }) => theme.colors.grayScale["11"]};
`;

export const Header = styled.div`
  display: flex;
  padding: 20px 0;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  align-self: stretch;
  background-color: ${({ theme }) => theme.colors.secondary["09"]};
`;

export const TextBox = styled.div`
  display: flex;
  width: 1040px;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderText = styled.span`
  ${({ theme }) => theme.typography.body.L2};
  color: ${({ theme }) => theme.colors.grayScale["01"]};
`;

export const HeaderDate = styled.div`
  display: flex;
  width: 104px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`;

export const ListBox = styled.div`
  display: flex;
  padding: 20px 0;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  align-self: stretch;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary["04"]};

  &:last-child {
    border-bottom: none;
  }
`;

export const ListBoxTextWrapper = styled.div`
  display: flex;
  width: 1040px;
  justify-content: space-between;
  align-items: center;
`;

export const ListBoxTextNumber = styled.span`
  ${({ theme }) => theme.typography.body.M0};
  color: #000;
`;

export const ListBoxTextTitle = styled.span`
  width: 734px;
  flex-shrink: 0;
  ${({ theme }) => theme.typography.body.M0};
  color: #000;

  cursor: pointer;
`;

export const ListBoxDate = styled.span`
  ${({ theme }) => theme.typography.body.M0};
  color: ${({ theme }) => theme.colors.grayScale["04"]};
`;
