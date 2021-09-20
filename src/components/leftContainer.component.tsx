import { Box, FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import MathQuestions from "components/mathQuestions.component";
import React from "react";
import styled from "styled-components";

const LeftContainer = () => {

  return (
    <Box>
      <StyledHeading>Mathsight</StyledHeading>
      <MathQuestions />
    </Box>
  );
}

export default LeftContainer;

const StyledHeading = styled.h1`
  margin: 20px 0;
  padding: 0 0 10px 115px;
  font-size: 40px;
  font-family: 'Righteous', cursive;
`