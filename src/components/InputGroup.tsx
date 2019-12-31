import React, { ComponentProps, HTMLProps, ReactElement } from 'react';
import styled from 'styled-components';
import theme from "../lib/theme";

const FormGroup = styled.div`
  display: inline-flex;
  align-items: stretch;
  position: relative;
  border-radius: 8px;
  
  &:focus-within {
    box-shadow: 0 0 0 1px ${theme.colors.blue.default};
  }
`;

const LeftAddon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  padding: 8px 24px 8px 44px;
  font-size: 16px;
  color: ${theme.colors.gray.dark};
  border: 1px solid ${theme.colors.lightGray.dark};
  border-radius: 8px 0 0 8px;
  width: calc(18ch + 24px + 44px);
  
  &:focus {
    outline: none;
  }
`;

const RightAddon = styled.div`
  background-color: ${theme.colors.lightGray.light};
  border: 1px solid ${theme.colors.lightGray.default};
  border-radius: 0 8px 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -1px;
`;

const InputGroup: React.FC<{
  // TS doesn't understand all props when ComponentProps<typeof Input> is used alone here. Help it a bit by specifying
  // HTMLProps<HTMLInputElement> in the union.
  inputProps: HTMLProps<HTMLInputElement> & ComponentProps<typeof Input>;
  leftAddon: ReactElement;
  rightAddon: ReactElement;
}> = ({ inputProps, leftAddon, rightAddon }) => {
  return (
    <FormGroup>
      <LeftAddon>{leftAddon}</LeftAddon>
      <Input {...inputProps} />
      <RightAddon>{rightAddon}</RightAddon>
    </FormGroup>
  );
};

export default InputGroup;
