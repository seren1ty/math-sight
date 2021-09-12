import { Box, Button } from "@material-ui/core";
import { MathQuestion, Operation } from "model/mathQuestion";
import React from "react";
import styled from "styled-components";

type MathQuestionsProps = {
  numberRangeAM: number;
  numberRangeMD: number;
  operationType: Operation;
}

const MathQuestions = ({ numberRangeAM, numberRangeMD, operationType }: MathQuestionsProps) => {

  const [questions, setQuestions] = React.useState<MathQuestion[]>([]);
  const [answers, setAnswers] = React.useState<number[]>([]);
  const [showResults, setShowResults] = React.useState<boolean>(false);

  const handleChangeAnswer = React.useCallback((questionId, answer) => {
    const newAnswers = [...answers];

    if (newAnswers.length <= questionId)
      newAnswers.push(answer);
    else
      newAnswers[questionId] = answer;

    setAnswers(newAnswers);
  }, [answers]);

  const generateQuestions = React.useCallback(async () => {
    const newQuestions: MathQuestion[] = [];

    let range;

    if (operationType === Operation.ADD || operationType === Operation.MINUS) {
      range = numberRangeAM;
    } else {
      range = numberRangeMD;
    }

    let loopCount = 0;
    const maxLoops = 1000;

    for (let idx = 0; idx < 10; idx++) {
      loopCount++;

      let numA = Math.floor(Math.random() * range);
      let numB = Math.floor(Math.random() * range);

      if (loopCount >= maxLoops) {
        break;
      }

      if (operationType === Operation.DIVIDE) {
        while (numA % numB !== 0) {
          loopCount++;
          numB = Math.floor(Math.random() * range);

          if (loopCount >= maxLoops) {
            break;
          }
        }
      }

      if (operationType === Operation.MULTIPLY || operationType === Operation.DIVIDE) {
        if (numA === 0 || numB === 0) {
          idx = idx - 1;
          continue;
        }
      }

      if (operationType === Operation.MINUS || operationType === Operation.DIVIDE) {
        if (numA < numB) {
          idx = idx - 1;
          continue;
        }
      }

      const question = new MathQuestion(idx, numA, numB, operationType);
      newQuestions.push(question);
    }

    setQuestions(newQuestions);
  }, [numberRangeAM, numberRangeMD, operationType]);

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
    return questionId === 0 || questionId < answers.length + 1;
  }, [answers]);

  const checkAnswer = React.useCallback((question: MathQuestion) => {
    return Number(answers[question.id]) === Number(question.getResult());
  }, [answers]);

  const calculateCorrectAnswers = React.useCallback(() => {
    if (!showResults) {
      return;
    }

    const correctlyAnsweredQuestions = questions.filter((question) => Number(question.getResult()) === Number(answers[question.id]));

    return correctlyAnsweredQuestions.length;
  }, [showResults, questions, answers]);

  React.useEffect(() => {
    generateQuestions();
  }, [operationType]);

  return (
    <Box display="flex" marginX={5} marginY={2}>
      <Box flexDirection="column">
      {
        questions.map((question) => (
          <Box key={question.id} display="flex" m={2} fontSize={26} fontWeight={700}>
            <Box display="flex" flexGrow={1} justifyContent="center" textAlign="center">
              <Box pr={1} width="80px">{question.numberOne}</Box>
              <Box pr={1} flexGrow={1}>{getOperationIcon(question.operation)}</Box>
              <Box pr={4} width="80px">{question.numberTwo}</Box>
            </Box>
            <StyledAnswerInput
              type="number"
              value={answers[question.id]}
              onChange={(e) => handleChangeAnswer(question.id, e.target.value)}
              disabled={!isAnswerEnabled(question.id)}
            />
            {
              showResults &&
              <StyledResult
                width="100px"
                pl={3}
                lineHeight="30px"
                correct={checkAnswer(question)}
              >
                {question.getResult()}
              </StyledResult>
            }
          </Box>
        ))
      }
      </Box>
      <Box flexDirection="column" margin="100px 0 0 100px">
        <StyledCheckAnswers
          variant="contained"
          color="primary"
          onClick={() => setShowResults(true)}
          disabled={answers.length < questions.length}
        >
          Check Answers
        </StyledCheckAnswers>
        {
          showResults &&
          <Box marginTop="60px" fontSize={40} fontWeight={600} textAlign="center">Correct: {calculateCorrectAnswers()}</Box>
        }
      </Box>
    </Box>
  );
};

export default MathQuestions;

const StyledAnswerInput = styled.input`
  width: 80px;
  font-size: 20px;
`

const StyledResult = styled(Box)<{correct: boolean}>`
  color: ${props => props.correct ? "green" : "red"};
`

const StyledCheckAnswers = styled(Button)`
  padding: 10px 20px;
  font-size: 18px;
  font-weight: 600;
`