import './Dashboard.scss'
import { AuthContext } from '@/providers/AuthProvider'
import { useContext } from 'react'

const Dashboard = () => {
  const {
    session: { user },
    signOut,
  } = useContext(AuthContext)

  console.log(user)

  return (
    <div className='dashboard-wrapper'>
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
            <button>GRAJ</button>
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
