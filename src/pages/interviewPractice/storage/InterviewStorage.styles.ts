import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-width: 1440px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 96px;
  padding-bottom: 96px;
`;

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 44px;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 464px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.secondary["07"]};
  background-color: ${({ theme }) => theme.colors.grayScale["11"]};
`;

export const StorageBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px;
  border-radius: 12px;
  gap: 24px;
`;

export const FilterSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;

export const FilterGroup = styled.div`
  display: flex;
  gap: 14px;
`;

export const FilterItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const FilterLabel = styled.span`
  ${({ theme }) => theme.typography.body.S0};
  color: ${({ theme }) => theme.colors?.grayScale?.["00"]};
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.secondary["06"]};
  overflow: hidden;
`;

export const TableHeader = styled.div`
  display: flex;
  padding: 17px 34px 17px 14px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  background-color: ${({ theme }) => theme.colors.secondary["09"]};
`;

export const HeaderText = styled.span`
  ${({ theme }) => theme.typography.body.L1};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
`;

export const TableContentBox = styled.div`
  display: flex;
  padding: 15px 13px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-top: 1px solid ${({ theme }) => theme.colors.secondary["06"]};
`;

export const DayCountBox = styled.div`
  display: flex;
  height: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3px;
`;

export const DayText = styled.span`
  ${({ theme }) => theme.typography.body.S0};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
`;

export const CountText = styled.span`
  ${({ theme }) => theme.typography.body.S0};
  color: ${({ theme }) => theme.colors.grayScale["05"]};
`;

export const TagGroup = styled.div`
  display: flex;
  gap: 11px;
  justify-content: center;
`;

export const Tag = styled.div`
  display: flex;
  height: 40px;
  padding: 8px 14px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.secondary["06"]};
  background-color: ${({ theme }) => theme.colors.secondary["09"]};

  ${({ theme }) => theme.typography.body.S1};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
`;

export const DurationBadge = styled.div`
  display: flex;
  height: 40px;
  padding: 8px 11px 8px 13px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.secondary["06"]};
  background-color: ${({ theme }) => theme.colors.secondary["09"]};

  ${({ theme }) => theme.typography.body.S1};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 213px;
  background-color: ${({ theme }) => theme.colors.grayScale["11"]};
`;

export const EmptyStateText = styled.span`
  ${({ theme }) => theme.typography.body.L1};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
`;

export const EmptyStateSubText = styled.span`
  ${({ theme }) => theme.typography.body.M0};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
`;
