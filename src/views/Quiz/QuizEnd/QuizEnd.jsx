import { useEffect } from 'react'

const QuizEnd = ({ quizData, answers, score }) => {
  useEffect(() => {
    console.log(quizData)
    console.log(answers)
    console.log(score)
  }, [])

  return <div className='quiz-end-wrapper'>KONIEC GRY</div>
}

export default QuizEnd
