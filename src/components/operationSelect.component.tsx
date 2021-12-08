import { Box, MenuItem, Select } from '@material-ui/core';
import { SessionContext } from 'context/session.context';
import React from 'react'
import styled from 'styled-components';
import { Operation } from 'types/types';

const OperationSelect = () => {
  const session = React.useContext(SessionContext);

  const handleChangeOperationType = React.useCallback((e: React.ChangeEvent<{value: unknown}>) => {
    session?.setOperationType(e.target.value as Operation);
  }, [session]);

  if (!session) {
    return null;
  }

  return (
    <Box marginTop="25px">
      <StyledOperationSelect
        value={session.operationType}
        onChange={handleChangeOperationType}
      >
        <MenuItem value={Operation.ADD}>Add</MenuItem>
        <MenuItem value={Operation.MINUS}>Subtract</MenuItem>
        <MenuItem value={Operation.MULTIPLY}>Multiply</MenuItem>
        <MenuItem value={Operation.DIVIDE}>Divide</MenuItem>
      </StyledOperationSelect>
    </Box>
  )
}

const StyledOperationSelect = styled(Select)`
  width: 385px;
  background: #d1dcf9;
  outline: none;
  border-radius: 10px;
  font-size: 20px;
  padding: 10px;

  &::before {
    border: 0px;
  }

  &::after {
    border: 0px;
  }

  &.MuiInput-underline:before {
    border-bottom: 0px;
  }

  &.MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 0px;
  }

  &.MuiInput-underline:after {
    border-bottom: 0px;
  }

  .MuiSelect-root {
    padding-left: 10px;
    line-height: 24px;
  }

  .MuiSelect-select:focus {
    border-radius: 10px;
    background: #d1dcf9;
  }
`

export default OperationSelect;