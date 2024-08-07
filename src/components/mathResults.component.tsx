import { Box } from '@material-ui/core'
import { SessionContext } from 'context/session.context'
import React from 'react'
import styled from 'styled-components'

const MathResults = () => {
  const session = React.useContext(SessionContext)

  const increaseCurrentScore = React.useCallback(
    (newScore: number) => {
      if (!session) {
        return
      }

      const updatedCurrentScore = session.currentScore + newScore

      session.setCurrentScore(updatedCurrentScore)
    },
    [session]
  )

  const increaseHighScore = React.useCallback(
    (newScore: number) => {
      if (!session) {
        return
      }

      const updatedHighScore = session.currentScore + newScore

      if (updatedHighScore <= session.highScore) {
        return
      }

      session.setHighScore(updatedHighScore)
    },
    [session]
  )

  const calculateCorrectAnswers = React.useCallback(() => {
    if (!session) {
      return 0
    }

    const correctlyAnsweredQuestions = session.questions.filter(question =>
      session.checkAnswer(question)
    )
    return correctlyAnsweredQuestions.length
  }, [session])

  const checkAnswers = React.useCallback(() => {
    if (!session) {
      return
    }

    const correctlyAnsweredQuestions = calculateCorrectAnswers()

    if (correctlyAnsweredQuestions === session.questions.length) {
      increaseHighScore(session.questions.length)
      increaseCurrentScore(session.questions.length)
    } else {
      increaseHighScore(correctlyAnsweredQuestions)
      session.setCurrentScore(0)
    }

    session.setShowResults(true)
  }, [
    session,
    calculateCorrectAnswers,
    increaseHighScore,
    increaseCurrentScore,
  ])

  if (!session) {
    return null
  }

  return (
    <StyledResultContainer showresults={session.showResults}>
      <StyledButtonContainer>
        <StyledButton
          onClick={() => checkAnswers()}
          isDisabled={
            session.showResults ||
            session.answers.length < session.questions.length
          }
        >
          Check Answers
        </StyledButton>
        <StyledButton
          onClick={() => session.generateQuestions()}
          isDisabled={!session.showResults}
        >
          New Questions
        </StyledButton>
      </StyledButtonContainer>
      <StyledResultsHeading>Results</StyledResultsHeading>
      <Box position="relative">
        <StyledNewResult showresults={session.showResults}>
          {calculateCorrectAnswers()}
        </StyledNewResult>
        <StyledOutOfTen showresults={session.showResults}>
          out of 10
        </StyledOutOfTen>
      </Box>
      <StyledCurrentScore>
        Current total: {session.currentScore}
      </StyledCurrentScore>
      <StyledHighScore>High score: {session.highScore}</StyledHighScore>
    </StyledResultContainer>
  )
}

export default MathResults

const StyledResultContainer = styled(Box)<{ showresults: boolean }>`
  display: flex;
  flex-direction: column;
  background: #eeeff2;
  padding: 20px;
  border-radius: 10px;
  transition: height 1s, margin-top 1s;
  height: ${props => (props.showresults ? '505px' : '292px')};
  margin-top: ${props => (props.showresults ? '0px' : '13px')};

  @media (max-width: 920px) {
    margin-left: 10px;
    width: 375px;
  }
`

const StyledButtonContainer = styled(Box)`
  display: flex;
  gap: 21px;
`

const StyledButton = styled(Box)<{ isDisabled: boolean }>`
  width: 162px;
  height: 58px;
  padding: 15px 25px;
  line-height: 28px;
  font-size: 16px;
  font-family: 'Red Hat Display';
  font-weight: 400;
  border-radius: 10px;
  text-transform: none;
  background: ${props => (props.isDisabled ? '#0000001f' : '#4c78e2')};
  color: ${props => (props.isDisabled ? '#00000042' : '#ffffff')};
  cursor: pointer;
  transition: background 0.5s ease;

  ${props =>
    !props.isDisabled &&
    `
    box-shadow: 0 1px 3px 0 #888888;

    &:hover {
      background: #303f9f;
    }
  `}

  ${props =>
    props.isDisabled &&
    `
    pointer-events: none;
  `}

  @media (max-width: 920px) {
    padding: 15px 22px;
  }
`

const StyledResultsHeading = styled.h1`
  margin: 25px 0 10px;
  text-align: center;
  font-family: 'Righteous', cursive;
`

const StyledNewResult = styled(Box)<{ showresults: boolean }>`
  margin-top: 3px;
  font-family: 'Questrial', sans-serif;
  text-align: center;
  color: #48dda7;
  transition: height 1s, font-size 1s, opacity 1s;
  font-size: ${props => (props.showresults ? '190px' : '0px')};
  height: ${props => (props.showresults ? '213px' : '0px')};
  opacity: ${props => (props.showresults ? '100' : '0')};
`

const StyledOutOfTen = styled(Box)<{ showresults: boolean }>`
  position: absolute;
  right: 8px;
  bottom: 50px;
  font-size: 20px;
  opacity: ${props => (props.showresults ? '100' : '0')};
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
