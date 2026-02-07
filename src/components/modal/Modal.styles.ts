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

export const ModalContainer = styled.div`
  width: 580px;
  min-height: 338px;
  background-color: ${({ theme }) => theme.colors.secondary["09"]};
  border-radius: 16px;
  border: 0.5px solid ${({ theme }) => theme.colors.secondary["07"]};
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const TitleWrapper = styled.div`
  padding: 80px 0 72px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;

export const MainTitle = styled.h2`
  ${({ theme }) => theme.typography.head.H3}
  color: ${({ theme }) => theme.colors.grayScale["00"]};
  margin: 0;
`;

export const SubTitle = styled.p`
  ${({ theme }) => theme.typography.body.XL}
  color: ${({ theme }) => theme.colors.grayScale["02"]};
  margin: 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0;
  margin-top: auto;
  padding: 0;
`;

export const LeftButton = styled.button`
  width: 290px;
  height: 100px;
  ${({ theme }) => theme.typography.head.H3}
  color: ${({ theme }) => theme.colors.grayScale["04"]};
  background: none;
  border: none;
  border-top: 0.5px solid ${({ theme }) => theme.colors.grayScale["07"]};
  border-right: 0.5px solid ${({ theme }) => theme.colors.grayScale["07"]};
  padding: 29px 0;
  cursor: pointer;
  border-radius: 0;
  border-bottom-left-radius: 16px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RightButton = styled.button`
  width: 290px;
  height: 100px;
  ${({ theme }) => theme.typography.head.H3}
  color: ${({ theme }) => theme.colors.grayScale["01"]};
  background: none;
  border: none;
  border-top: 0.5px solid ${({ theme }) => theme.colors.grayScale["07"]};
  padding: 29px 0;
  cursor: pointer;
  border-radius: 0;
  border-bottom-right-radius: 16px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
`;
