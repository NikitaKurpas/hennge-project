import React, { useState } from 'react';
import 'styled-components/macro';
import styled from 'styled-components';
import { ReactComponent as CalendarIconSVG } from '../icons/icon_calender.svg';
import { ReactComponent as SearchIconSVG } from '../icons/icon_search.svg';
import InputGroup from './InputGroup';
import theme from '../lib/theme';
import CalendarBase from './Calendar';
import { lightFormat, startOfDay, endOfDay } from 'date-fns';

const CalendarIcon = styled(CalendarIconSVG)`
  height: 1.2em;
  padding: 0 8px 0 16px;
  margin-top: -2px;
  cursor: pointer;
  user-select: none;

  .a {
    fill: ${theme.colors.gray.default};
  }

  &:hover {
    .a {
      fill: ${theme.colors.blue.default};
    }
  }
`;

const SearchIcon = styled(SearchIconSVG)`
  height: 1em;
  padding: 0 12px;
  .a {
    fill: ${theme.colors.gray.default};
  }
`;

const Calendar = styled(CalendarBase)`
  position: absolute;
  margin-top: 8px;
  top: 100%;
  left: 0;
  z-index: 100;
`;

const DropdownContainer = styled.div`
  display: inline-block;
  position: relative;
`;

type IntervalChangeHandler = (date: Date | null) => void;

const DateRangeInput: React.FC<{
  intervalStartDate?: Date | null;
  intervalEndDate?: Date | null;
  onIntervalStartChange?: IntervalChangeHandler;
  onIntervalEndChange?: IntervalChangeHandler;
}> = ({ intervalStartDate, intervalEndDate, onIntervalStartChange, onIntervalEndChange }) => {
  const [isCalendarShown, setCalendarShown] = useState(false);
  return (
    <DropdownContainer>
      <InputGroup
        leftAddon={<CalendarIcon onClick={() => setCalendarShown(!isCalendarShown)} />}
        rightAddon={<SearchIcon />}
        inputProps={{
          type: 'text',
          onFocus: () => setCalendarShown(true),
          value:
            intervalStartDate && intervalEndDate
              ? `${lightFormat(intervalStartDate, 'yyyy/M/d')} - ${lightFormat(intervalEndDate, 'yyyy/M/d')}`
              : intervalStartDate
              ? `${lightFormat(intervalStartDate, 'yyyy/M/d')} - `
              : ''
        }}
      />
      {isCalendarShown && (
        <Calendar
          intervalStartDate={intervalStartDate ? startOfDay(intervalStartDate) : null}
          intervalEndDate={intervalEndDate ? endOfDay(intervalEndDate) : null}
          onIntervalStartChange={onIntervalStartChange}
          onIntervalEndChange={date => {
            onIntervalEndChange?.(date);
            date != null && setCalendarShown(false);
          }}
        />
      )}
    </DropdownContainer>
  );
};

export default DateRangeInput;
