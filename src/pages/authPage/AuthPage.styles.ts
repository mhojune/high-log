import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 89px);
  padding-top: 39px;
  padding-left: 120px;
  padding-right: 120px;
  box-sizing: border-box;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
`;

const FrameBase = styled.div`
  background-color: ${({ theme }) => theme.colors.grayScale["11"]};
  border: 1px solid ${({ theme }) => theme.colors.secondary["07"]};
  border-radius: 12px;
  flex-shrink: 0;
`;

export const LeftFrame = styled(FrameBase)`
  flex: 690 0 690px;
  min-width: 690px;
`;

export const FormFrame = styled(FrameBase)`
  flex: 486 0 486px;
  min-width: 486px;
  min-height: 725px;
`;

export const FormFrameContent = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

export const FormFrameContentWithPadding = styled(FormFrameContent)`
  padding: 128px 18px 0 18px;
`;

export const TabWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 48px 64px 37px 64px;
  box-sizing: border-box;
`;
