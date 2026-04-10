import styled from "styled-components";
import * as Layout from "@/features/myPage/MyPageLayout.styles";

export const WithdrawTitleSection = styled(Layout.TitleSection)`
  margin-bottom: 48px;
`;

export const WithdrawMainArea = styled.div`
  flex: 1;
  min-width: 0;
`;

export const WithdrawHeading = styled.h2`
  ${({ theme }) => theme.typography.head.H4}
  color: ${({ theme }) => theme.colors.grayScale["00"]};
  margin: 0;
`;

export const WithdrawDescriptionList = styled.div`
  margin-top: 16px;
  padding-left: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const WithdrawDescriptionLine = styled.p`
  ${({ theme }) => theme.typography.body.L0}
  color: ${({ theme }) => theme.colors.grayScale["01"]};
  margin: 0;
`;

export const WithdrawReasonSection = styled.section`
  margin-top: 32px;
  width: 100%;
`;

export const WithdrawReasonHeading = styled.h2`
  ${({ theme }) => theme.typography.head.H4}
  color: ${({ theme }) => theme.colors.grayScale["00"]};
  margin: 0;
`;

export const WithdrawReasonTextarea = styled.textarea`
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin-top: 16px;
  height: 96px;
  min-height: 96px;
  max-height: 96px;
  padding: 14px 16px;
  resize: none;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.grayScale["11"]};
  border: 0.5px solid ${({ theme }) => theme.colors.secondary["07"]};
  border-radius: 8px;
  ${({ theme }) => theme.typography.body.L0}
  color: ${({ theme }) => theme.colors.grayScale["01"]};

  &:focus {
    outline: none;
  }
`;

export const WithdrawConfirmRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
`;

export const WithdrawConfirmLabel = styled.span`
  ${({ theme }) => theme.typography.body.S0}
  color: ${({ theme }) => theme.colors.grayScale["02"]};
  margin: 0;
`;

export const WithdrawPasswordSection = styled.div`
  margin-top: 48px;
`;

export const WithdrawPasswordFieldWrapper = styled.div`
  width: calc(100% / 3);
`;

export const WithdrawButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 48px;
`;
