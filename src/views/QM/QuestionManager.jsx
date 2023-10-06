import './QuestionManager.scss'
import { useEffect, useRef, useState } from 'react'
import { supabase } from '@/supa/client'

const QuestionManager = () => {
  const questionRef = useRef(null)
  const correctIdRef = useRef(null)
  const categoryRef = useRef(null)
  const tagsRef = useRef(null)

  const [categories, setCategoreis] = useState([])

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
    let tags = tagsRef.current.value.split(',')

    console.log(tags)

    await supabase
      .from(category)
      .insert([{ question: question, answers, correctIdx: correct, tags }])
  }

  useEffect(() => {
    ;(async () => {
      const { data } = await supabase.from('categories').select('cid,name')
      setCategoreis(data)
    })()
  }, [])

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
        <input type='text' placeholder='TAGS' ref={tagsRef} />
        <label htmlFor='categories'>Kategoria</label>
        <select id='categories' ref={categoryRef}>
          {categories &&
            categories.map((c) => (
              <option value={c.cid} key={c.cid}>
                {c.name}
              </option>
            ))}
        </select>
        <button onClick={() => handleAddQuestion()}>Dodaj pytanie</button>
      </div>
    </>
  )
}

export default QuestionManager
