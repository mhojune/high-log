import styled from "styled-components";

export const CreateFormBox = styled.div`
  width: 100%;
  padding: 48px 72px;
  background-color: ${({ theme }) => theme.colors.grayScale["11"]};
  border: 0.5px solid ${({ theme }) => theme.colors.secondary["07"]};
  border-radius: 16px;
  box-sizing: border-box;
  margin-top: 24px;
`;

export const FormBoxTitle = styled.h2`
  color: ${({ theme }) => theme.colors.grayScale["01"]};
  ${({ theme }) => theme.typography.head.H4};
  margin: 0 0 32px;
`;

export const FormBoxSubTitle = styled(FormBoxTitle)`
  margin: 95px 0 32px;
`;

export const SchoolRecordRow = styled.div`
  display: flex;
  align-items: center;
  gap: 57px;
  width: 100%;
`;

export const SchoolRecordDropDownWrapper = styled.div`
  flex: 1;
  min-width: 0;

  & > div {
    position: relative;
  }
  & > div > ul {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin-top: 4px;
    padding: 8px 16px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.grayScale["09"]};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 10;
    box-sizing: border-box;
  }
`;

export const FormFieldGroups = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const FormFieldGroup = styled.div``;

const FormField = styled.div`
  margin-bottom: 24px;
  width: 100%;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 8px 16px;
  ${({ theme }) => theme.typography.body.M0};
  border: none;
  outline: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grayScale["09"]};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
  box-sizing: border-box;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayScale["05"]};
  }
`;

export const FormFieldRow = styled(FormField)`
  display: flex;
  align-items: flex-start;
  gap: 114px;
`;

export const FormFieldRowContent = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const TitleInputWrapper = styled.div`
  display: flex;
  flex: 1;
  min-width: 0;
  padding: 8px 16px;
  align-items: center;
  gap: 75px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grayScale["09"]};
  box-sizing: border-box;
`;

export const TitleInputField = styled.input`
  flex: 1;
  min-width: 0;
  ${({ theme }) => theme.typography.body.M0};
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.grayScale["09"]};
  color: ${({ theme }) => theme.colors.grayScale["00"]};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayScale["05"]};
  }
`;

export const TitleInputCaption = styled.span`
  color: ${({ theme }) => theme.colors.grayScale["04"]};
  ${({ theme }) => theme.typography.caption.C0};
  padding-left: 9px;
`;

export const FormFieldRowInput = styled(FormInput)`
  flex: 1;
  min-width: 0;
`;

export const FormFieldRowLabel = styled.span`
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.grayScale["03"]};
  ${({ theme }) => theme.typography.body.L2};
`;

export const SchoolDepartmentRow = styled(FormField)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const DropDownGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  & > div {
    position: relative;
  }
  & > div > ul {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin-top: 4px;
    padding: 8px 16px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.grayScale["09"]};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 10;
    box-sizing: border-box;
  }
`;

export const ApplicationTypeSection = styled(FormField)`
  display: flex;
  align-items: flex-start;
  gap: 75px;
`;

export const ApplicationTypeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ApplicationTypeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ApplicationTypeOption = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.grayScale["00"]};
  ${({ theme }) => theme.typography.body.L0};
`;

export const FormFieldButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
  width: 100%;
`;
