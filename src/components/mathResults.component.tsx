import { Box, Button } from "@material-ui/core";
import { SessionContext } from "context/session.context";
import React from "react";
import styled from "styled-components";

const MathResults = () => {

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
      <StyledResultContainer>
        <Box>
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
        </Box>
        {
          session.showResults &&
          <Box marginTop="60px" fontSize={40} fontWeight={600} textAlign="center">Correct: {calculateCorrectAnswers()}</Box>
        }
        <StyledResultsHeading>Results</StyledResultsHeading>
        <StyledCurrentScore>Current total: {session.currentScore}</StyledCurrentScore>
        <StyledHighScore>High score: {session.highScore}</StyledHighScore>
      </StyledResultContainer>
    </Box>
  );
}

export default MathResults;

const StyledResultContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  background: #eeeff2;
  margin-top: 16px;
  padding: 20px;
  border-radius: 10px;
`

const StyledCheckAnswers = styled(Button)`
  padding: 15px 25px;
  font-size: 16px;
  font-family: 'Red Hat Display';
  font-weight: 400;
  margin-right: 20px;
  border-radius: 10px;
  text-transform: none;
  background: #4c78e2
`

const StyledNewQuestions = styled(Button)`
  padding: 15px 25px;
  font-size: 16px;
  font-family: 'Red Hat Display';
  font-weight: 400;
  border-radius: 10px;
  text-transform: none;
  background: #4c78e2
`

const StyledResultsHeading = styled.h1`
  margin: 25px 0 10px;
  text-align: center;
  font-family: 'Righteous', cursive;
`

const StyledCurrentScore = styled(Box)`
  margin-top: 5px;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`

const StyledHighScore = styled(Box)`
  background: #d1dcf9;
  border-radius: 10px;
  margin-top: 20px;
  padding: 10px 0 15px 0;
  font-size: 26px;
  font-weight: 600;
  text-align: center;
`