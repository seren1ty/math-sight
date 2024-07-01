import { Box } from '@material-ui/core'
import Link from '@material-ui/core/Link'
import { SessionContext } from 'context/session.context'
import React, { useRef, useState } from 'react'
import { Operation, User } from 'types/types'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const UsersPage = () => {
  const history = useHistory()

  const session = React.useContext(SessionContext)

  const currentUsers = React.useMemo(() => {
    if (!session?.users) {
      return []
    }
    const users: User[] = [...session?.users]
    users.sort((userA, userB) => userB.index.localeCompare(userA.index))
    return users
  }, [session?.users])

  const existingCustomUser = currentUsers.find(user => user.userId === 'c')

  const [customAS, setCustomAS] = useState(
    existingCustomUser?.numberRangeAS || 10
  )
  const [customM, setCustomM] = useState(existingCustomUser?.numberRangeM || 10)
  const [customD, setCustomD] = useState(existingCustomUser?.numberRangeD || 10)

  const newCustomUser = useRef<User>({
    index: '1',
    userId: 'c',
    name: 'Custom',
    numberRangeAS: customAS,
    numberRangeM: customM,
    numberRangeD: customD,
    highScore: 0,
    currentScore: 0,
    operationType: Operation.ADD,
    custom: true,
  })

  const [editMode, setEditMode] = useState(false)

  const DEFAULT_USERS: User[] = [
    {
      index: '3',
      userId: 's',
      name: 'Simple',
      numberRangeAS: 50,
      numberRangeM: 12,
      numberRangeD: 100,
      highScore: 0,
      currentScore: 0,
      operationType: Operation.ADD,
    },
    {
      index: '2',
      userId: 'a',
      name: 'Advanced',
      numberRangeAS: 1000,
      numberRangeM: 50,
      numberRangeD: 2500,
      highScore: 0,
      currentScore: 0,
      operationType: Operation.ADD,
    },
    newCustomUser.current,
  ]

  const selectUser = (user: User) => {
    session?.setUserId(user.userId)
    history.push('/' + user.userId)
  }

  const selectCustomUser = (user: User) => {
    if (editMode) {
      return
    }

    selectUser(user)
    session?.handleUserIdChange()
  }

  const handleOnChangeAS = (event: any) => {
    setCustomAS(event.target.value)
    session?.setHighScore(0)
    session?.setCurrentScore(0)
  }

  const handleOnChangeM = (event: any) => {
    setCustomM(event.target.value)
    session?.setHighScore(0)
    session?.setCurrentScore(0)
  }

  const handleOnChangeD = (event: any) => {
    setCustomD(event.target.value)
    session?.setHighScore(0)
    session?.setCurrentScore(0)
  }

  const toggleEditMode = () => {
    if (editMode) {
      const customUser = existingCustomUser || newCustomUser.current

      if (
        customAS !== customUser.numberRangeAS ||
        customM !== customUser.numberRangeM ||
        customD !== customUser.numberRangeD
      ) {
        const updatedCustomUser = {
          ...customUser,
          numberRangeAS: customAS,
          numberRangeM: customM,
          numberRangeD: customD,
        }

        session?.setUserId(customUser.userId)
        session?.updateCustomUser(updatedCustomUser)
        session?.setHighScore(0)
        session?.setCurrentScore(0)
      }
    }

    setEditMode(!editMode)
  }

  React.useEffect(() => {
    if (session?.users.length === 0) {
      session?.setUsers(DEFAULT_USERS)
    }
  }, [])

  if (!session) {
    return null
  }

  return (
    <StyledContainer>
      <StyledTitleHeadingContainer>
        <StyledTitleHeading>Mathsight</StyledTitleHeading>
      </StyledTitleHeadingContainer>
      <StyledHeadingUsers>Difficulty</StyledHeadingUsers>
      <StyledUsers>
        {currentUsers.map(user =>
          !user.custom ? (
            <StyledUser key={user.userId} onClick={() => selectUser(user)}>
              <StyledName>{user.name}</StyledName>
              <StyledScores>
                <StyledCurrentScore>
                  Current score: <StyledScore>{user.currentScore}</StyledScore>
                </StyledCurrentScore>
                <StyledHighScore>
                  High score: <StyledScore>{user.highScore}</StyledScore>
                </StyledHighScore>
              </StyledScores>
            </StyledUser>
          ) : (
            <StyledCustomUser key={user.userId}>
              <StyledNameContainer>
                <StyledName onClick={() => selectCustomUser(user)}>
                  Custom
                </StyledName>
                <StyledLinkContainer>
                  <Link
                    component="button"
                    variant="body2"
                    onClick={() => toggleEditMode()}
                  >
                    {editMode ? 'Collapse' : 'Expand'}
                  </Link>
                </StyledLinkContainer>
              </StyledNameContainer>
              {editMode ? (
                <StyledCustomInputContainers>
                  <StyledCustomInputContainer>
                    <StyledCustomLabel>Add / Subtract</StyledCustomLabel>
                    <StyledCustomInput
                      value={customAS}
                      onChange={handleOnChangeAS}
                      maxLength={6}
                    />
                  </StyledCustomInputContainer>
                  <StyledCustomInputContainer>
                    <StyledCustomLabel>Multiply</StyledCustomLabel>
                    <StyledCustomInput
                      value={customM}
                      onChange={handleOnChangeM}
                      maxLength={6}
                    />
                  </StyledCustomInputContainer>
                  <StyledCustomInputContainer>
                    <StyledCustomLabel>Divide</StyledCustomLabel>
                    <StyledCustomInput
                      value={customD}
                      onChange={handleOnChangeD}
                      maxLength={6}
                    />
                  </StyledCustomInputContainer>
                </StyledCustomInputContainers>
              ) : (
                <StyledScores onClick={() => selectCustomUser(user)}>
                  <StyledCurrentScore>
                    Current score:{' '}
                    <StyledScore>{user.currentScore}</StyledScore>
                  </StyledCurrentScore>
                  <StyledHighScore>
                    High score: <StyledScore>{user.highScore}</StyledScore>
                  </StyledHighScore>
                </StyledScores>
              )}
            </StyledCustomUser>
          )
        )}
      </StyledUsers>
    </StyledContainer>
  )
}

