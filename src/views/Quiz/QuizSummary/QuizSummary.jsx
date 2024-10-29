import { supabase } from '@/supa/client'
import Latex from 'react-latex'
import { useContext, useEffect, useMemo } from 'react'
import { AuthContext } from '@/providers/AuthProvider'
import { v4 as uuid } from 'uuid'
import { useNavigate } from 'react-router-dom'
import { QuizDataContext } from '@/providers/QuizDataProvider'
import { countValuesInObjects } from '@/helpers/customFunctions'
import Style from './QuizSummary.styles.js'

const STORAGE_QUIZ_DATA_ID = 'omnibus_quiz_summary_data'

const QuizSummary = () => {
  const {
    session: { user },
  } = useContext(AuthContext)

  const {
    quizCategory,
    setQuizCategory,
    quizData,
    setQuizData,
    score,
    setScore,
    answers,
    setAnswers,
  } = useContext(QuizDataContext)

  const gameUuid = useMemo(() => uuid(), [])

  const navigate = useNavigate()

  const setProviderStates = (data) => {
    setQuizCategory(data.quizCategory)
    setQuizData(data.quizData)
    setScore(data.score)
    setAnswers(data.answers)
  }

  useEffect(() => {
    const fetchDatabase = async () => {
      const { data } = await supabase.from('users').select('totalScore').eq('uid', user.id)

      const totalScore = score + data[0].totalScore

      let correctAnswers = answers.filter((v) => v.correct).length

      const questionsData = quizData.map((q, i) => {
        return { ...q, playerAnswer: answers[i].aid }
      })

      await supabase.from('games').insert([
        {
          game_uid: gameUuid,
          player_uid: user.id,
          subject: quizCategory.cat,
          score,
          correctAnswers,
          questionsData,
        },
      ])

      const { data: playerGames } = await supabase
        .from('games')
        .select('*')
        .eq('player_uid', user.id)

      const subjectsCount = countValuesInObjects(playerGames, 'subject')
      const favSubject = Object.entries(subjectsCount).sort((a, b) => b[1] - a[1])[0][0]

      await supabase
        .from('users')
        .update({ totalScore, favSubject, lastGame: gameUuid })
        .eq('uid', user.id)
    }

    const sessionData = sessionStorage.getItem(STORAGE_QUIZ_DATA_ID)

    if (!sessionData) {
      fetchDatabase()
        .then(() => {})
        .catch((error) => console.log(error))

      const newSessionData = {
        quizCategory,
        quizData,
        score,
        answers,
      }

      sessionStorage.setItem(STORAGE_QUIZ_DATA_ID, JSON.stringify(newSessionData))
    }

    if (sessionData) {
      const parsedData = JSON.parse(sessionData)

      setProviderStates(parsedData)
    }

    console.log(answers)
    console.log(quizData)
  }, [])

  const getQuestionAnswer = (qid) => {
    const playerAnswerId = answers.find((ans) => ans.qid == qid).aid
    const question = quizData.find((question) => question.id == qid)
    const playerAnswer = question.answers.find((answer) => answer.id == playerAnswerId).answer

    if (question.tags.includes('latex')) {
      return <Latex>{playerAnswer}</Latex>
    }

    return playerAnswer
  }

  return (
    <Style.QuizEndWrapper>
      <h1>PODSUMOWANIE QUIZU</h1>
      <h2>Przedmiot: {quizCategory && quizCategory.name}</h2>
      <h3>Wynik: {score && score}</h3>
      <Style.AnswersList>
        {quizData &&
          quizData.map((question) => (
            <Style.Answer key={question.id}>
              <div className='question-info'>
                <div className='question'>
                  {question.id + 1}.&nbsp;
                  {question.tags.includes('latex') ? (
                    <Latex>{question.question}</Latex>
                  ) : (
                    <span>{question.question}</span>
                  )}
                </div>
              </div>
              <div className='answer'>
                <span className='player-answer'>
                  Twoja odpowiedź: {quizData && answers && getQuestionAnswer(question.id)}
                </span>
                {answers && answers.find((answer) => answer.qid === question.id).correct ? (
                  <span className='correct'>Poprawna odpowiedź</span>
                ) : (
                  <span className='incorrect'>Niepoprawna odpowiedź</span>
                )}
              </div>
            </Style.Answer>
          ))}
      </Style.AnswersList>
      <button className='finish' onClick={() => navigate('/dashboard')}>
        ZAKOŃCZ QUIZ
      </button>
    </Style.QuizEndWrapper>
  )
}

export default QuizSummary
