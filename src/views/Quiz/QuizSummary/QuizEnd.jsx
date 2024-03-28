import './QuizEnd.scss'
import { supabase } from '@/supa/client'
import Latex from 'react-latex'
import { useContext, useEffect } from 'react'
import { AuthContext } from '@/providers/AuthProvider'

const QuizEnd = ({ quizData, answers, score }) => {
  const {
    session: { user },
  } = useContext(AuthContext)

  useEffect(() => {
    ;(async () => {
      const { data } = await supabase.from('users').select('totalScore').eq('uid', user.id)

      const totalScore = score + data[0].totalScore

      await supabase.from('users').update({ totalScore }).eq('uid', user.id)
    })()
  }, [])

  return (
    <div className='quiz-end-wrapper'>
      <h2>PODSUMOWANIE QUIZU</h2>
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
    </div>
  )
}

export default QuizEnd
