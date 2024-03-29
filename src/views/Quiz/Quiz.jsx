import './Quiz.scss'
import { useContext, useEffect, useState } from 'react'
import { QuizDataContext } from '@/providers/QuizDataProvider'
import { supabase } from '@/supa/client'
import QuizSummary from '@/views/Quiz/QuizSummary/QuizSummary'
import Latex from 'react-latex'

const STORAGE_QUIZ_DATA_ID = 'omnibus_quiz_data'

const Quiz = () => {
  const { quizCategory, setQuizCategory, availQuestionCount, setAvailQuestionCount } =
    useContext(QuizDataContext)

  const [currentQuizData, setCurrentQuizData] = useState(null)
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(null)

  const [quizData, setQuizData] = useState(null)

  const [loading, setLoading] = useState(true)
  const [quizEnd, setQuizEnd] = useState(false)

  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState([])

  const getRandomIds = async () => {
    let ids = []

    const { count } = await supabase.from(quizCategory.cat).select('*', { count: 'exact' })

    let amount = count

    while (ids.length < amount) {
      let rand = Math.floor(Math.random() * availQuestionCount)
      if (!ids.includes(rand.toString())) ids.push(rand.toString())
      else continue
    }

    return ids
  }

  // Run first, check sessionStorage for saved data, fetch data from db
  useEffect(() => {
    const sessionData = sessionStorage.getItem(STORAGE_QUIZ_DATA_ID)

    if (!sessionData) {
      ;(async () => {
        let ids = await getRandomIds()

        const { data } = await supabase
          .from(quizCategory.cat)
          .select('id,question,answers,correctIdx,tags')
          .in('id', ids)

        if (data && data.length > 0) {
          setQuizData(data)
          setCurrentQuestionIdx(0)
        }
      })()
    }

    if (sessionData) {
      const parsedData = JSON.parse(sessionData)

      setQuizCategory(parsedData.quizCategory)
      setAvailQuestionCount(parsedData.availQuestionCount)
      setQuizData(parsedData.quizData)
      setCurrentQuestionIdx(parsedData.currentQuestionIdx)
      setScore(parsedData.score)
      setAnswers(parsedData.answers)
    }
  }, [])

  // Run when quizData and/or currentQuestionIdx changes
  useEffect(() => {
    if (quizData && currentQuestionIdx !== null) {
      setCurrentQuizData(quizData[currentQuestionIdx])

      const sessionData = {
        quizCategory,
        availQuestionCount,
        quizData,
        currentQuestionIdx,
        score,
        answers,
      }

      sessionStorage.setItem(STORAGE_QUIZ_DATA_ID, JSON.stringify(sessionData))

      setLoading(false)
    }
  }, [quizData, currentQuestionIdx])

  const answer = (aid, qid) => {
    if (aid == currentQuizData.correctIdx) {
      setScore((prev) => prev + 100)
      setAnswers((prev) => [...prev, { qid, aid, correct: true }])
    } else {
      setAnswers((prev) => [...prev, { qid, aid, correct: false }])
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
              <QuizSummary
                quizData={{ questions: quizData, cat: quizCategory }}
                answers={answers}
                score={score}
              />
            ) : (
              <div className='question-wrapper'>
                <div className='question'>
                  {currentQuizData.tags.includes('latex') ? (
                    <Latex>{currentQuizData.question}</Latex>
                  ) : (
                    currentQuizData.question
                  )}
                </div>
                <div className='answers'>
                  {currentQuizData.answers.map((a) => (
                    <button
                      className='answer'
                      onClick={() => answer(a.id, currentQuizData.id)}
                      key={a.id}>
                      {currentQuizData.tags.includes('latex') ? (
                        <Latex>{a.answer}</Latex>
                      ) : (
                        a.answer
                      )}
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
