import { useRef, useState } from 'react'
import './QuestionManager.scss'
import { supabase } from '@/supa/client'

const QuestionManager = () => {
  const questionRef = useRef(null)
  const correctIdRef = useRef(null)
  const categoryRef = useRef(null)

  const [answers, setAnswers] = useState([
    { id: 0, answer: '' },
    { id: 1, answer: '' },
    { id: 2, answer: '' },
    { id: 3, answer: '' },
  ])

  const handleAnswersChange = (id, e) => {
    const newAnswers = answers.map((a) => {
      if (a.id == id) {
        return { ...a, answer: e.target.value }
      } else {
        return a
      }
    })

    setAnswers(newAnswers)
  }

  const handleAddQuestion = async () => {
    let category = categoryRef.current.value
    let question = questionRef.current.value
    let correct = correctIdRef.current.value

    const answersArr = answers.map((a) => {
      return a.answer
    })

    await supabase
      .from(category)
      .insert([{ question: question, answers: answersArr, correctIdx: correct }])
  }

  return (
    <>
      <div className='qm-wrapper'>
        <input type='text' placeholder='Pytanie' ref={questionRef} />
        <ul className='question-answers'>
          <div className='answers'>
            {answers.map((a) => (
              <div className='answer' key={a.id}>
                <input
                  type='text'
                  placeholder='Odpowiedź'
                  value={answers[a.id].answer}
                  onChange={(e) => handleAnswersChange(a.id, e)}
                />
              </div>
            ))}
          </div>
        </ul>
        <input type='text' placeholder='ID Poprawnej odpowiedzi' ref={correctIdRef} />
        <label htmlFor='categories'>Kategoria</label>
        <select id='categories' ref={categoryRef}>
          <option value='q_math'>Matematyka</option>
          <option value='q_eng'>Język angielski</option>
        </select>
        <button onClick={() => handleAddQuestion()}>Dodaj pytanie</button>
      </div>
    </>
  )
}

export default QuestionManager
