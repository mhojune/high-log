import * as S from "./DateFilter.styles";
import { useState, useRef, useEffect } from "react";
import ChevronDown from "@/assets/icons/chevron_down.svg?react";
import ChevronUp from "@/assets/icons/chevron_up.svg?react";

interface DateFilterProps {
  selectedDate: Date | null;
  onSelect: (date: Date) => void;
  placeholder?: string;
}

export default function DateFilter({
  selectedDate,
  onSelect,
  placeholder = "날짜 선택",
}: DateFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const prevMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1),
    );
  };

  const nextMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1),
    );
  };

  const handleDateClick = (e: React.MouseEvent, day: Date) => {
    e.stopPropagation();
    onSelect(day);
    setIsOpen(false);
  };

  const renderDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDayIndex = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const days = [];

    for (let i = firstDayIndex; i > 0; i--) {
      const date = new Date(year, month - 1, daysInPrevMonth - i + 1);
      days.push(
        <S.DayCell
          key={`prev-${i}`}
          $isCurrentMonth={false}
          $isSelected={false}
          onClick={(e) => handleDateClick(e, date)}
        >
          {date.getDate()}
        </S.DayCell>,
      );
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      const isSelected =
        selectedDate?.getFullYear() === date.getFullYear() &&
        selectedDate?.getMonth() === date.getMonth() &&
        selectedDate?.getDate() === date.getDate();

      days.push(
        <S.DayCell
          key={`current-${i}`}
          $isCurrentMonth={true}
          $isSelected={isSelected}
          onClick={(e) => handleDateClick(e, date)}
        >
          {i}
        </S.DayCell>,
      );
    }

    const totalCells = days.length;
    const remainingCells = 35 - totalCells;
    for (let i = 1; i <= remainingCells; i++) {
      const date = new Date(year, month + 1, i);
      days.push(
        <S.DayCell
          key={`next-${i}`}
          $isCurrentMonth={false}
          $isSelected={false}
          onClick={(e) => handleDateClick(e, date)}
        >
          {i}
        </S.DayCell>,
      );
    }

    return days;
  };

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <S.Container $isOpen={isOpen} ref={containerRef} onClick={toggleOpen}>
      <S.Header>
        <S.SelectedDateText>
          {selectedDate
            ? `${selectedDate.getFullYear()}.${String(
                selectedDate.getMonth() + 1,
              ).padStart(2, "0")}.${String(selectedDate.getDate()).padStart(
                2,
                "0",
              )}`
            : placeholder}
        </S.SelectedDateText>
        {isOpen ? (
          <ChevronUp width={24} height={24} stroke="#A3A3A3" />
        ) : (
          <ChevronDown width={24} height={24} stroke="#A3A3A3" />
        )}
      </S.Header>

      {isOpen && (
        <S.CalendarWrapper onClick={(e) => e.stopPropagation()}>
          <S.CalendarHeader>
            <S.ArrowButton onClick={prevMonth}>&lt;</S.ArrowButton>
            <S.MonthText>
              {currentMonth.toLocaleString("en-US", { month: "long" })}&nbsp;
              {currentMonth.getFullYear()}
            </S.MonthText>
            <S.ArrowButton onClick={nextMonth}>&gt;</S.ArrowButton>
          </S.CalendarHeader>
          <S.Line />
          <S.DaysGrid>
            {weekDays.map((day) => (
              <S.DayName key={day}>{day}</S.DayName>
            ))}
            {renderDays()}
          </S.DaysGrid>
        </S.CalendarWrapper>
      )}
    </S.Container>
  );
}
