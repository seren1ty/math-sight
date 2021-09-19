import { Operation } from "types/types";

export class MathQuestion {
  id: number;
  numberOne: number;
  numberTwo: number;
  operation: Operation;

  constructor(id: number, numberOne: number, numberTwo: number, operation?: Operation) {
    this.id = id;
    this.numberOne = numberOne;
    this.numberTwo = numberTwo;
    this.operation = operation || Operation.ADD;
  }

  getResult(): number {
    const one = Number(this.numberOne);
    const two = Number(this.numberTwo);

    switch(this.operation) {
      case Operation.MINUS:
        return one - two;
      case Operation.MULTIPLY:
        return one * two;
      case Operation.DIVIDE:
        return one / two;
      default:
        return one + two;
    }
  }
}