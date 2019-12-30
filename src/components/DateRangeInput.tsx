import React from 'react';
import { ReactComponent as CalendarIconSVG } from '../icons/icon_calender.svg';
import { ReactComponent as SearchIconSVG } from '../icons/icon_search.svg';
import styled from 'styled-components';
import InputGroup from './InputGroup';
import theme from '../lib/theme';

const CalendarIcon = styled(CalendarIconSVG)`
  height: 1.2em;
  padding: 0 8px 0 16px;
  margin-top: -2px;
  .a {
    fill: ${theme.colors.gray.default};
  }
`;

const SearchIcon = styled(SearchIconSVG)`
  height: 1em;
  padding: 0 12px;
  .a {
    fill: ${theme.colors.gray.default};
  }
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
