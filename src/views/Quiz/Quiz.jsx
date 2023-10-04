import './Quiz.scss'
import { useContext, useEffect, useState } from 'react'
import { QuizDataContext } from '@/providers/QuizDataProvider'
import { supabase } from '@/supa/client'

const STORAGE_QUIZ_DATA_ID = 'current_quiz_data'

const Quiz = () => {
  const [currentQuizData, setCurrentQuizData] = useState(null)
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(null)

  const [quizData, setQuizData] = useState(null)
  const [questionIds, setQuestionIds] = useState(null)

  const { quizCategory, availQuestionCount } = useContext(QuizDataContext)

  const [loading, setLoading] = useState(true)

  const [quizEnd, setQuizEnd] = useState(false)
  const [points, setPoints] = useState(0)

  // Get specific amount of random ids
  const getRandomIds = () => {
    let ids = []
    let amount = 2

    while (ids.length < amount) {
      let rand = Math.floor(Math.random() * availQuestionCount)
      if (!ids.includes(rand.toString())) ids.push(rand.toString())
      else continue
    }

    return ids
  }

  // Run first, check for data in storage or query questions
  useEffect(() => {
    let qData = sessionStorage.getItem(STORAGE_QUIZ_DATA_ID)
    if (qData === 'undefined' || !qData) {
      let ids = getRandomIds()
      setQuestionIds(ids)
    } else {
      let data = JSON.parse(sessionStorage.getItem(STORAGE_QUIZ_DATA_ID))
      setCurrentQuizData(data)
      console.log('loading questions')
    }
  }, [])

  // On question ids ready, get questions
  useEffect(() => {
    if (questionIds) {
      ;(async () => {
        const { data } = await supabase
          .from(quizCategory.cat)
          .select('id,question,answers,correctIdx')
          .in('id', questionIds)

        if (data && data.length > 0) {
          setQuizData(data)
          setCurrentQuestionIdx(0)
        }
      })()
    }
  }, [questionIds])

  // On set quiz data, set current data
  useEffect(() => {
    if (!!quizData && quizData.length > 0 && currentQuestionIdx !== null) {
      setCurrentQuizData(quizData[currentQuestionIdx])
    }
  }, [quizData, currentQuestionIdx])

  // On set current data, save it to storage
  useEffect(() => {
    if (currentQuizData !== null) {
      sessionStorage.setItem(STORAGE_QUIZ_DATA_ID, JSON.stringify(currentQuizData))
      setLoading(false)
    }
  }, [currentQuizData])

  // Answer
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

  return (
    <>
      {!loading && currentQuizData ? (
        <div className='quiz-wrapper'>
          <div className='quiz-content'>
            {quizEnd ? (
              <div className='final'>
                PODSUMOWANIE QUIZU <br />
                {quizCategory.name} <br />
                WYNIK: {points} / {quizData.length}
              </div>
            ) : (
              <div className='question-wrapper'>
                <div className='question'>{currentQuizData.question}</div>
                <div className='answers'>
                  {currentQuizData.answers.map((a) => (
                    <button
                      className='answer'
                      onClick={() => answer(currentQuizData.answers.indexOf(a))}
                      key={currentQuizData.answers.indexOf(a)}>
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
