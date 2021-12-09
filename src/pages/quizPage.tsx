import { Box } from '@material-ui/core';
import LeftContainer from 'components/leftContainer.component';
import RightContainer from 'components/rightContainer.component';

const QuizPage = () => {
  return (
    <Box display="flex" flexWrap="wrap">
      <LeftContainer />
      <RightContainer />
    </Box>
  )
}

export default QuizPage;