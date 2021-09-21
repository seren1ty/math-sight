import { Box, MenuItem, Select } from "@material-ui/core";
import { SessionContext } from "context/session.context";
import React from "react";
import styled from "styled-components";
import { Operation } from "types/types";
import MathResults from "./mathResults.component";

const RightContainer = () => {

  const session = React.useContext(SessionContext);

  const [workingArea, setWorkingArea] = React.useState("");

  const handleChangeOperationType = React.useCallback((e: React.ChangeEvent<{value: unknown}>) => {
    session?.setOperationType(e.target.value as Operation);
  }, [session]);

  React.useEffect(() => {
    setWorkingArea("");
  }, [session?.showResults]);

  if (!session) {
    return null;
  }

  return (
    <Box>
      <Box marginTop="25px">
        <StyledOperationSelect
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={session.operationType}
          onChange={handleChangeOperationType}
        >
          <MenuItem value={Operation.ADD}>Add</MenuItem>
          <MenuItem value={Operation.MINUS}>Minus</MenuItem>
          <MenuItem value={Operation.MULTIPLY}>Multiply</MenuItem>
          <MenuItem value={Operation.DIVIDE}>Divide</MenuItem>
        </StyledOperationSelect>
      </Box>
      <StyledTextarea
        showresults={session.showResults}
        placeholder="Working area ..."
        value={workingArea}
        onChange={(e) => setWorkingArea(e.target.value)}
      />
      <MathResults />
    </Box>
  );
}

export default RightContainer;

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

  &.MuiInput-underline:hover:not(.Mui-disabled):before {
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

const StyledTextarea = styled.textarea<{showresults: boolean}>`
  resize: none;
  width: 385px;
  border-radius: 10px;
  font-size: 18px;
  margin-bottom: 0px;
  outline: none;
  transition: all 1s;
  height: ${props => props.showresults ? "0px" : "200px"};
  opacity: ${props => props.showresults ? "0" : "100"};
  border: ${props => props.showresults ? "0" : "3px solid #d1dcf9"};
  margin-top: ${props => props.showresults ? "0px" : "16px"};
  padding: ${props => props.showresults ? "0 15px" : "15px 15px"};
`
