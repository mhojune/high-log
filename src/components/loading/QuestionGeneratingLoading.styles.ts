import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const TextRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Text = styled.span<{ $isComplete?: boolean }>`
  ${({ theme }) => theme.typography.head.H4};
  color: ${({ theme, $isComplete }) =>
    $isComplete ? theme.colors.secondary["02"] : theme.colors.grayScale["04"]};
`;

export const PercentText = styled.span<{ $isComplete?: boolean }>`
  ${({ theme }) => theme.typography.head.H4};
  color: ${({ theme, $isComplete }) =>
    $isComplete ? theme.colors.secondary["02"] : theme.colors.grayScale["04"]};
`;

export const ProgressBarTrack = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${({ theme }) => theme.colors.grayScale["08"]};
  overflow: hidden;
`;

export const ProgressBarFill = styled.div<{ $percent: number; $isComplete?: boolean }>`
  width: ${({ $percent }) => $percent}%;
  height: 100%;
  background-color: ${({ theme, $isComplete }) =>
    $isComplete ? theme.colors.secondary["02"] : theme.colors.primary["00"]};
  border-radius: 4px;
  transition: width 0.3s ease;
`;
