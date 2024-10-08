import './QuizSummary.scss'
import { supabase } from '@/supa/client'
import Latex from 'react-latex'
import { useContext, useEffect, useMemo } from 'react'
import { AuthContext } from '@/providers/AuthProvider'
import { v4 as uuid } from 'uuid'
import { useNavigate } from 'react-router-dom'
import { QuizDataContext } from '@/providers/QuizDataProvider'
import { countValuesInObjects } from '@/helpers/customFunctions'

const QuizSummary = () => {
  const {
    session: { user },
  } = useContext(AuthContext)

  const { quizCategory, quizData, score, answers } = useContext(QuizDataContext)

  const gameUuid = useMemo(() => uuid(), [])

  const navigate = useNavigate()

  useEffect(() => {
    ;(async () => {
      const { data } = await supabase.from('users').select('totalScore').eq('uid', user.id)

      const totalScore = score + data[0].totalScore

      let correctAnswers = answers.filter((v) => v.correct).length

      const questionsData = quizData.map((q, i) => {
        return { ...q, playerAnswer: answers[i].aid }
      })

      await supabase.from('games').insert([
        {
          uuid: gameUuid,
          player: user.id,
          subject: quizCategory.cat,
          score,
          correctAnswers,
          questionsData,
        },
      ])

      const { data: playerGames } = await supabase.from('games').select('*').eq('player', user.id)

      const subjectsCount = countValuesInObjects(playerGames, 'subject')
      const favSubject = Object.entries(subjectsCount).sort((a, b) => b[1] - a[1])[0][0]

      await supabase
        .from('users')
        .update({ totalScore, favSubject, lastGame: gameUuid })
        .eq('uid', user.id)
    })()
  }, [])

  return (
    <div className='quiz-end-wrapper'>
      <h2>PODSUMOWANIE QUIZU</h2>
      <h3>Przedmiot: {quizCategory.name}</h3>
      <p>Wynik: {score}</p>
      <ul>
        {quizData.map((q) => (
          <li key={q.id}>
            <div className='id'>{q.id + 1}. </div>
            <div className='question'>
              {q.tags.includes('latex') ? <Latex>{q.question}</Latex> : <p>{q.question}</p>}
            </div>
            <div className='answer'>
              {answers.find((a) => a.qid === q.id).correct
                ? 'Poprawna odpowiedź'
                : 'Niepoprawna odpowiedź'}
            </div>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate('/dashboard')}>ZAKOŃCZ QUIZ</button>
    </div>
  )
}

export default QuizSummary
