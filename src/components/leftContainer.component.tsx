import { Box } from "@material-ui/core";
import MathQuestions from "components/mathQuestions.component";
import styled from "styled-components";
import OperationSelect from "components/operationSelect.component";
import React from "react";
import { useHistory } from "react-router-dom";
import arrow from "assets/left-arrow.png";

const LeftContainer = () => {
  const history = useHistory();

  const handleClickHeading = React.useCallback(() => history.push("/"), [history]);

  return (
    <StyledLeftContainer>
      <Box display="flex" alignItems="center">
        <StyledHeadingLine onClick={() => handleClickHeading()}>
          <StyledArrow src={arrow} />
          <StyledHeading>Mathsight</StyledHeading>
        </StyledHeadingLine>
        <StyledOptionsContainer>
          <OperationSelect />
        </StyledOptionsContainer>
      </Box>
      <MathQuestions />
    </StyledLeftContainer>
  );
}

export default LeftContainer;

const StyledLeftContainer = styled(Box)`
  @media (max-width: 920px) {
    width: 410px
  }
`

const StyledHeadingLine = styled.h1`
  height: 40px;
  margin-top: 24px;
  padding-left: 50px;
  display: flex;
  align-items: center;
  gap: 37px;
  cursor: pointer;

  @media (max-width: 920px) {
    margin: 20px 0 0 25px;
    gap: 10px;
    padding-left: 0;
  }
`

const StyledArrow = styled.img`
  height: 28px;
  margin-top: 3px;

  @media (max-width: 920px) {
    height: 24px;
    margin-top: 0px;
    margin-bottom: 8px;
  }
`

const StyledHeading = styled.h1`
  font-size: 40px;
  font-family: 'Righteous', cursive;

  @media (max-width: 920px) {
    padding-bottom: 10px;
    font-size: 28px;
  }
`

const StyledOptionsContainer = styled(Box)`
  .MuiInput-root {
    max-width: 175px;
    margin-left: 52px;
    margin-bottom: 15px;

    @media (max-width: 920px) {
      max-width: 170px;
      margin-left: 27px;
    }
  }

  @media (min-width: 921px) {
    display: none;
  }
`