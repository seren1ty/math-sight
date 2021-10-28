import { Box } from '@material-ui/core';
import { SessionContext } from 'context/session.context';
import React from 'react';
import { User } from 'types/types';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

const UsersPage = () => {
  const history = useHistory();

  const session = React.useContext(SessionContext);

  const selectUser = React.useCallback((user: User) => {
    history.push("/" + user.userId);
  }, []);

  React.useEffect(() => {
    session?.initUser("a", 300, 12, 100);
  },
  []);

  if (!session) {
    return null;
  }

  return (
    <StyledContainer display="flex" flexDirection="column" flexWrap="wrap">
      <StyledHeading>Mathsight</StyledHeading>
      <StyledHeadingUsers>Users</StyledHeadingUsers>
      <StyledUsers>
        {
          session.users.map((user) => (
            <StyledUser key={user.userId} onClick={() => selectUser(user)}>
              <StyledName>{user.name}</StyledName>
              <StyledScores>
                <StyledCurrentScore>Current score: <StyledScore>{user.currentScore}</StyledScore></StyledCurrentScore>
                <StyledHighScore>High score: <StyledScore>{user.highScore}</StyledScore></StyledHighScore>
              </StyledScores>
            </StyledUser>
          ))
        }
      </StyledUsers>
    </StyledContainer>
  )
}

const StyledContainer = styled(Box)`
  width: 810px;
  margin: 0 50px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

const StyledHeading = styled.h1`
  margin-top: 20px;
  margin-left: 65px;
  font-family: 'Righteous', cursive;
  font-size: 40px;
`

const StyledHeadingUsers = styled.span`
  margin: 10px 0 30px;
  font-family: 'Red Hat Display', sans-serif;
  font-size: 24px;
`

const StyledUsers = styled(Box)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
`

const StyledUser = styled(Box)`
  width: 380px;
  height: 125px;
  padding: 5px 10px 5px 15px;
  background: #EEEFF2;
  border-radius: 10px;
  border: 3px solid #D1DCF9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    background: #e6e8f5;
    border: 3px solid #7D9DED;
  }
`

const StyledName = styled(Box)`
  margin: 0px 1px;
  text-align: left;
  font-size: 30px;
  font-weight: 600;
  color: #7D9DED;
`

const StyledScores = styled(Box)`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const StyledCurrentScore = styled(Box)`
  text-align: right;
  font-size: 18px;
`

const StyledHighScore = styled(Box)`
  text-align: right;
  font-size: 22px;
  font-weight: 700;
  color: #48DDA7;
`

const StyledScore = styled.span`
  display: inline-block;
  width: 45px;
  text-align: center;
`

export default UsersPage;