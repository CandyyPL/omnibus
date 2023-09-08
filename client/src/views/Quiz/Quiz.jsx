import { useEffect, useState } from 'react'
import './Quiz.scss'
import { getData } from '@/supa/db'

const Quiz = () => {
  const [currentQuizData, setCurrentQuizData] = useState([])
  const [currentQuizSubject, setCurrentQuizSubject] = useState('q_math')

  useEffect(() => {
    ;(async () => {
      const data = await getData(currentQuizSubject, '*')

      if (data) {
        setCurrentQuizData(data)
      }
    })()
  }, [])

  const answer = (qd, idx) => {
    if (idx == qd.correctIdx) {
      console.log('correct')
    }
  }

  return (
    <>
      {currentQuizData ? (
        <div className='quiz-wrapper'>
          <div className='content'>
            {currentQuizData.map((qd) => (
              <div className='question-wrapper' key={qd.id}>
                <div className='question'>{qd.question}</div>
                <div className='answers'>
                  {qd.answers.map((a) => (
                    <button
                      className='answer'
                      onClick={() => answer(qd.answers.indexOf(qd, a))}
                      key={a}>
                      {a}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className='loading'>LOADING</div>
      )}
    </>
  )
}

export default Quiz
