import { QuizDataContext } from '@/providers/QuizDataProvider'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '@/supa/client'
import Style from './Quiz.styles.js'
import Latex from 'react-latex'

const STORAGE_QUIZ_DATA_ID = 'omnibus_quiz_data'

const Quiz = () => {
  const {
    quizCategory,
    quizData,
    score,
    answers,
    setQuizCategory,
    setQuizData,
    availableQuestionsCount,
    setAvailableQuestionsCount,
    setScore,
    setAnswers,
  } = useContext(QuizDataContext)

  const [currentQuizData, setCurrentQuizData] = useState(null)
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(null)

  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  const getRandomIds = async () => {
    let ids = []

    const { count } = await supabase.from(quizCategory.cat).select('*', { count: 'exact' })

    let amount = count

    while (ids.length < amount) {
      let rand = Math.floor(Math.random() * availableQuestionsCount)
      if (!ids.includes(rand.toString())) ids.push(rand.toString())
      else continue
    }

    return ids
  }

  const setProviderStates = (data) => {
    setQuizCategory(data.quizCategory)
    setQuizData(data.quizData)
    setAvailableQuestionsCount(data.availableQuestionsCount)
    setCurrentQuestionIdx(data.currentQuestionIdx)
    setScore(data.score)
    setAnswers(data.answers)
  }

  // Run first, check sessionStorage for saved data, fetch data from db
  useEffect(() => {
    const sessionData = sessionStorage.getItem(STORAGE_QUIZ_DATA_ID)

    if (!sessionData) {
      const fetchDatabase = async () => {
        let ids = await getRandomIds()

        const { data } = await supabase
          .from(quizCategory.cat)
          .select('id,question,answers,correctIdx,tags')
          .in('id', ids)

        if (data && data.length > 0) {
          setQuizData(data)
          setCurrentQuestionIdx(0)
        }
      }

      fetchDatabase()
        .then(() => {})
        .catch((error) => console.log(error))
    }

    if (sessionData) {
      const parsedData = JSON.parse(sessionData)

      setProviderStates(parsedData)
    }
  }, [])

  // Run when quizData and/or currentQuestionIdx changes
  useEffect(() => {
    if (quizData && currentQuestionIdx !== null) {
      setCurrentQuizData(quizData[currentQuestionIdx])

      const sessionData = {
        quizCategory,
        quizData,
        availableQuestionsCount,
        currentQuestionIdx,
        score,
        answers,
      }

      sessionStorage.setItem(STORAGE_QUIZ_DATA_ID, JSON.stringify(sessionData))

      setProviderStates(sessionData)

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
      navigate('/summary')
    } else if (currentQuestionIdx + 1 < quizData.length) {
      setCurrentQuestionIdx((prev) => prev + 1)
    }
  }

  return (
    <>
      {!loading && currentQuizData ? (
        <Style.QuizWrapper>
          <h1>{quizCategory.name}</h1>
          <div className='question-wrapper'>
            <Style.Question>
              {currentQuizData.tags.includes('latex') ? (
                <Latex>{currentQuizData.question}</Latex>
              ) : (
                currentQuizData.question
              )}
            </Style.Question>
            <Style.Answers>
              {currentQuizData.answers.map((a) => (
                <button
                  className='answer'
                  onClick={() => answer(a.id, currentQuizData.id)}
                  key={a.id}>
                  {currentQuizData.tags.includes('latex') ? <Latex>{a.answer}</Latex> : a.answer}
                </button>
              ))}
            </Style.Answers>
          </div>
        </Style.QuizWrapper>
      ) : (
        <div className='loading'>LOADING</div>
      )}
    </>
  )
}

export default Quiz
