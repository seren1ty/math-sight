import { Box } from '@material-ui/core';
import LeftContainer from 'components/leftContainer.component';
import RightContainer from 'components/rightContainer.component';
import { SessionContext } from 'context/session.context';
import React from 'react';

const QuizPageS = () => {
  const session = React.useContext(SessionContext);

  React.useEffect(() => {
    session?.initUser("s", 20, 7, 16);
  },
  []);

  return (
    <Box display="flex" flexWrap="wrap">
      <LeftContainer />
      <RightContainer />
    </Box>
  )
}

export default QuizPageS;