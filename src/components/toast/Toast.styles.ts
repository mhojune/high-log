import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.grayScale["00"]}66;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ToastContainer = styled.div`
  width: 1200px;
  height: 58px;
  background-color: ${({ theme }) => theme.colors.grayScale["02"]}CC;
  border-radius: 3px;
  border: 0.5px solid ${({ theme }) => theme.colors.secondary["07"]};
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-sizing: border-box;
`;

export const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  padding: 3px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const Message = styled.span`
  flex: 1;
  ${({ theme }) => theme.typography.body.L1}
  color: ${({ theme }) => theme.colors.grayScale["10"]};
`;

export const CloseButton = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-sizing: border-box;

  & svg {
    width: 24px;
    height: 24px;
  }

  & svg path {
    stroke: ${({ theme }) => theme.colors.grayScale["10"]};
  }
`;
