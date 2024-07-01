import { Box } from '@material-ui/core'
import LeftContainer from 'components/leftContainer.component'
import RightContainer from 'components/rightContainer.component'
import styled from 'styled-components'

const QuizPage = () => {
  return (
    <StyledQuizContainer>
      <LeftContainer />
      <RightContainer />
    </StyledQuizContainer>
  )
}

export default QuizPage

const StyledQuizContainer = styled(Box)`
  display: flex;

  @media (max-width: 920px) {
    flex-direction: column;
  }
`
