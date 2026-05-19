import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  margin-top: 56px;
  padding-bottom: 56px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h4`
  margin: 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.grayScale["00"]};
  ${({ theme }) => theme.typography.head.H4};
`;

export const DetailStack = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DetailLine = styled.p`
  margin: 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.grayScale["03"]};
  ${({ theme }) => theme.typography.body.L1};
`;

export const ButtonWrap = styled.div`
  margin-top: 24px;
`;
