import './Quiz.scss'
import { useContext, useEffect, useState } from 'react'
import { useManualQuery } from 'graphql-hooks'
import { QuizDataContext } from '@/providers/QuizDataProvider'

const QUESTIONS_QUERY = `query Questions($questionIds: [String]!, $questionCategory: String!) {
  allQuestions(filter: { questionid: { in: $questionIds }, questiongroup: { eq: $questionCategory } }) {
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

const STORAGE_QUIZ_DATA_ID = 'current_quiz_data'

const Quiz = () => {
  const [currentQuizData, setCurrentQuizData] = useState(null)
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(null)

  const [quizData, setQuizData] = useState(null)
  const { quizCategory, availQuestionCount } = useContext(QuizDataContext)
  const [questionIds, setQuestionIds] = useState(null)

  const [loading, setLoading] = useState(true)

  const [getQuestions, { loading: queryLoading, data: queryData, error: queryError }] =
    useManualQuery(QUESTIONS_QUERY)

  const [quizEnd, setQuizEnd] = useState(false)
  const [points, setPoints] = useState(0)

  // Get specific amount of random ids
  const getRandomIds = () => {
    let ids = []
    let amount = 10

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
        console.log(questionIds)
        await getQuestions({
          variables: {
            questionIds,
            questionCategory: quizCategory.cat,
          },
        })
      })()
    }
  }, [questionIds])

  // On got questions, set states
  useEffect(() => {
    if (queryData) {
      setQuizData(queryData.allQuestions)
      console.log(queryData)
      setCurrentQuestionIdx(0)
      console.log('got questions')
    }
  }, [queryData])

  // On set quiz data, set current data
  useEffect(() => {
    if (!!quizData && quizData.length > 0 && currentQuestionIdx !== null) {
      setCurrentQuizData(quizData[currentQuestionIdx])
      console.log('set curr question data')

      console.log(quizData)
    }
  }, [quizData, currentQuestionIdx])

  // On set current data, save it to storage
  useEffect(() => {
    if (currentQuizData !== null) {
      sessionStorage.setItem(STORAGE_QUIZ_DATA_ID, JSON.stringify(currentQuizData))
      setLoading(false)
      console.log('done')

      console.log(quizData)
      console.log(currentQuizData)
    }
  }, [currentQuizData])

  // Answer
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

  return (
    <>
      {!queryError ? (
        <>
          {!loading && !queryLoading && currentQuizData ? (
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
