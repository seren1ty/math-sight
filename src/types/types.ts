import { MathQuestion } from 'model/mathQuestion'

export type Account = {
  accountId: string
  name: string
  userIds: string[]
}

export type User = {
  index: string
  userId: string
  name: string
  numberRangeAS: number
  numberRangeM: number
  numberRangeD: number
  highScore?: number
  currentScore?: number
  operationType?: Operation
  custom?: boolean
}

export type Session = {
  accounts: Account[]
  accountId: string
  users: User[]
  userId: string
  operationType: Operation
  questions: MathQuestion[]
  answers: number[]
  showResults: boolean
  highScore: number
  currentScore: number
  setAccounts: (accounts: Account[]) => void
  setAccountId: (accountId: string) => void
  setUsers: (users: User[]) => void
  setUserId: (userId: string) => void
  setOperationType: (operation: Operation) => void
  setQuestions: (questions: MathQuestion[]) => void
  setAnswers: (answers: number[]) => void
  setShowResults: (showResults: boolean) => void
  setHighScore: (highScore: number) => void
  setCurrentScore: (currentScore: number) => void
  resetFields: () => void
  generateQuestions: () => void
  checkAnswer: (question: MathQuestion) => boolean
  updateCustomUser: (userToUpdate: User) => void
  handleUserIdChange: () => void
}

export enum Operation {
  ADD,
  MINUS,
  MULTIPLY,
  DIVIDE,
}
