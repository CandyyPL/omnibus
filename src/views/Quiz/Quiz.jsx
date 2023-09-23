import './Quiz.scss'
import { useContext, useEffect, useState } from 'react'
import { useQuery } from 'graphql-hooks'
import { QuizDataContext } from '@/providers/QuizDataProvider'

const Quiz = () => {
  const [quizData, setQuizData] = useState([])
  const [currentQuizData, setCurrentQuizData] = useState([])
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState()

  const [quizEnd, setQuizEnd] = useState(false)
  const [points, setPoints] = useState(0)

  const { quizCategory, availQuestionCount } = useContext(QuizDataContext)

  const [questionIds, setQuestionIds] = useState([])

  const getRandomIds = () => {
    let ids = []

    while (ids.length < 5) {
      let rand = Math.floor(Math.random() * availQuestionCount)
      if (!ids.includes(rand.toString())) ids.push(rand.toString())
      else continue
    }

    let res = '['

    ids.forEach((i) => {
      res += `"${i}", `
    })

    res = res.slice(0, -2)
    res += ']'

    return res
  }

  const getQuery = (subject) => {
    const args = `filter: { questionid: { in: ${questionIds} }, questiongroup: { eq: ${subject} } }`

    return `query Questions {
      allQuestions(${args}) {
        id
        questionid
        questiontitle
        questionimage {
          url
        }
        questionanswers {
          answer
          answerid
        }
        correctid
        questiongroup
      }
    }`
  }

  const { loading, data, error } = useQuery(getQuery(quizCategory.cat))

  const answer = (idx) => {
    if (idx == currentQuizData.correctid) {
      setPoints((prev) => prev + 1)
    }

    if (currentQuestionIdx + 1 == quizData.length) {
      setQuizEnd(true)
    } else if (currentQuestionIdx + 1 < quizData.length) {
      setCurrentQuestionIdx((prev) => prev + 1)
    }
  }

  useEffect(() => {
    setCurrentQuizData(quizData[currentQuestionIdx])
  }, [currentQuestionIdx])

  useEffect(() => {
    if (data) {
      setQuizData(data.allQuestions)
      setCurrentQuestionIdx(0)
    }
  }, [data])

  useEffect(() => {
    setQuestionIds(getRandomIds())
  }, [])

  return (
    <>
      {!error ? (
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
                    <div className='question'>{currentQuizData.questiontitle}</div>
                    <div className='answers'>
                      {currentQuizData.questionanswers.map((a) => (
                        <button
                          className='answer'
                          onClick={() => answer(a.answerid)}
                          key={a.answerid}>
                          {a.answer}
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
      ) : (
        <div className='error'>ERROR</div>
      )}
    </>
  )
}

export default Quiz
