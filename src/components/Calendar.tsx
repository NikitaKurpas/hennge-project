import React, { MouseEventHandler, ReactNode, useState } from 'react';
import 'styled-components/macro';
import styled from 'styled-components';
import {
  startOfMonth,
  getISODay,
  getDaysInMonth,
  setMonth,
  addMonths,
  getMonth,
  getYear,
  setYear,
  addDays,
  isSameDay,
  isBefore,
  isWithinInterval,
  startOfDay,
  endOfDay
} from 'date-fns';
import theme from '../lib/theme';

type IntervalChangeHandler = (date: Date | null) => void;

const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
const years = new Array(100).fill(0).map((_, idx) => 1950 + idx);

const WeekdayHeaderCell = styled.th`
  width: 3.5ch;
  height: 1.5em;
`;

const DayCell = styled.td<{ selected?: boolean }>`
  height: 1.5em;
  text-align: center;
  cursor: pointer;
  user-select: none;
  background-color: ${props => (props.selected ? theme.colors.lightGray.dark : 'unset')};

  &:hover {
    background-color: ${props => (props.selected ? theme.colors.lightGray.dark : theme.colors.lightGray.default)};
  }
`;

const Container = styled.div`
  display: inline-block;
  border-radius: 8px;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.2);
  background-color: white;
  padding: 12px;
`;

const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`;

const Calendar: React.FC<{
  intervalStartDate?: Date | null;
  intervalEndDate?: Date | null;
  onIntervalStartChange?: IntervalChangeHandler;
  onIntervalEndChange?: IntervalChangeHandler;
  className?: string;
}> = ({ className, intervalStartDate, intervalEndDate, onIntervalStartChange, onIntervalEndChange }) => {
  // normalize incoming props
  intervalStartDate = intervalStartDate ? startOfDay(intervalStartDate) : null;
  intervalEndDate = intervalEndDate ? endOfDay(intervalEndDate) : null;

  const [currentStartDate, setCurrentStartDate] = useState(startOfMonth(new Date()));

  const handleIntervalDaySelect = (date: Date): MouseEventHandler<HTMLTableCellElement> => () => {
    if (intervalStartDate != null && intervalEndDate != null) {
      // reset
      onIntervalStartChange?.(date);
      onIntervalEndChange?.(null);
    } else if (intervalStartDate == null) {
      onIntervalStartChange?.(date);
    } else if (isBefore(date, intervalStartDate)) {
      // flip start and end day
      onIntervalEndChange?.(endOfDay(intervalStartDate));
      onIntervalStartChange?.(date);
    } else {
      onIntervalEndChange?.(endOfDay(date));
    }
  };

  const isDateSelected = (date: Date) =>
    (intervalStartDate != null && intervalEndDate == null && isSameDay(date, intervalStartDate)) ||
    (intervalStartDate != null &&
      intervalEndDate != null &&
      isWithinInterval(date, { start: intervalStartDate, end: intervalEndDate }));

  const blanks = [];
  for (let i = 1; i < getISODay(currentStartDate); i++) {
    blanks.push(<td key={`blank-${i}`} />);
  }

  const allDays = [];
  for (let day = 1; day <= getDaysInMonth(currentStartDate); day++) {
    const date = addDays(currentStartDate, day - 1);
    allDays.push(
      <DayCell key={`day-${day}`} onClick={handleIntervalDaySelect(date)} selected={isDateSelected(date)}>
        {day}
      </DayCell>
    );
  }

  const allSlots = [...blanks, ...allDays];
  let rows: ReactNode[][] = [];
  let week: ReactNode[] = [];

  allSlots.forEach((slot, i) => {
    if (i % 7 !== 0) {
      week.push(slot);
    } else {
      rows.push(week);
      week = [];
      week.push(slot);
    }
  });
  // Always push the last week
  rows.push(week);

  return (
    <Container className={className}>
      <ControlsContainer>
        <button onClick={() => setCurrentStartDate(addMonths(currentStartDate, -1))}>{'<'}</button>
        <div>
          <select
            value={months[getMonth(currentStartDate)]}
            onChange={e => setCurrentStartDate(setMonth(currentStartDate, months.indexOf(e.target.value)))}
          >
            {months.map(month => (
              <option value={month} key={month}>
                {month}
              </option>
            ))}
          </select>
          <select
            value={getYear(currentStartDate)}
            onChange={e => setCurrentStartDate(setYear(currentStartDate, +e.target.value))}
          >
            {years.map(year => (
              <option value={year} key={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <button onClick={() => setCurrentStartDate(addMonths(currentStartDate, 1))}>{'>'}</button>
      </ControlsContainer>
      <table>
        <thead>
          <tr>
            {weekdays.map(day => (
              <WeekdayHeaderCell key={day}>{day}</WeekdayHeaderCell>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((days, idx) => (
            <tr key={idx}>{days}</tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default Calendar;
