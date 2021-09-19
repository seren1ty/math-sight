import { Box, Button, FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import MathQuestions from "components/mathQuestions.component";
import { SessionContext } from "context/session.context";
import { MathQuestion } from "model/mathQuestion";
import React from "react";
import styled from "styled-components";
import { Operation } from "types/types";

const RightContainer = () => {

  const session = React.useContext(SessionContext);

  const increaseCurrentScore = React.useCallback((newScore: number) => {
    if (!session) {
      return;
    }

    const updatedCurrentScore = session.currentScore + newScore;

    session.setCurrentScore(updatedCurrentScore);
  }, [session]);

  const increaseHighScore = React.useCallback((newScore: number) => {
    if (!session) {
      return;
    }

    const updatedHighScore = session.currentScore + newScore;

    if (updatedHighScore <= session.highScore) {
      return;
    }

    session.setHighScore(updatedHighScore);
  }, [session]);

  const handleChangeOperationType = React.useCallback((e: React.ChangeEvent<{value: unknown}>) => {
    session?.setOperationType(e.target.value as Operation);
  }, [session]);

  const calculateCorrectAnswers = React.useCallback(() => {
    if (!session) {
      return 0;
    }

    const correctlyAnsweredQuestions = session.questions.filter((question) => session.checkAnswer(question));
    return correctlyAnsweredQuestions.length;
  }, [session]);

  const checkAnswers = React.useCallback(() => {
    if (!session) {
      return;
    }

    const correctlyAnsweredQuestions = calculateCorrectAnswers();

    if (correctlyAnsweredQuestions === session.questions.length) {
      increaseHighScore(session.questions.length);
      increaseCurrentScore(session.questions.length);
    } else {
      increaseHighScore(correctlyAnsweredQuestions);
      session.setCurrentScore(0);
    }

    session.setShowResults(true);
  }, [session, calculateCorrectAnswers, increaseHighScore, increaseCurrentScore]);

  if (!session) {
    return null;
  }

  return (
    <Box>
      <Box marginTop="20px">
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
      {
        !session.showResults &&
        <Box mt={2}>
          <StyledTextarea />
        </Box>
      }
      <Box flexDirection="column" mt={2}>
        <StyledCheckAnswers
          variant="contained"
          color="primary"
          onClick={() => checkAnswers()}
          disabled={session.showResults || session.answers.length < session.questions.length}
        >
          Check Answers
        </StyledCheckAnswers>
        <StyledNewQuestions
            variant="contained"
            color="primary"
            onClick={() => session.generateQuestions()}
            disabled={!session.showResults}
          >
            New Questions
        </StyledNewQuestions>
        {
          session.showResults &&
          <Box marginTop="60px" fontSize={40} fontWeight={600} textAlign="center">Correct: {calculateCorrectAnswers()}</Box>
        }
        <Box textAlign="center">
          <h1>Results</h1>
        </Box>
        <Box marginTop="20px" fontSize={40} fontWeight={600} textAlign="center">Current total: {session.currentScore}</Box>
        <Box marginTop="20px" fontSize={40} fontWeight={600} textAlign="center">High score: {session.highScore}</Box>
      </Box>
    </Box>
  );
}

export default RightContainer;

const StyledOperationSelect = styled(Select)`
  width: 350px;
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

  .MuiSelect-select:focus {
    border-radius: 10px;
    background: #d1dcf9;
}
`

const StyledTextarea = styled.textarea`
  width: 350px;
  height: 200px;
  border: 3px solid #d1dcf9;
  border-radius: 10px;
  font-size: 18px;
  padding: 15px;
  outline: none;
`

const StyledCheckAnswers = styled(Button)`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  margin-right: 20px;
  border-radius: 10px;
  text-transform: none;
`

const StyledNewQuestions = styled(Button)`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 10px;
  text-transform: none;
`