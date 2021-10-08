import { Box } from '@material-ui/core';
import LeftContainer from 'components/leftContainer.component';
import RightContainer from 'components/rightContainer.component';
import { SessionContext } from 'context/session.context';
import React from 'react';
import styled, { css } from 'styled-components';

const QuizPageA = () => {
  const session = React.useContext(SessionContext);

  React.useEffect(() => {
    session?.initUser("a", 1000, 12, 100);
  },
  []);

  return (
    <Box display="flex" flexWrap="wrap">
      <LeftContainer />
      <RightContainer />
    </Box>
  )
}

export default QuizPageA;