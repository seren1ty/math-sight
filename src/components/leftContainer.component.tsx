import { Box, FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import MathQuestions from "components/mathQuestions.component";
import React from "react";
import styled from "styled-components";

const LeftContainer = () => {

  return (
    <Box>
      <Box ml={8} mb={4}>
        <h1>Mathsight</h1>
      </Box>
      <MathQuestions />
    </Box>
  );
}

export default LeftContainer;
