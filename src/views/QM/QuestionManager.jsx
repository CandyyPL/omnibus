import './QuestionManager.scss'
import { useEffect, useState } from 'react'
import { supabase } from '@/supa/client'
import { useForm } from 'react-hook-form'

const QuestionManager = () => {
  const [categories, setCategoreis] = useState([])
  const [answers, setAnswers] = useState([0, 1, 2, 3])

  const { register, handleSubmit } = useForm()

  const handleAddQuestion = async (formData) => {
    console.log(formData)

    let category = formData.category
    let tags = formData.tags.split(',')
    let ansarr = []

    formData.answers.forEach((a) => {
      let currIdx = formData.answers.indexOf(a)

      if (a !== '') ansarr.push({ id: currIdx, answer: a })
    })

    const { data: asd } = await supabase.from(category).select('id')
    let lastId = asd[asd.length - 1].id

    const question = {
      id: lastId + 1,
      question: formData.question,
      answers: ansarr,
      correctIdx: formData.correct,
      tags,
    }

    await supabase.from(category).insert([question])
  }

  useEffect(() => {
    ;(async () => {
      const { data } = await supabase.from('categories').select('cid,name')
      setCategoreis(data)
    })()
  }, [])

  return (
    <>
      <div className="qm-wrapper">
        <form onSubmit={handleSubmit(handleAddQuestion)}>
          <input type="text" placeholder="Pytanie" {...register('question', { required: true })} />
          <ul className="question-answers">
            <div className="answers">
              {answers.map((a) => (
                <div className="answer" key={a}>
                  <input
                    type="text"
                    placeholder={`Odpowiedź ${a}`}
                    {...register(`answers.${a}`, { required: true })}
                  />
                </div>
              ))}
            </div>
          </ul>
          <input
            type="text"
            placeholder="ID Poprawnej odpowiedzi"
            {...register('correct', { required: true })}
          />
          <input type="text" placeholder="TAGS" {...register('tags', { required: true })} />
          <select id="categories" {...register('category', { required: true })}>
            <option value="">Select category</option>
            {categories &&
              categories.map((c) => (
                <option value={c.cid} key={c.cid}>
                  {c.name}
                </option>
              ))}
          </select>
          <button type="submit" class="add">
            Dodaj pytanie
          </button>
        </form>
      </div>
    </>
  )
}

export default QuestionManager
