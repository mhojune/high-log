import styled from "styled-components";

export const Container = styled.div<{ $isOpen: boolean }>`
  position: relative;
  display: flex;
  width: 459px;
  padding: 8px 16px;
  border-radius: ${({ $isOpen }) => ($isOpen ? "8px 8px 0px 0px" : "8px")};
  background: ${({ theme }) => theme.colors.grayScale["09"]};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const SelectedDateText = styled.div`
  ${({ theme }) => theme.typography.body.M0};
  color: ${({ theme }) => theme.colors.grayScale["06"]};
`;

export const CalendarWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.grayScale["09"]};
  border-radius: 0 0 8px 8px;
  z-index: 100;
  padding: 0px 20px 20px 20px;
`;

export const CalendarHeader = styled.div`
  display: flex;
  padding: 16px 16px;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  align-self: stretch;
`;

export const MonthText = styled.div`
  ${({ theme }) => theme.typography.body.L2};
  color: ${({ theme }) => theme.colors.grayScale["04"]};
`;

export const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.grayScale["00"]};
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;

  &:hover {
    color: #000;
  }
`;

export const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
`;

export const DayName = styled.div`
  display: flex;
  padding: 8px 5px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

export const DayCell = styled.div<{
  $isSelected: boolean;
  $isCurrentMonth: boolean;
}>`
  ${({ theme }) => theme.typography.body.M1};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
  padding: 6px 0;
  cursor: pointer;
  background: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.grayScale["07"] : "transparent"};
  border-radius: 8px;
  transition: all 0.2s ease;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #bababa;
`;
