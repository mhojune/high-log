import styled from "styled-components";

export const Content = styled.div``;

export const UserName = styled.p`
  ${({ theme }) => theme.typography.body.L2};
  line-height: 20px;
  color: ${({ theme }) => theme.colors.grayScale["00"]};
  margin-top: 19px;
  margin-left: 22px;
`;

export const CurrentPasswordSection = styled.div`
  margin-top: 12px;
  margin-left: 20px;
  margin-right: 25px;
`;

export const CurrentPasswordFieldWrapper = styled.div`
  width: calc((100% - 16px) / 2);
`;

export const NewPasswordSection = styled.div`
  margin-top: 12px;
  margin-left: 20px;
  margin-right: 25px;
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const NewPasswordField = styled.div`
  flex: 1;
`;

export const FieldLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  line-height: 24px;
  ${({ theme }) => theme.typography.body.S1};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
`;

export const FieldWrapper = styled.div`
  width: 100%;
  height: 43px;

  & > div {
    height: 100%;
  }

  input {
    height: 100%;
    box-sizing: border-box;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 52px;
  margin-left: 22px;
  margin-bottom: 30px;
`;
