import React, { ComponentProps, HTMLProps, ReactElement } from 'react';
import styled from 'styled-components';

const FormGroup = styled.div`
  display: flex;
  align-items: stretch;
  position: relative;
`;

const LeftAddon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 44px;
  display: flex;
  padding-left: 16px;
  padding-right: 8px;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  padding: 8px 24px 8px 44px;
  font-size: 16px;
  border: 1px solid #d0d0d0;
  border-radius: 8px 0 0 8px;
`;

const RightAddon = styled.div`
  background-color: #f5f5f5;
  border: 1px solid #dedede;
  border-radius: 0 8px 8px 0;
  padding: 0 12px;
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
