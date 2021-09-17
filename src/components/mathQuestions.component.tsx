import { Box, Button } from "@material-ui/core";
import { MathQuestion, Operation } from "model/mathQuestion";
import React from "react";
import styled from "styled-components";

type MathQuestionsProps = {
  userId: string;
  numberRangeAM: number;
  numberRangeM: number;
  numberRangeD: number;
  operationType: Operation;
}

const MathQuestions = ({ userId, numberRangeAM, numberRangeM, numberRangeD, operationType }: MathQuestionsProps) => {

  const readCurrentScore = React.useCallback(() => {
    const rawCurrentScore = localStorage.getItem("mathSight-currentScore-" + userId);

    return !!rawCurrentScore ? Number(JSON.parse(rawCurrentScore)) : 0;
  }, [userId]);

  const increaseCurrentScore = React.useCallback((newScore: number) => {
    const updatedCurrentScore = readCurrentScore() + newScore;

    localStorage.setItem("mathSight-currentScore-" + userId, JSON.stringify(updatedCurrentScore));

    setCurrentScore(updatedCurrentScore);
  }, [userId, readCurrentScore]);

  const resetCurrentScore = React.useCallback(() => {
    localStorage.setItem("mathSight-currentScore-" + userId, JSON.stringify(0));

    setCurrentScore(0);
  }, [userId]);

  const readHighScore = React.useCallback(() => {
    const rawHighScore = localStorage.getItem("mathSight-highScore-" + userId);

    return !!rawHighScore ? JSON.parse(rawHighScore) : 0;
  }, [userId]);

  const increaseHighScore = React.useCallback((newScore: number) => {
    const savedHighScore = readHighScore();

    const updatedHighScore = readCurrentScore() + newScore;

    if (updatedHighScore <= savedHighScore) {
      return;
    }

    localStorage.setItem("mathSight-highScore-" + userId, JSON.stringify(updatedHighScore));

    setHighScore(updatedHighScore);
  }, [userId, readCurrentScore, readHighScore]);

  const [questions, setQuestions] = React.useState<MathQuestion[]>([]);
  const [answers, setAnswers] = React.useState<number[]>([]);
  const [showResults, setShowResults] = React.useState<boolean>(false);
  const [highScore, setHighScore] = React.useState<number>(readHighScore());
  const [currentScore, setCurrentScore] = React.useState<number>(readCurrentScore());

  const handleChangeAnswer = React.useCallback((questionId, answer) => {
    const newAnswers = [...answers];

    if (newAnswers.length <= questionId)
      newAnswers.push(answer);
    else
      newAnswers[questionId] = answer;

    setAnswers(newAnswers);
  }, [answers]);

  const resetFields = React.useCallback(() => {
    setQuestions([]);
    setAnswers([]);
    setShowResults(false);
    setHighScore(readHighScore());
    setCurrentScore(readCurrentScore());
  }, [setQuestions, setAnswers, setShowResults, setHighScore, readHighScore, setCurrentScore, readCurrentScore]);

  const generateQuestions = React.useCallback(() => {
    resetFields();

    const newQuestions: MathQuestion[] = [];

    let range;

    if (operationType === Operation.ADD || operationType === Operation.MINUS) {
      range = numberRangeAM;
    } else if (operationType === Operation.MULTIPLY) {
      range = numberRangeM;
    } else {
      range = numberRangeD;
    }

    let loopCount = 0;
    const maxLoops = 100000;

    for (let idx = 0; idx < 10; idx++) {
      loopCount++;

      let numA = Math.floor(Math.random() * range);
      let numB = Math.floor(Math.random() * range);

      if (loopCount >= maxLoops) {
        break;
      }

      if (operationType === Operation.DIVIDE) {
        if (numA === 1 || numB === 1) {
          idx = idx - 1;
          continue;
        }

        while (numA === numB || numA % numB !== 0) {
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
  }, [numberRangeAM, numberRangeM, numberRangeD, operationType, resetFields]);

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

  const readAnswer = React.useCallback((questionId: number) => {
    const answer = answers[questionId];
    return answer || "";
  }, [answers]);

  const checkAnswer = React.useCallback((question: MathQuestion) => {
    return Number(answers[question.id]) === Number(question.getResult());
  }, [answers]);

  const calculateCorrectAnswers = React.useCallback(() => {
    const correctlyAnsweredQuestions = questions.filter((question) => checkAnswer(question));
    return correctlyAnsweredQuestions.length;
  }, [questions, checkAnswer]);

  const checkAnswers = React.useCallback(() => {
    const correctlyAnsweredQuestions = calculateCorrectAnswers();

    if (correctlyAnsweredQuestions === questions.length) {
      increaseHighScore(questions.length);
      increaseCurrentScore(questions.length);
    } else {
      increaseHighScore(correctlyAnsweredQuestions);
      resetCurrentScore();
    }

    setShowResults(true);
  }, [questions, calculateCorrectAnswers, increaseHighScore, increaseCurrentScore, resetCurrentScore]);

  React.useEffect(() => {
    generateQuestions();
  }, [operationType, generateQuestions]);

  return (
    <Box display="flex" marginX={5}>
      <Box flexDirection="column">
      {
        questions.map((question) => (
          <Box key={question.id} display="flex" m={1.5} fontSize={26} fontWeight={700}>
            <StyledQuestion>
              <Box pr={1} width="80px">{question.numberOne}</Box>
              <Box pr={1} flexGrow={1}>{getOperationIcon(question.operation)}</Box>
              <Box width="80px">{question.numberTwo}</Box>
            </StyledQuestion>
            <StyledAnswerInput
              type="number"
              value={readAnswer(question.id)}
              onChange={(e) => handleChangeAnswer(question.id, e.target.value)}
              disabled={!isAnswerEnabled(question.id)}
            />
            <StyledResult
              width="100px"
              pl={3}
              lineHeight="30px"
              correct={checkAnswer(question)}
            >
            {
              showResults &&
              <Box>{question.getResult()}</Box>
            }
            </StyledResult>
          </Box>
        ))
      }
      </Box>
      <Box flexDirection="column" margin="80px 0 0 50px">
        <StyledCheckAnswers
          variant="contained"
          color="primary"
          onClick={() => checkAnswers()}
          disabled={showResults || answers.length < questions.length}
        >
          Check Answers
        </StyledCheckAnswers>
        <StyledNewQuestions
            variant="contained"
            onClick={() => generateQuestions()}
            disabled={!showResults}
          >
            New Questions
        </StyledNewQuestions>
        {
          showResults &&
          <Box marginTop="60px" fontSize={40} fontWeight={600} textAlign="center">Correct: {calculateCorrectAnswers()}</Box>
        }
        <Box marginTop="60px" fontSize={40} fontWeight={600} textAlign="center">Current total: {currentScore}</Box>
        <Box marginTop="60px" fontSize={40} fontWeight={600} textAlign="center">High score: {highScore}</Box>
      </Box>
    </Box>
  );
};

export default MathQuestions;

const StyledQuestion = styled(Box)`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  text-align: center;
  margin-right: 32px;
  background: #d1dcf9;
  border-radius: 25px;
  font-size: 20px;
  line-height: 35px;
`

const StyledAnswerInput = styled.input`
  width: 80px;
  font-size: 20px;
  border: 2px solid black;
  border-radius: 25px;
  outline: none;
  padding: 5px;
`

const StyledResult = styled(Box)<{correct: boolean}>`
  color: ${props => props.correct ? "green" : "red"};
`

const StyledCheckAnswers = styled(Button)`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  margin-right: 20px;
  border-radius: 25px;
  text-transform: none;
`

const StyledNewQuestions = styled(Button)`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 25px;
  text-transform: none;
`
