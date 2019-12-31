import React, { useEffect, useState } from 'react';
import 'styled-components/macro';
import Container from './components/Container';
import DateRangeInput from './components/DateRangeInput';
import logo from './images/logo.png';
import MailGrid from './components/MailGrid';
import styled from 'styled-components';
import MOCK_DATA from './mock-data';
import breakpoints from './lib/breakpoints';
import theme from './lib/theme';
import { addDays, startOfDay, endOfDay, isWithinInterval } from 'date-fns';

const ResultsText = styled.h1`
  margin: 16px 0 0;
  font-size: 16px;
  color: ${theme.colors.gray.default};
`;

const ResultsCounter = styled.span`
  font-size: 20px;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
`;

const App: React.FC = () => {
  const [intervalStartDate, setIntervalStartDate] = useState<Date | null>(addDays(startOfDay(new Date()), -1));
  const [intervalEndDate, setIntervalEndDate] = useState<Date | null>(addDays(endOfDay(new Date()), 1));

  const [filteredItems, setFilteredItems] = useState(MOCK_DATA);

  useEffect(() => {
    if (intervalStartDate != null && intervalEndDate != null) {
      setFilteredItems(
        MOCK_DATA.filter(item => isWithinInterval(item.timestamp, { start: intervalStartDate, end: intervalEndDate }))
      );
    }
  }, [intervalStartDate, intervalEndDate]);

  return (
    <Container>
      <section
        css={`
          padding: 16px 16px 8px;

          @media (min-width: ${breakpoints.mobile}) {
            padding: 0 0 8px;
          }
        `}
      >
        <DateRangeInput
          intervalStartDate={intervalStartDate}
          intervalEndDate={intervalEndDate}
          onIntervalStartChange={date => setIntervalStartDate(date)}
          onIntervalEndChange={date => setIntervalEndDate(date)}
        />

        <ResultsText>
          Results: <ResultsCounter>{filteredItems.length}</ResultsCounter> mail(s)
        </ResultsText>
      </section>

      {!filteredItems.length && (
        <LogoContainer>
          <img src={logo} alt="Logo" />
        </LogoContainer>
      )}

      <MailGrid items={filteredItems} />
    </Container>
  );
};

export default App;
