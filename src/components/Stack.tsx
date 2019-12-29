import styled, { css } from 'styled-components';
import { CSSProperties } from 'react';

const verticalSpacing = css<{ spacing?: number }>`
  margin-top: ${props => props.spacing ?? '0'}px;
`;

const horizontalSpacing = css<{ spacing?: number }>`
  margin-left: ${props => props.spacing ?? '0'}px;
`;

const Stack = styled.div<{
  direction?: CSSProperties['flexDirection'];
  spacing?: number;
  mainAxis?: CSSProperties['justifyContent'];
  crossAxis?: CSSProperties['alignItems'];
}>`
  display: flex;
  flex-direction: ${props => props.direction ?? 'initial'};
  justify-content: ${props => props.mainAxis ?? 'initial'};
  align-items: ${props => props.crossAxis ?? 'initial'};

  & > * + * {
    ${props => (!props.direction || props.direction === 'row' ? horizontalSpacing : verticalSpacing)}
  }
`;

export default Stack;
