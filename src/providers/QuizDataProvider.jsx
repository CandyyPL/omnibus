import { createContext, useState } from 'react'

export const QuizDataContext = createContext({})

const QuizDataProvider = ({ children }) => {
  const [quizCategory, setQuizCategory] = useState(null)
  const [quizData, setQuizData] = useState(null)
  const [availableQuestionsCount, setAvailableQuestionsCount] = useState(0)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState([])

  const clearQuizDataProviderStates = () => {
    setQuizCategory(null)
    setQuizData(null)
    setAvailableQuestionsCount(0)
    setScore(0)
    setAnswers([])
  }

  const provide = {
    quizCategory,
    quizData,
    availableQuestionsCount,
    score,
    answers,
    setQuizCategory,
    setQuizData,
    setAvailableQuestionsCount,
    setScore,
    setAnswers,
    clearQuizDataProviderStates,
  }

  return <QuizDataContext.Provider value={provide}>{children}</QuizDataContext.Provider>
}

export default QuizDataProvider
