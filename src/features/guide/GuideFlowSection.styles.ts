import styled from "styled-components";

export const GuideFlowSectionContainer = styled.section``;

export const FlowTitle = styled.h2`
  ${({ theme }) => theme.typography.head.H3};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
`;

export const FlowCardsArea = styled.div`
  margin-top: 32px;
  width: 100%;
`;

export const FlowCardsRow = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
`;

export const FlowCardsTopRowWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const FlowCardsTopRowCircle = styled.div`
  position: absolute;
  left: calc(286px + 24px + 286px + 24px + 286px - 16px);
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondary["06"]}B3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FlowCardsTopRowCircleInner = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary["00"]};
`;

const INNER_CIRCLE_CENTER_X = 906;

export const FlowCardsTopRowLine = styled.div`
  position: absolute;
  left: ${INNER_CIRCLE_CENTER_X}px;
  top: 50%;
  transform: translateY(-50%);
  width: calc(100% - ${INNER_CIRCLE_CENTER_X}px);
  height: 3px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primary["00"]} 0%,
    ${({ theme }) => theme.colors.grayScale["10"]}CC 100%
  );
  mask-image: repeating-linear-gradient(90deg, black 0 8px, transparent 8px 16px);
  -webkit-mask-image: repeating-linear-gradient(90deg, black 0 8px, transparent 8px 16px);
  mask-size: 16px 3px;
  -webkit-mask-size: 16px 3px;
  mask-repeat: repeat;
  -webkit-mask-repeat: repeat;
  pointer-events: none;
`;

export const FlowCardsBottomRowWrapper = styled.div`
  position: relative;
  margin-top: 32px;
  width: 100%;
`;

export const FlowCardsBottomRow = styled(FlowCardsRow)`
  justify-content: flex-end;
`;

export const FlowCardsBottomRowCircle = styled.div`
  position: absolute;
  left: calc(100% - 596px - 16px);
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondary["06"]}B3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FlowCardsBottomRowCircleInner = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary["00"]};
`;

export const FlowCardsBottomRowLine = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: calc(100% - 596px - 16px);
  height: 3px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.grayScale["10"]}CC 0%,
    ${({ theme }) => theme.colors.primary["00"]} 100%
  );
  mask-image: repeating-linear-gradient(90deg, black 0 8px, transparent 8px 16px);
  -webkit-mask-image: repeating-linear-gradient(90deg, black 0 8px, transparent 8px 16px);
  mask-size: 16px 3px;
  -webkit-mask-size: 16px 3px;
  mask-repeat: repeat;
  -webkit-mask-repeat: repeat;
  pointer-events: none;
`;
