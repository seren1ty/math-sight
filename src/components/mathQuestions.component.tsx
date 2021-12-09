import { Box } from "@material-ui/core";
import { SessionContext } from "context/session.context";
import React from "react";
import styled from "styled-components";
import { Operation } from "types/types";

const MathQuestions = () => {

  const session = React.useContext(SessionContext);

  const handleChangeAnswer = React.useCallback((questionId, answer) => {
    if (!session) {
      return;
    }

    const newAnswers = [...session.answers];

    if (newAnswers.length <= questionId)
      newAnswers.push(answer);
    else
      newAnswers[questionId] = answer;

    session.setAnswers(newAnswers);
  }, [session]);

  const getOperationIcon = React.useCallback((operation: Operation) => {
    switch(operation) {
      case Operation.MINUS:
        return "-";
      case Operation.MULTIPLY:
        return "x";
      case Operation.DIVIDE:
        return "/";
      default:
        return "+";
    }
  }, []);

  const isAnswerEnabled = React.useCallback((questionId: number) => {
    if (!session) {
      return false;
    }

    return questionId === 0 || questionId < session?.answers.length + 1;
  }, [session]);

  const readAnswer = React.useCallback((questionId: number) => {
    const answer = session?.answers[questionId];
    return answer || "";
  }, [session]);

  if (!session) {
    return null;
  }

  return (
    <MathQuestionsContainer>
      <Box flexDirection="column">
      {
        session.questions.map((question) => (
          <Box key={question.id} display="flex" m={1.5} fontSize={26} fontWeight={700}>
            <StyledQuestion>
              <Box pr={1} width="80px">{question.numberOne}</Box>
              <Box pr={1} flexGrow={1}>{getOperationIcon(question.operation)}</Box>
              <Box width="80px">{question.numberTwo}</Box>
            </StyledQuestion>
            <StyledAnswerInput
              data-testid={`AnswerInput-${question.id}`}
              type="number"
              value={readAnswer(question.id)}
              onChange={(e) => handleChangeAnswer(question.id, e.target.value)}
              disabled={!isAnswerEnabled(question.id)}
            />
            <StyledResult
              width="100px"
              lineHeight="30px"
              correct={session.showResults && session.checkAnswer(question)}
            >
            {
              !session.showResults && isAnswerEnabled(question.id) &&
              <StyledQuestionMark>?</StyledQuestionMark>
            }
            {
              session.showResults &&
              <StyledAnswer>{question.getResult()}</StyledAnswer>
            }
            </StyledResult>
          </Box>
        ))
      }
      </Box>

    </MathQuestionsContainer>
  );
};

export default MathQuestions;

const MathQuestionsContainer = styled(Box)`
  margin: 0 40px;

  @media (max-width: 920px) {
    margin: 0 10px;
  }
`

const StyledQuestion = styled(Box)`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  text-align: center;
  margin-right: 28px;
  background: #d1dcf9;
  border-radius: 10px;
  font-size: 20px;
  line-height: 40px;

  @media (max-width: 920px) {
    margin-right: 20px;
  }
`

const StyledAnswerInput = styled.input`
  width: 105px;
  font-size: 20px;
  border: 2px solid black;
  border-radius: 10px;
  outline: none;
  padding: 6px;

  &:disabled {
    border: 2px solid #cacaca;
    background: #e0e0e0;
  }
`

const StyledResult = styled(Box)<{correct: boolean}>`
  margin-left: 24px;
  color: ${props => props.correct ? "#48dda7" : "red"};
  line-height: 38px;

  @media (max-width: 920px) {
    margin-left: 20px;
  }
`

const StyledQuestionMark = styled(Box)`
  width: 100px;
  height: 40px;
  background: #e0e0e030;
  border-radius: 10px;
  margin-top: 0px;
  margin-left: 0px;
  color: #80808020;
  font-weight: 600;
  text-align: center;
  line-height: 40px;

  @media (max-width: 920px) {
    width: 45px;
  }
`

const StyledAnswer = styled(Box)`
  width: 90px;
  text-align: center;
  font-size: 24px;

  @media (max-width: 920px) {
    width: 45px;
  }
`