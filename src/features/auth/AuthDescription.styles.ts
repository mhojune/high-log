import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

export const TextBlock = styled.div`
  padding: 44px 0 0 42px;
  box-sizing: border-box;

  h2 {
    ${({ theme }) => theme.typography.head.H2};
    color: ${({ theme }) => theme.colors.grayScale["00"]};
    margin: 0;

    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
`;

export const FeatureBlocksWrapper = styled.div`
  width: 100%;
  padding: 68px 34px 0 34px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 10px;
  align-items: flex-start;
`;

export const FeatureBlock = styled.div`
  flex: 1 1 0;
  margin: 0;
  min-width: 200px;
  min-height: 200px;
  aspect-ratio: 1 / 1;
  container-type: inline-size;
  background-color: ${({ theme }) => theme.colors.grayScale["11"]};
  border: 1px solid ${({ theme }) => theme.colors.primary["00"]};
  border-radius: 12px;
  box-sizing: border-box;
`;

export const FeatureBlockContent = styled.div`
  height: 100%;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const FeatureBlockIcon = styled.div`
  width: 35.5%;
  aspect-ratio: 1;
  margin-top: 19.5%;
  margin-left: auto;
  margin-right: auto;
  flex-shrink: 0;

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const FeatureBlockTitle = styled.p`
  ${({ theme }) => theme.typography.body.S2};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
  margin: 16% 27.25% 17%;
  text-align: center;
  white-space: nowrap;
  font-size: clamp(12px, 8cqi, 40px);
  line-height: 1.5;
`;

export const ButtonWrapper = styled.div`
  padding: 152px 0 30px 40px;
`;
