import './Dashboard-Desktop.scss'
import { QuizDataContext } from '@/providers/QuizDataProvider'
import { AuthContext } from '@/providers/AuthProvider'
import { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '@/supa/client'

import closeImg from '@/assets/img/close.png'

import rankImg0 from '@/assets/img/elements/copper.png'
import rankImg1 from '@/assets/img/elements/silver.png'
import rankImg2 from '@/assets/img/elements/gold.png'
import rankImg3 from '@/assets/img/elements/hydrogen.png'
import rankImg4 from '@/assets/img/elements/platinum.png'
import rankImg5 from '@/assets/img/elements/titanium.png'
import rankImg6 from '@/assets/img/elements/uranium.png'
import rankImg7 from '@/assets/img/elements/xenon.png'

const STORAGE_QUIZ_DATA_ID = 'current_quiz_data'

const RANKS = [
  {
    id: 'copper',
    name: 'Miedź',
    img: rankImg0,
  },
  {
    id: 'silver',
    name: 'Srebro',
    img: rankImg1,
  },
  {
    id: 'gold',
    name: 'Złoto',
    img: rankImg2,
  },
  {
    id: 'hydrogen',
    name: 'Wodór',
    img: rankImg3,
  },
  {
    id: 'platinium',
    name: 'Platyna',
    img: rankImg4,
  },
  {
    id: 'titanium',
    name: 'Tytan',
    img: rankImg5,
  },
  {
    id: 'uranium',
    name: 'Uran',
    img: rankImg6,
  },
  {
    id: 'xenon',
    name: 'Xenon',
    img: rankImg7,
  },
]

const Dashboard = () => {
  const {
    session: { user },
    signOut,
  } = useContext(AuthContext)

  const { setQuizCategory, setAvailQuestionCount } = useContext(QuizDataContext)

  const navigate = useNavigate()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [questionGroups, setQuestionGroups] = useState([])
  const [username, setUsername] = useState(null)
  const [totalScore, setTotalScore] = useState(0)

  const [userRank, setUserRank] = useState(4)
  const [userLevel, setUserLevel] = useState(13)

  const [rtChange, setRtChange] = useState(null)

  const levelBarRef = useRef()

  useEffect(() => {
    sessionStorage.removeItem(STORAGE_QUIZ_DATA_ID)
    ;(async () => {
      const { data } = await supabase
        .from('users')
        .select('uid,username,totalScore')
        .eq('uid', user.id)

      if (data == null || data.length == 0) {
        await supabase
          .from('users')
          .insert([{ uid: user.id, username: user.user_metadata.username }])
      } else {
        setUsername(data[0].username)
        setTotalScore(data[0].totalScore)
      }
    })()
  }, [])

  // useEffect(() => {
  //   supabase
  //     .channel('any')
  //     .on(
  //       'postgres_changes',
  //       { event: 'UPDATE', schema: 'public', table: 'users', filter: `uid=eq.${user.id}` },
  //       (payload) => {
  //         setRtChange(payload)
  //       }
  //     )
  //     .subscribe()
  // }, [])

  // useEffect(() => {
  //   if (rtChange) {
  //     if (rtChange.new.username !== undefined) setUsername(rtChange.new.username)
  //   }
  // }, [rtChange])

  // useEffect(() => {
  //   if (data) {
  //     setQuestionGroups(data.allQuestiongroups)
  //     setAvailQuestionCount(data._allQuestionsMeta.count)
  //   }
  // }, [data])

  const selectCategory = async (c) => {
    const { count } = await supabase.from(c.cid).select('*', { count: 'exact' })

    setQuizCategory({ cat: c.cid, name: c.name })
    setAvailQuestionCount(count)

    navigate('/quiz')
  }

  useEffect(() => {
    ;(async () => {
      const { data } = await supabase.from('categories').select('id,cid,name')

      if (data.length) {
        setQuestionGroups(data)
      }
    })()
  }, [])

  const setLevelBar = (progress) => {
    levelBarRef.current.style.setProperty('--bar-progress', `${progress}%`)
  }

  return (
    <div className="dashboard-wrapper">
      {isModalOpen && (
        <div className="category-modal-bg">
          <div className="category-modal">
            <button className="close" onClick={() => setIsModalOpen(false)}>
              <img src={closeImg} alt="close" />
            </button>
            {questionGroups.map((c) => (
              <button className="subject" key={c.id} onClick={() => selectCategory(c)}>
                {c.name}
              </button>
            ))}
          </div>
        </div>
      )}
      <div className="sidebar">
        <div className="logo">OMNIBUS</div>
        <ul className="menu-links">
          <li onClick={() => navigate('/dashboard')}>Dashboard</li>
          <li onClick={() => navigate('/ranking')}>Ranking</li>
          <li onClick={() => navigate('/setiings')}>Ustawienia</li>
        </ul>
        <button onClick={() => signOut()}>WYLOGUJ</button>
      </div>
      <div className="main-content">
        <div className="topbar">
          <p>
            Zalogowano jako <span className="username">{username}</span> ({user.email})
          </p>
        </div>
        <div className="content-inner">
          <div className="user-info">
            <div className="rank-info">
              <div className="rank-img">
                <img src={RANKS[userRank].img} alt={RANKS[userRank].id} />
              </div>
              <div className="rank-name">
                Ranga {userRank + 1}: {RANKS[userRank].name}
              </div>
            </div>
            <div className="level-info">
              <div className="level">Poziom {userLevel}</div>
              <div className="level-bar" ref={levelBarRef}></div>
              <div className="games-info">
                <div className="ov-score">
                  <span className="desc">ŁĄCZNY WYNIK</span>
                  <span className="value">{totalScore}</span>
                </div>
                <div className="fav-subject">
                  <span className="desc">ULUBIONY PRZEDMIOT</span>
                  <span className="value">PROGRAMOWANIE</span>
                </div>
                <div className="last-game">
                  <span className="desc">OSTATNIA GRA</span>
                  <span className="value">12 DNI TEMU</span>
                </div>
              </div>
            </div>
          </div>
          <div className="game-info-wrapper">
            <div className="game-info">
              <div className="game-buttons">
                <button className="play" onClick={() => setIsModalOpen(true)}>
                  GRAJ
                </button>
                <button className="history">HISTORIA GIER</button>
              </div>
              <div className="last-game-info">
                <div className="title">OSTATNIA GRA</div>
                <div className="info">
                  <div className="subject">
                    <span className="value">PROGRAMOWANIE</span>
                    <span className="name">PRZEDMIOT</span>
                  </div>
                  <div className="answers">
                    <span className="value">9 na 10</span>
                    <span className="name">POPRAWNE ODPOWIEDZI</span>
                  </div>
                  <div className="score">
                    <span className="value">2137</span>
                    <span className="name">WYNIK</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="last-achv">
              <div className="title">OSTATNIE OSIĄGNIĘCIA</div>
              <div className="content">
                {['x', 'd', 'c'].map((a) => (
                  <div className="achv">
                    <div className="image">
                      <img src="https://placehold.co/512" alt="achv-image" />
                    </div>
                    <div className="title">Lorem, ipsum dolor.</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
