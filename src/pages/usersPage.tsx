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
      <h3>Users</h3>
      <StyledUsers>
        {
          session.users.map((user) => (
            <StyledUser key={user.userId} onClick={() => selectUser(user)}>
              {user.name}
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
  font-size: 40px;
  font-family: 'Righteous', cursive;
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
  background: #EEEFF2;
  border-radius: 10px;
  border: 3px solid #d1dcf9;
`

export default UsersPage;