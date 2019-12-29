import React from 'react';
import { ReactComponent as CalendarIconSVG } from '../icons/icon_calender.svg';
import { ReactComponent as SearchIconSVG } from '../icons/icon_search.svg';
import styled from 'styled-components';
import InputGroup from './InputGroup';

const CalendarIcon = styled(CalendarIconSVG)`
  width: 20px;
  height: 20px;
`;

const SearchIcon = styled(SearchIconSVG)`
  width: 1em;
  height: 1em;
`;

const DateRangeInput: React.FC = () => {
  return (
    <InputGroup
      leftAddon={<CalendarIcon />}
      rightAddon={<SearchIcon />}
      inputProps={{ type: 'text', value: '2019/12/31 - 2020/1/3' }}
    />
  );
};

export default DateRangeInput;