const StyledContainer = styled(Box)`
  margin: 0 50px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media (max-width: 921px) {
    margin: 0 25px;
  }
`

const StyledTitleHeadingContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const StyledTitleHeading = styled.h1`
  margin-top: 20px;
  font-family: 'Righteous', cursive;
  font-size: 40px;
  transition: margin-left 1s ease;

  @media (max-width: 920px) {
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
  flex-grow: 1;
  min-width: 321px;
  height: 125px;
  padding: 5px 10px 5px 15px;
  background: #eeeff2;
  border-radius: 10px;
  border: 3px solid #d1dcf9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    background: #e6e8f5;
    border: 3px solid #7d9ded;
  }
`

const StyledCustomUser = styled(Box)`
  flex-grow: 1;
  min-width: 321px;
  min-height: 125px;
  padding: 5px 10px 5px 15px;
  background: #eeeff2;
  border-radius: 10px;
  border: 3px solid #d1dcf9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    background: #e6e8f5;
    border: 3px solid #7d9ded;
  }
`

const StyledNameContainer = styled.span`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
`

const StyledCustomInputContainers = styled(Box)`
  margin: 20px 5px 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
`

const StyledCustomInputContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 5px;
`

const StyledCustomLabel = styled.label`
  font-size: 18px;
`

const StyledCustomInput = styled.input`
  width: 100px;
  font-size: 18px;
  border: 2px solid;
  border-radius: 4px;
`

const StyledName = styled(Box)`
  flex-grow: 1;
  margin: 0px 1px;
  text-align: left;
  font-size: 30px;
  font-weight: 600;
  color: #7d9ded;
`

const StyledLinkContainer = styled(Box)`
  width: 60px;
  padding-top: 10px;
  display: flex;
  align-items: flex-start;
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
  color: #48dda7;
`

const StyledScore = styled.span`
  display: inline-block;
  width: 45px;
  text-align: center;
`

export default UsersPage
