import { Box } from '@material-ui/core';
import { SessionContext } from 'context/session.context';
import React from 'react';
import { Operation, User } from 'types/types';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
//import AccountSelect from 'components/accountSelect.component';

const DEFAULT_USERS: User[] = [
  {
    userId: "s",
    name: "Simple",
    numberRangeAS: 20,
    numberRangeM: 7,
    numberRangeD: 16,
    highScore: 0,
    currentScore: 0,
    operationType: Operation.ADD
  },
  {
    userId: "a",
    name: "Advanced",
    numberRangeAS: 300,
    numberRangeM: 12,
    numberRangeD: 100,
    highScore: 0,
    currentScore: 0,
    operationType: Operation.ADD
  }
]

const UsersPage = () => {
  const history = useHistory();

  const session = React.useContext(SessionContext);

  const currentUsers = React.useMemo(() => {
    if (!session?.users) {
      return [];
    }
    const users: User[] = [...session?.users];
    users.sort((userA, userB) => userB.userId.localeCompare(userA.userId));
    return users;
  }, [session?.users]);

  const selectUser = React.useCallback((user: User) => {
    session?.setUserId(user.userId);
    history.push("/" + user.userId);
  }, []);

  React.useEffect(() => {
    if (session?.users.length === 0) {
      session?.setUsers(DEFAULT_USERS);
    }
  }, []);

  if (!session) {
    return null;
  }

  return (
    <StyledContainer>
      <StyledTitleHeadingContainer>
        <StyledTitleHeading>Mathsight</StyledTitleHeading>
        {/* <AccountSelect /> */}
      </StyledTitleHeadingContainer>
      <StyledHeadingUsers>Difficulty</StyledHeadingUsers>
      <StyledUsers>
        {
          currentUsers.map((user) => (
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
  margin: 0 50px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media(max-width: 921px) {
    min-width: 410px;
    width: 410px;
    margin-left: 0;
    padding: 0 50px;
  }
`

const StyledTitleHeadingContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const StyledTitleHeading = styled.h1`
  margin-top: 20px;
  margin-left: 65px;
  font-family: 'Righteous', cursive;
  font-size: 40px;
  transition: margin-left 1s ease;

  @media(max-width: 920px) {
    margin: 20px auto;
  }
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
  max-width: 380px;
  flex-grow: 1;
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