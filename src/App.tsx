import React from 'react';
import 'styled-components/macro';
import Container from './components/Container';
import DateRangeInput from './components/DateRangeInput';
import logo from './images/logo.png';
import MailGrid from './components/MailGrid';
import styled from 'styled-components';
import MOCK_DATA from './mock-data';
import breakpoints from './lib/breakpoints';
import theme from "./lib/theme";

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
        <DateRangeInput />

        <ResultsText>
          Results: <ResultsCounter>{MOCK_DATA.length}</ResultsCounter> mail(s)
        </ResultsText>
      </section>

      {!MOCK_DATA.length && (
        <LogoContainer>
          <img src={logo} alt="Logo" />
        </LogoContainer>
      )}

      {MOCK_DATA.length && <MailGrid items={MOCK_DATA} />}
    </Container>
  );
};

export default App;
