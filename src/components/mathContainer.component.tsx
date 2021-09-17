import { Box, FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import MathQuestions from "components/mathQuestions.component";
import { Operation } from "model/mathQuestion";
import React from "react";
import styled from "styled-components";

type MathContainerProps = {
  userId: string;
  numberRangeAM: number;
  numberRangeM: number;
  numberRangeD: number;
}

const MathContainer = ({ userId, numberRangeAM, numberRangeM, numberRangeD }: MathContainerProps) => {

  const handleChange = React.useCallback((e: React.ChangeEvent<{value: unknown}>) => {
    localStorage.setItem("mathSight-operationType-" + userId, JSON.stringify(e.target.value));

    setOperationType(e.target.value as Operation);
  }, []);

  const readCurrentScore = React.useCallback(() => {
    const rawOperationType = localStorage.getItem("mathSight-operationType-" + userId);

    return !!rawOperationType ? JSON.parse(rawOperationType) as Operation : Operation.ADD;
  }, [userId]);

  const [operationType, setOperationType] = React.useState(readCurrentScore());

  return (
    <Box>
      <Box marginX={8}>
        <Box display="flex">
          <Box pr="50px">
            <h2>Mathsight</h2>
          </Box>
          <Box marginTop="10px">
            <FormControl variant="filled">
              <InputLabel id="demo-simple-select-filled-label">Operation</InputLabel>
              <StyledOperationSelect
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={operationType}
                onChange={handleChange}
              >
                <MenuItem value={Operation.ADD}>Add</MenuItem>
                <MenuItem value={Operation.MINUS}>Minus</MenuItem>
                <MenuItem value={Operation.MULTIPLY}>Multiply</MenuItem>
                <MenuItem value={Operation.DIVIDE}>Divide</MenuItem>
              </StyledOperationSelect>
            </FormControl>
          </Box>
        </Box>
      </Box>
      <MathQuestions
        userId={userId}
        numberRangeAM={numberRangeAM}
        numberRangeM={numberRangeM}
        numberRangeD={numberRangeD}
        operationType={operationType}
      />
    </Box>
  );
}

export default MathContainer;

const StyledOperationSelect = styled(Select)`
  width: 140px;
`