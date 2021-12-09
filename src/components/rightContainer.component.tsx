import { Box } from "@material-ui/core";
import { SessionContext } from "context/session.context";
import React from "react";
import styled from "styled-components";
import MathResults from "components/mathResults.component";
import OperationSelect from "components/operationSelect.component";

const RightContainer = () => {

  const session = React.useContext(SessionContext);

  const [workingArea, setWorkingArea] = React.useState("");

  React.useEffect(() => {
    setWorkingArea("");
  }, [session?.showResults]);

  if (!session) {
    return null;
  }

  return (
    <StyledRightContainer>
      <StyledOptionsContainer>
        <OperationSelect />
      </StyledOptionsContainer>
      <StyledTextarea
        showresults={session.showResults}
        placeholder="Working area ..."
        value={workingArea}
        onChange={(e) => setWorkingArea(e.target.value)}
      />
      <MathResults />
    </StyledRightContainer>
  );
}

export default RightContainer;

const StyledRightContainer = styled(Box)`
  margin-top: 10px;

  @media (max-width: 920px) {
    margin-top: 0;
    margin-left: 10px;
  }
`

const StyledOptionsContainer = styled(Box)`
  @media (max-width: 920px) {
    display: none;
  }
`

const StyledTextarea = styled.textarea<{showresults: boolean}>`
  resize: none;
  width: 385px;
  border-radius: 10px;
  font-size: 18px;
  margin-bottom: 0px;
  outline: none;
  transition: height 1s, opacity 1s, border 1s, margin-top 1s, padding 1s;
  height: ${props => props.showresults ? "0px" : "200px"};
  opacity: ${props => props.showresults ? "0" : "100"};
  border: ${props => props.showresults ? "0" : "3px solid #d1dcf9"};
  margin-top: ${props => props.showresults ? "0px" : "16px"};
  padding: ${props => props.showresults ? "0 15px" : "15px 15px"};

  @media (max-width: 920px) {
    margin-left: 10px;
    width: 375px;
  }
`
