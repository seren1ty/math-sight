import React, { useState, useEffect } from 'react'
import {
  getMsCurrentScore,
  getMsHighScore,
  getMsUserId,
  setMsOperationType,
  setMsHighScore,
  setMsUserId,
  getMsOperationType,
  setMsCurrentScore,
  getMsAccountId,
  getMsAccounts,
  getMsUsers,
  setMsUsers,
} from 'utils/ms-localStorage'
import { Account, Operation, Session, User } from 'types/types'
import { MathQuestion } from 'model/mathQuestion'

type ContextProps = {
  children: React.ReactNode
  initialQuestions?: MathQuestion[]
}

const SessionContext = React.createContext<Session | null>(null)

const SessionProvider = ({ children, initialQuestions }: ContextProps) => {
  const [accounts, setAccounts] = useState<Account[]>(getMsAccounts())

  const [accountId, setAccountId] = useState<string>(getMsAccountId())

  const [users, setUsers] = useState<User[]>(getMsUsers(accountId))

  const [userId, setUserId] = useState<string>(getMsUserId())

  const currentUser = React.useRef<User>()

  const numberRangeAS = React.useRef<number>(0)
  const numberRangeM = React.useRef<number>(0)
  const numberRangeD = React.useRef<number>(0)

  const [operationType, setOperationType] = React.useState(
    getMsOperationType(userId)
  )

  const [questions, setQuestions] = useState<MathQuestion[]>(
    initialQuestions || []
  )

  const [answers, setAnswers] = useState<number[]>([])

  const [showResults, setShowResults] = useState<boolean>(false)

  const [highScore, setHighScore] = useState<number>(getMsHighScore(userId))

  const [currentScore, setCurrentScore] = useState<number>(
    getMsCurrentScore(userId)
  )

  const resetFields = React.useCallback(() => {
    setQuestions([])
    setAnswers([])
    setShowResults(false)
    setOperationType(getMsOperationType(userId))
    setHighScore(getMsHighScore(userId))
    setCurrentScore(getMsCurrentScore(userId))
  }, [
    userId,
    setQuestions,
    setAnswers,
    setOperationType,
    setShowResults,
    setHighScore,
    setCurrentScore,
  ])

  const isPrime = React.useCallback((number: number) => {
    for (let idx = 2, sqr = Math.sqrt(number); idx <= sqr; idx++) {
      if (number % idx === 0) {
        return false
      }
    }
    return number > 1
  }, [])

  const generateQuestions = React.useCallback(() => {
    resetFields()

    let newQuestions: MathQuestion[] = []

    let range

    if (operationType === Operation.ADD || operationType === Operation.MINUS) {
      range = numberRangeAS.current
    } else if (operationType === Operation.MULTIPLY) {
      range = numberRangeM.current
    } else {
      range = numberRangeD.current
    }

    let loopCount = 0
    const maxLoops = 1000000

    for (let idx = 0; idx < 10; idx++) {
      loopCount++

      let numA = Math.floor(Math.random() * range + 1)
      let numB = Math.floor(Math.random() * range + 1)

      if (loopCount >= maxLoops) {
        break
      }

      if (
        operationType === Operation.MULTIPLY ||
        operationType === Operation.DIVIDE
      ) {
        if (numA <= 1 || numB <= 1) {
          idx = idx - 1
          continue
        }
      }

      if (
        operationType === Operation.MINUS ||
        operationType === Operation.DIVIDE
      ) {
        if (numA < 1 || numB < 1 || numA < numB) {
          idx = idx - 1
          continue
        }
      }

      if (operationType === Operation.DIVIDE) {
        if (isPrime(numA)) {
          idx = idx - 1
          continue
        }

        while (numA === numB || numA % numB !== 0 || numB === 1) {
          loopCount++
          numB = Math.floor(Math.random() * range)

          if (loopCount >= maxLoops) {
            break
          }
        }
      }

      const questionAlreadyExists = newQuestions.some(
        q => q.numberOne === numA && q.numberTwo === numB
      )

      if (!questionAlreadyExists) {
        const question = new MathQuestion(idx, numA, numB, operationType)
        newQuestions.push(question)
      } else {
        idx = idx - 1
      }
    }

    setQuestions(newQuestions)
  }, [
    numberRangeAS,
    numberRangeM,
    numberRangeD,
    operationType,
    resetFields,
    isPrime,
  ])

  const checkAnswer = React.useCallback(
    (question: MathQuestion) => {
      return Number(answers[question.id]) === Number(question.getResult())
    },
    [answers]
  )

  const updateUser = React.useCallback(
    (userToUpdate: User) => {
      const otherUsers = users.filter(
        user => user.userId !== userToUpdate.userId
      )
      setUsers([...otherUsers, userToUpdate])
    },
    [users]
  )

  const updateCustomUser = React.useCallback(
    (updatedCustomUser: User) => {
      const otherUsers = users.filter(
        user => user.userId !== updatedCustomUser.userId
      )
      setUsers([...otherUsers, updatedCustomUser])
    },
    [users]
  )

  const handleUserIdChange = () => {
    if (!userId || !users || users.length === 0) {
      return
    }

    setMsUserId(userId)
    currentUser.current = users.find(user => user.userId === userId)

    numberRangeAS.current = currentUser.current?.numberRangeAS || 10
    numberRangeM.current = currentUser.current?.numberRangeM || 10
    numberRangeD.current = currentUser.current?.numberRangeD || 10

    setOperationType(currentUser.current?.operationType || Operation.ADD)

    generateQuestions()
  }

  useEffect(() => {
    handleUserIdChange()
  }, [userId])

  useEffect(() => {
    if (!userId) {
      return
    }

    if (currentUser.current) {
      currentUser.current = { ...currentUser.current, highScore }
      updateUser(currentUser.current)
    }

    setMsHighScore(userId, highScore)
  }, [highScore])

  useEffect(() => {
    if (!userId) {
      return
    }

    if (currentUser.current) {
      currentUser.current = { ...currentUser.current, currentScore }
      updateUser(currentUser.current)
    }

    setMsCurrentScore(userId, currentScore)
  }, [currentScore])

  useEffect(() => {
    if (!accountId) {
      return
    }

    setMsUsers(accountId, users)
  }, [users])

  useEffect(() => {
    if (!userId) {
      return
    }

    if (currentUser.current) {
      currentUser.current = { ...currentUser.current, operationType }
      updateUser(currentUser.current)
    }

    setMsOperationType(userId, operationType)

    generateQuestions()
  }, [operationType])

  return (
    <SessionContext.Provider
      value={{
        accounts,
        accountId,
        users,
        userId,
        operationType,
        questions,
        answers,
        showResults,
        highScore,
        currentScore,
        setAccounts,
        setAccountId,
        setUsers,
        setUserId,
        setOperationType,
        setQuestions,
        setAnswers,
        setShowResults,
        setHighScore,
        setCurrentScore,
        resetFields,
        generateQuestions,
        checkAnswer,
        updateCustomUser,
        handleUserIdChange,
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}

export { SessionContext, SessionProvider }
