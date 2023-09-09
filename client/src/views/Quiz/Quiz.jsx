import { useEffect, useState } from 'react'
import { getData } from '@/supa/dbFunctions'
import './Quiz.scss'

const Quiz = () => {
  const [currentQuizSubject, setCurrentQuizSubject] = useState('q_math')

  const [quizData, setQuizData] = useState([])
  const [currentQuizData, setCurrentQuizData] = useState([])
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0)

  const [quizEnd, setQuizEnd] = useState(false)
  const [points, setPoints] = useState(0)

  useEffect(() => {
    ;(async () => {
      const data = await getData(currentQuizSubject, '*')

      if (data) {
        setQuizData(data)
        setCurrentQuizData(data[currentQuestionIdx])
      }
    })()
  }, [])

  const answer = (idx) => {
    if (idx == currentQuizData.correctIdx) {
      setPoints((prev) => prev + 1)
    }

    if (currentQuestionIdx + 1 == quizData.length) {
      setQuizEnd(true)
    } else if (currentQuestionIdx + 1 < quizData.length) {
      setCurrentQuestionIdx((prev) => prev + 1)
    }
  }

  useEffect(() => {
    setCurrentQuizData(quizData[currentQuestionIdx])
  }, [currentQuestionIdx])

  return (
    <>
      {currentQuizData && currentQuizData.answers ? (
        <div className='quiz-wrapper'>
          <div className='quiz-content'>
            {quizEnd ? (
              <div className='final'>
                QUIZ END! YOUR SCORE: {points} / {quizData.length}
              </div>
            ) : (
              <div className='question-wrapper'>
                <div className='question'>{currentQuizData.question}</div>
                <div className='answers'>
                  {currentQuizData.answers.map((a) => (
                    <button
                      className='answer'
                      onClick={() => answer(currentQuizData.answers.indexOf(a))}
                      key={a}>
                      {a}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className='loading'>LOADING</div>
      )}
    </>
  )
}

export default Quiz
