import { Box } from "@material-ui/core";
import MathQuestions from "components/mathQuestions.component";
import styled from "styled-components";
import OperationSelect from "./operationSelect.component";

const LeftContainer = () => {

  return (
    <Box>
      <Box display="flex" alignItems="center">
        <StyledHeading>Mathsight</StyledHeading>
        <StyledOptionsContainer>
          <OperationSelect />
        </StyledOptionsContainer>
      </Box>
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

  @media (max-width: 920px) {
    margin: 20px 0 0 70px;
    padding: 0 0 10px 0px;
    font-size: 28px;
  }
`

const StyledOptionsContainer = styled(Box)`
  .MuiInput-root {
    max-width: 175px;
    margin-left: 52px;
    margin-bottom: 15px;
  }

  @media (min-width: 920px) {
    display: none;
  }
`