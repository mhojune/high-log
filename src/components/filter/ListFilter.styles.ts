import styled from "styled-components";

export const ListFilterContainer = styled.div<{ $width?: number }>`
  position: relative;
  display: flex;
  width: ${({ $width = 480 }) => `${$width}px`};
  box-sizing: border-box;
  padding: 8px 16px;
  align-items: center;
  gap: 8px;
  border-radius: 999px;
  border: 0.5px solid ${({ theme }) => theme.colors.grayScale["08"]};
  background-color: ${({ theme }) => theme.colors.grayScale["09"]};
`;

export const TitleIconWrap = styled.div`
  display: flex;
  width: 100%;
  min-width: 0;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const Title = styled.input`
  width: 100%;
  min-width: 0;
  flex: 1;
  ${({ theme }) => theme.typography.body.M0};
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.grayScale["09"]};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
`;
