import { createContext, useState } from 'react'

export const QuizDataContext = createContext({})

const QuizDataProvider = ({ children }) => {
  const [quizCategory, setQuizCategory] = useState(null)
  const [quizData, setQuizData] = useState(null)
  const [availQuestionCount, setAvailQuestionCount] = useState(0)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState([])

  const clearProviderStates = () => {
    setQuizCategory(null)
    setQuizData(null)
    setAvailQuestionCount(0)
    setScore(0)
    setAnswers([])
  }

  const provide = {
    quizCategory,
    quizData,
    availQuestionCount,
    score,
    answers,
    setQuizCategory,
    setQuizData,
    setAvailQuestionCount,
    setScore,
    setAnswers,
    clearProviderStates,
  }

  return <QuizDataContext.Provider value={provide}>{children}</QuizDataContext.Provider>
}

export default QuizDataProvider
