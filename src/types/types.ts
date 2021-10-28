import { MathQuestion } from "model/mathQuestion";

export type Account = {
  accountId: string;
  name: string;
}

export type User = {
  userId: string;
  name: string;
  highScore?: number;
  currentScore?: number;
}

export type Session = {
  accounts: Account[];
  accountId: string;
  users: User[];
  userId: string;
  operationType: Operation;
  questions: MathQuestion[];
  answers: number[];
  showResults: boolean;
  highScore: number;
  currentScore: number;
  setAccounts: (accounts: Account[]) => void;
  setAccountId: (accountId: string) => void;
  setUsers: (users: User[]) => void;
  initUser: (userId: string, numberRangeAS: number, numberRangeM: number, numberRangeD: number) => void;
  setUserId: (userId: string) => void;
  setOperationType: (operation: Operation) => void;
  setQuestions: (questions: MathQuestion[]) => void;
  setAnswers: (answers: number[]) => void;
  setShowResults: (showResults: boolean) => void;
  setHighScore: (highScore: number) => void;
  setCurrentScore: (currentScore: number) => void;
  resetFields: () => void;
  generateQuestions: () => void;
  checkAnswer: (question: MathQuestion) => boolean;
}

export enum Operation {
  ADD,
  MINUS,
  MULTIPLY,
  DIVIDE,
}