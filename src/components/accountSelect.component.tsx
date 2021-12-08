import { Box, MenuItem, Select } from '@material-ui/core';
import { SessionContext } from 'context/session.context';
import React from 'react'
import styled from 'styled-components';

const AccountSelect = () => {
  const session = React.useContext(SessionContext);

  const handleChangeAccount = React.useCallback((e: React.ChangeEvent<{value: unknown}>) => {
    session?.setAccountId(e.target.value as string);
  }, [session]);

  if (!session) {
    return null;
  }

  return (
    <Box marginTop="25px">
      <StyledAccountSelect value={session.accountId} onChange={handleChangeAccount}>
      {
        session.accounts.map((account) => (
          <MenuItem value={account.accountId}>{account.name}</MenuItem>
        ))
      }
      </StyledAccountSelect>
    </Box>
  )
}

const StyledAccountSelect = styled(Select)`
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

export default AccountSelect;