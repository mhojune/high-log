import styled from "styled-components";

export const AccountContent = styled.div``;

export const AccountUserName = styled.p`
  ${({ theme }) => theme.typography.body.L2};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
  margin-top: 19px;
  margin-left: 22px;
`;

export const AccountFormSection = styled.div`
  margin-top: 12px;
  margin-left: 20px;
  margin-right: 25px;
`;

export const AccountFieldRow = styled.div`
  display: flex;
  gap: 16px;
`;

export const AccountField = styled.div`
  flex: 1;
`;

export const AccountFieldLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  ${({ theme }) => theme.typography.body.S1};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
`;

export const AccountFieldInput = styled.input`
  display: block;
  width: 100%;
  height: 43px;
  padding: 12px 13px 11px 13px;
  background-color: ${({ theme }) => theme.colors.grayScale["11"]};
  border: 1px solid ${({ theme }) => theme.colors.secondary["07"]};
  border-radius: 12px;
  ${({ theme }) => theme.typography.body.S0};
  color: ${({ theme }) => theme.colors.grayScale["05"]};
  box-sizing: border-box;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayScale["05"]};
  }
`;

export const AccountButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin: 136px 0 30px 22px;
`;
