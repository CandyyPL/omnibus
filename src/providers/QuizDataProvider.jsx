import { createContext, useState } from 'react'

export const QuizDataContext = createContext({})

const QuizDataProvider = ({ children }) => {
  const [quizCategory, setQuizCategory] = useState()
  const [availQuestionCount, setAvailQuestionCount] = useState([])

  const provide = {
    quizCategory,
    availQuestionCount,
    setQuizCategory,
    setAvailQuestionCount,
  }

  return <QuizDataContext.Provider value={provide}>{children}</QuizDataContext.Provider>
}

export default QuizDataProvider
