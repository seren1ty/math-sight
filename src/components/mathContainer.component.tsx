import { Box, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import MathQuestions from 'components/mathQuestions.component'
import { Operation } from 'model/mathQuestion';
import React from 'react'

type MathContainerProps = {
    numberRange: number;
}

const MathContainer = ({ numberRange }: MathContainerProps) => {
  const [operationType, setOperationType] = React.useState(Operation.ADD);

  const handleChange = React.useCallback((e: React.ChangeEvent<{value: unknown}>) => {
    setOperationType(e.target.value as Operation);
  }, []);

  return (
    <Box>
      <Box>
        <FormControl variant="filled">
          <InputLabel id="demo-simple-select-filled-label">Operation</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={operationType}
            onChange={handleChange}
          >
            <MenuItem value={Operation.ADD}>Add</MenuItem>
            <MenuItem value={Operation.MINUS}>Minus</MenuItem>
            <MenuItem value={Operation.MULTIPLY}>Multiply</MenuItem>
            <MenuItem value={Operation.DIVIDE}>Divide</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <MathQuestions numberRange={numberRange} operationType={operationType} />
    </Box>
  );
}

export default MathContainer;