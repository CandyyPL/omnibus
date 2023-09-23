import { QuizDataContext } from '@/providers/QuizDataProvider'
import './Dashboard.scss'
import { AuthContext } from '@/providers/AuthProvider'
import { useQuery } from 'graphql-hooks'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CATEGORIES_QUERY = `query QuestionGroups {
  allQuestiongroups {
    id
    groupid
    group
  }

  _allQuestionsMeta {
    count
  }
}`

const Dashboard = () => {
  const {
    session: { user },
    signOut,
  } = useContext(AuthContext)

  const { setQuizCategory, setAvailQuestionCount } = useContext(QuizDataContext)

  const navigate = useNavigate()

  const [isModalOpen, setIsModalOpen] = useState(false)

  const { loading, data, error } = useQuery(CATEGORIES_QUERY)

  const [questionGroups, setQuestionGroups] = useState([])

  useEffect(() => {
    if (data) {
      setQuestionGroups(data.allQuestiongroups)
      setAvailQuestionCount(data._allQuestionsMeta.count)
    }
  }, [data])

  const selectCategory = (c) => {
    setQuizCategory({ cat: c.groupid, name: c.group })
    navigate('/quiz')
  }

  return (
    <div className='dashboard-wrapper'>
      {isModalOpen && !loading && (
        <div className='category-modal-bg'>
          <div className='category-modal'>
            <ul>
              {questionGroups.map((c) => (
                <button key={c.id} onClick={() => selectCategory(c)}>
                  {c.group}
                </button>
              ))}
            </ul>
          </div>
        </div>
      )}
      <div className='sidebar'>
        <div className='logo'>OMNIBUS</div>
        <ul className='main-links'>
          <li>Dashboard</li>
          <li>Ranking</li>
          <li>Ustawienia</li>
        </ul>
        <button onClick={() => signOut()}>WYLOGUJ</button>
      </div>
      <div className='main-content'>
        <div className='main-topbar'></div>
        <div className='user-info'>
          <div className='rank-info'>
            <div className='rank-img'></div>
            <div className='rank-name'></div>
          </div>
          <div className='level-info'>
            <div className='level'></div>
            <div className='level-bar'></div>
            <div className='games-info'>
              <div className='highest-score'></div>
              <div className='fav-subject'></div>
              <div className='last-game'></div>
            </div>
          </div>
        </div>
        <div className='game-info'>
          <div className='game-buttons'>
            <button onClick={() => setIsModalOpen(true)}>GRAJ</button>
            <button>HISTORIA GIER</button>
          </div>
          <div className='last-game-info'></div>
        </div>
        <div className='divider'></div>
        <div className='last-achv'></div>
      </div>
    </div>
  )
}

export default Dashboard
