import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MathQuestions from 'components/mathQuestions.component'
import { SessionProvider } from 'context/session.context'
import { MathQuestion } from 'model/mathQuestion'
import { Operation } from 'types/types'

describe('MathQuestions', () => {
  it('renders single question', () => {
    const questions = [new MathQuestion(0, 2, 3, Operation.ADD)]

    render(
      <SessionProvider initialQuestions={questions}>
        <MathQuestions />
      </SessionProvider>
    )

    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('+')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('renders single question for subtraction', () => {
    const questions = [new MathQuestion(0, 5, 2, Operation.MINUS)]

    render(
      <SessionProvider initialQuestions={questions}>
        <MathQuestions />
      </SessionProvider>
    )

    expect(screen.getByText('5')).toBeInTheDocument()
    expect(screen.getByText('-')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
  })

  it('renders single question for multiply', () => {
    const questions = [new MathQuestion(0, 3, 6, Operation.MULTIPLY)]

    render(
      <SessionProvider initialQuestions={questions}>
        <MathQuestions />
      </SessionProvider>
    )

    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('x')).toBeInTheDocument()
    expect(screen.getByText('6')).toBeInTheDocument()
  })

  it('renders single question for divide', () => {
    const questions = [new MathQuestion(0, 9, 3, Operation.DIVIDE)]

    render(
      <SessionProvider initialQuestions={questions}>
        <MathQuestions />
      </SessionProvider>
    )

    expect(screen.getByText('9')).toBeInTheDocument()
    expect(screen.getByText('/')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('renders multiple questions', () => {
    const questions = [
      new MathQuestion(0, 1, 8, Operation.ADD),
      new MathQuestion(0, 45, 76, Operation.ADD),
    ]

    render(
      <SessionProvider initialQuestions={questions}>
        <MathQuestions />
      </SessionProvider>
    )

    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('8')).toBeInTheDocument()
    expect(screen.getByText('45')).toBeInTheDocument()
    expect(screen.getByText('76')).toBeInTheDocument()
  })

  it('renders answer input fields', () => {
    const questions = [
      new MathQuestion(0, 1, 8, Operation.ADD),
      new MathQuestion(1, 45, 76, Operation.ADD),
    ]

    render(
      <SessionProvider initialQuestions={questions}>
        <MathQuestions />
      </SessionProvider>
    )

    const input1 = screen.getByTestId('AnswerInput-0')
    expect(input1).toBeInTheDocument()
    expect(input1).toBeEnabled()

    const input2 = screen.getByTestId('AnswerInput-1')
    expect(input2).toBeInTheDocument()
    expect(input2).not.toBeEnabled()
  })

  it('enables answer input field when previous answer provided', () => {
    const questions = [
      new MathQuestion(0, 1, 8, Operation.ADD),
      new MathQuestion(1, 45, 76, Operation.ADD),
    ]

    render(
      <SessionProvider initialQuestions={questions}>
        <MathQuestions />
      </SessionProvider>
    )

    const input1 = screen.getByTestId('AnswerInput-0')
    expect(input1).toBeEnabled()

    const input2 = screen.getByTestId('AnswerInput-1')
    expect(input2).not.toBeEnabled()

    userEvent.type(input1, '9')

    expect(input1).toBeEnabled()
    expect(input2).toBeEnabled()
  })
})
