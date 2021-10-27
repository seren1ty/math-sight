import React, { useState, useEffect } from 'react';
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
  getMsUsers
} from 'utils/ms-localStorage';
import { Account, Operation, Session, User } from 'types/types';
import { MathQuestion } from 'model/mathQuestion';

type ContextProps = {
  children: React.ReactNode
  initialQuestions?: MathQuestion[];
}

const SessionContext = React.createContext<Session | null>(null);

const SessionProvider = ({
  children,
  initialQuestions,
}: ContextProps) => {

  const [accounts, setAccounts] = useState<Account[]>(getMsAccounts());

  const [accountId, setAccountId] = useState<string>(getMsAccountId());

  const [users, setUsers] = useState<User[]>(getMsUsers(accountId));

  const [userId, setUserId] = useState<string>(getMsUserId());

  const numberRangeAS = React.useRef<number>(0);
  const numberRangeM = React.useRef<number>(0);
  const numberRangeD = React.useRef<number>(0);

  const [operationType, setOperationType] = React.useState(getMsOperationType(userId));

  const [questions, setQuestions] = useState<MathQuestion[]>(initialQuestions || []);

  const [answers, setAnswers] = useState<number[]>([]);

  const [showResults, setShowResults] = useState<boolean>(false);

  const [highScore, setHighScore] = useState<number>(getMsHighScore(userId));

  const [currentScore, setCurrentScore] = useState<number>(getMsCurrentScore(userId));

  const initUser = React.useCallback((newUserId: string, newNumberRangeAS: number, newNumberRangeM: number, newNumberRangeD: number) => {
    numberRangeAS.current = newNumberRangeAS;
    numberRangeM.current = newNumberRangeM;
    numberRangeD.current = newNumberRangeD;
    setUserId(newUserId);
  }, []);

  const resetFields = React.useCallback(() => {
    setQuestions([]);
    setAnswers([]);
    setShowResults(false);
    setOperationType(getMsOperationType(userId));
    setHighScore(getMsHighScore(userId));
    setCurrentScore(getMsCurrentScore(userId));
  },
  [
    userId,
    setQuestions,
    setAnswers,
    setOperationType,
    setShowResults,
    setHighScore,
    setCurrentScore
  ]);

  const isPrime = React.useCallback((number: number) => {
    for (let idx = 2, sqr = Math.sqrt(number); idx <= sqr; idx++) {
      if (number % idx === 0) {
        return false;
      }
    }
    return number > 1;
  }, []);

  const generateQuestions = React.useCallback(() => {
    resetFields();

    let newQuestions: MathQuestion[] = [];

    let range;

    if (operationType === Operation.ADD || operationType === Operation.MINUS) {
      range = numberRangeAS.current;
    } else if (operationType === Operation.MULTIPLY) {
      range = numberRangeM.current;
    } else {
      range = numberRangeD.current;
    }

    let loopCount = 0;
    const maxLoops = 1000000;

    for (let idx = 0; idx < 10; idx++) {
      loopCount++;

      let numA = Math.floor(Math.random() * range);
      let numB = Math.floor(Math.random() * range);

      if (loopCount >= maxLoops) {
        break;
      }

      if (operationType === Operation.MULTIPLY || operationType === Operation.DIVIDE) {
        if (numA <= 1 || numB <= 1) {
          idx = idx - 1;
          continue;
        }
      }

      if (operationType === Operation.MINUS || operationType === Operation.DIVIDE) {
        if (numA < numB) {
          idx = idx - 1;
          continue;
        }
      }

      if (operationType === Operation.DIVIDE) {
        if (isPrime(numA)) {
          idx = idx - 1;
          continue;
        }

        while (numA === numB || numA % numB !== 0 || numB === 1) {
          loopCount++;
          numB = Math.floor(Math.random() * range);

          if (loopCount >= maxLoops) {
            break;
          }
        }
      }

      const questionAlreadyExists = newQuestions.some((q) => q.numberOne === numA && q.numberTwo === numB);

      if (!questionAlreadyExists) {
        const question = new MathQuestion(idx, numA, numB, operationType);
        newQuestions.push(question);
      } else {
        idx = idx - 1;
      }
    }

    setQuestions(newQuestions);
  }, [numberRangeAS, numberRangeM, numberRangeD, operationType, resetFields, isPrime]);

  const checkAnswer = React.useCallback((question: MathQuestion) => {
    return Number(answers[question.id]) === Number(question.getResult());
  }, [answers]);

  useEffect(() => {
    if (!userId)
      return;

    setMsUserId(userId);
    generateQuestions();
  }, [userId]);

  useEffect(() => {
    if (!userId)
      return;

    setMsHighScore(userId, highScore);
  }, [highScore]);

  useEffect(() => {
    if (!userId)
      return;

    setMsCurrentScore(userId, currentScore);
  }, [currentScore]);

  useEffect(() => {
    if (!userId)
      return;

    setMsOperationType(userId, operationType);

    generateQuestions();
  }, [operationType]);

  return (
    <SessionContext.Provider value={{
      users,
      userId,
      operationType,
      questions,
      answers,
      showResults,
      highScore,
      currentScore,
      setUsers,
      initUser,
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
    }}>
      {children}
    </SessionContext.Provider>
  );
}

export { SessionContext, SessionProvider };