import { Operation } from "types/types";

export const setMsUserId = (userId: string): void => {
  localStorage.setItem("mathSight-userId", JSON.stringify(userId));
}

export const getMsUserId = (): string => {
  const rawUserId = localStorage.getItem("mathSight-userId");

  if (!rawUserId) {
    setMsUserId("");
    return "";
  }

  return JSON.parse(rawUserId);
}

export const setMsOperationType = (userId: string, operationType: Operation): void => {
  localStorage.setItem("mathSight-operationType-" + userId, JSON.stringify(operationType));
}

export const getMsOperationType = (userId: string): Operation => {
  const rawOperationType = localStorage.getItem("mathSight-operationType-" + userId);

  if (!rawOperationType) {
    if (userId) {
      setMsOperationType(userId, Operation.ADD);
    }
    return 0;
  }

  return JSON.parse(rawOperationType);
}

export const setMsHighScore = (userId: string, highScore: number): void => {
  localStorage.setItem("mathSight-highScore-" + userId, JSON.stringify(highScore));
}

export const getMsHighScore = (userId: string): number => {
  const rawHighScore = localStorage.getItem("mathSight-highScore-" + userId);

  if (!rawHighScore) {
    if (userId) {
      setMsHighScore(userId, 0);
    }
    return 0;
  }

  return Number(JSON.parse(rawHighScore));
}

export const setMsCurrentScore = (userId: string, currentScore: number): void => {
  localStorage.setItem("mathSight-currentScore-" + userId, JSON.stringify(currentScore));
}

export const getMsCurrentScore = (userId: string): number => {
  const rawCurrentScore = localStorage.getItem("mathSight-currentScore-" + userId);

  if (!rawCurrentScore) {
    if (userId) {
      setMsOperationType(userId, 0);
    }
    return 0;
  }

  return Number(JSON.parse(rawCurrentScore));
}
