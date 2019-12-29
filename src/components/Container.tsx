import React from 'react';
import styled from 'styled-components';
import breakpoints from '../lib/breakpoints';

const Container = styled.div`
  width: 100%;

  @media (min-width: ${breakpoints.mobile}) {
    padding: 24px 48px;
  }
`;

export default Container;
