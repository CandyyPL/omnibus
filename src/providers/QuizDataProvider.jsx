import { createContext, useState } from 'react'

export const QuizDataContext = createContext({})

const QuizDataProvider = ({ children }) => {
  const [quizCategory, setQuizCategory] = useState()
  const [quizQuestions, setQuizQuestions] = useState()
  const [availQuestionCount, setAvailQuestionCount] = useState([])

  const provide = {
    quizCategory,
    quizQuestions,
    availQuestionCount,
    setQuizCategory,
    setQuizQuestions,
    setAvailQuestionCount,
  }

  return <QuizDataContext.Provider value={provide}>{children}</QuizDataContext.Provider>
}

export default QuizDataProvider
