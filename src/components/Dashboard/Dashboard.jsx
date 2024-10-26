import { useContext, useEffect, useRef, useState } from 'react'
import { QuizDataContext } from '@/providers/QuizDataProvider'
import { AuthContext } from '@/providers/AuthProvider'
import { useNavigate } from 'react-router-dom'
import closeImg from '@/assets/img/close.png'
import Style from './Dashboard.styles.js'
import { supabase } from '@/supa/client'
import ranks from '@/helpers/ranks'
import 'moment/dist/locale/pl'
import moment from 'moment'

const STORAGE_QUIZ_DATA_ID = 'omnibus_quiz_data'
moment.locale('pl')

const Dashboard = () => {
  const {
    session: { user },
  } = useContext(AuthContext)

  const { setQuizCategory, setAvailQuestionCount, clearProviderStates } =
    useContext(QuizDataContext)

  const navigate = useNavigate()

  const [isModalOpen, setIsModalOpen] = useState(false)

  const [questionGroups, setQuestionGroups] = useState([])
  const [userData, setUserData] = useState(null)
  const [lastGame, setLastGame] = useState(null)

  const [loading, setLoading] = useState(true)

  const levelBarRef = useRef()

  useEffect(() => {
    sessionStorage.removeItem(STORAGE_QUIZ_DATA_ID)
    clearProviderStates()
    ;(async () => {
      const { data } = await supabase
        .from('users')
        .select('uid,username,totalScore,rank,level,favSubject,lastGame')
        .eq('uid', user.id)

      const { data: catData } = await supabase.from('categories').select('id,cid,name')

      let gamesData = null

      if (data != null && data.length > 0 && data[0].lastGame != undefined) {
        gamesData = await supabase
          .from('games')
          .select('*')
          .eq('player', user.id)
          .eq('uuid', data[0].lastGame)
      }

      if (catData) {
        setQuestionGroups(catData)
      }

      if (data) {
        setUserData(data[0])
      }

      if (gamesData) {
        setLastGame(gamesData.data[0])
      }

      if (data == null || data.length == 0) {
        await supabase
          .from('users')
          .insert([{ uid: user.id, username: user.user_metadata.username }])
      }

      setLoading(false)
    })()
  }, [])

  const initQuiz = async (c) => {
    const { count } = await supabase.from(c.cid).select('*', { count: 'exact' })

    setQuizCategory({ cat: c.cid, name: c.name })
    setAvailQuestionCount(count)

    navigate('/quiz')
  }

  const setLevelBar = (progress) => {
    levelBarRef.current.style.setProperty('--bar-progress', `${progress}%`)
  }

  return (
    !loading && (
      <Style.DashboardWrapper>
        {isModalOpen && (
          <Style.CategoryModal>
            <div className='bg'>
              <div className='category-modal'>
                <button className='close' onClick={() => setIsModalOpen(false)}>
                  <img src={closeImg} alt='close' />
                </button>
                {questionGroups.map((c) => (
                  <button className='subject' key={c.id} onClick={() => initQuiz(c)}>
                    {c.name}
                  </button>
                ))}
              </div>
            </div>
          </Style.CategoryModal>
        )}
        <Style.MainContent>
          <div className='topbar'>
            <span>
              Zalogowano jako <span className='username'>{userData.username}</span> ({user.email})
            </span>
          </div>
          <div className='main-content'>
            <div className='user-info'>
              <div className='rank-info'>
                <div className='rank-img'>
                  <img src={ranks[userData.rank].img} alt={ranks[userData.rank].id} />
                </div>
                <div className='rank-name'>
                  Ranga {userData.rank + 1}: {ranks[userData.rank].name}
                </div>
              </div>
              <div className='level-info'>
                <div className='level'>Poziom {userData.level}</div>
                <div className='level-bar' ref={levelBarRef}></div>
                <div className='games-info'>
                  <div className='ov-score info-card'>
                    <span className='desc'>CAŁKOWITY WYNIK</span>
                    <span className='value'>{userData.totalScore}</span>
                  </div>
                  <div className='fav-subject info-card'>
                    <span className='desc'>ULUBIONY PRZEDMIOT</span>
                    <span className='value'>
                      {questionGroups.find((e) => e.cid == userData.favSubject)
                        ? questionGroups.find((e) => e.cid == userData.favSubject).name
                        : 'Brak'}
                    </span>
                  </div>
                  <div className='last-game info-card'>
                    <span className='desc'>OSTATNIA GRA</span>
                    <span className='value'>
                      {lastGame && lastGame.time
                        ? moment(lastGame.time).fromNow().toUpperCase()
                        : 'NIGDY'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='game-info-wrapper'>
              <div className='game-info'>
                <div className='game-buttons'>
                  <button className='play' onClick={() => setIsModalOpen(true)}>
                    GRAJ
                  </button>
                  <button className='history'>HISTORIA GIER</button>
                </div>
                <div className='last-game-info'>
                  <div className='title'>OSTATNIA GRA</div>
                  <div className='info'>
                    <div className='subject'>
                      <span className='value'>
                        {lastGame && lastGame.subject
                          ? questionGroups.find((e) => e.cid == lastGame.subject).name.toUpperCase()
                          : '----'}
                      </span>
                      <span className='name'>PRZEDMIOT</span>
                    </div>
                    <div className='answers'>
                      <span className='value'>
                        {lastGame && lastGame.questionsData
                          ? `${lastGame.correctAnswers} na ${lastGame.questionsData.length}`
                          : '----'}
                      </span>
                      <span className='name'>POPRAWNE ODPOWIEDZI</span>
                    </div>
                    <div className='score'>
                      <span className='value'>
                        {lastGame && lastGame.score ? lastGame.score : '----'}
                      </span>
                      <span className='name'>WYNIK</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='last-achv'>
                <div className='title'>OSTATNIE OSIĄGNIĘCIA</div>
                <div className='achv-content'>
                  {['x', 'd', 'c'].map((a) => (
                    <div className='achv' key={a}>
                      <div className='image'>
                        <img src='https://placehold.co/512' alt='achv-image' />
                      </div>
                      <div className='title'>Lorem, ipsum dolor.</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Style.MainContent>
      </Style.DashboardWrapper>
    )
  )
}

export default Dashboard
