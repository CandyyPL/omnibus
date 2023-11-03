import './Topbar-Desktop.scss'
import './Topbar-Mobile.scss'
import { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import busImg from '@/assets/img/bus.png'
import susImg from '@/assets/img/sus_color.png'
import { AuthContext } from '@/providers/AuthProvider'

const Topbar = () => {
  const easterEggLetter = useRef(null)

  const [titleImg, setTitleImg] = useState(busImg)
  const SUS_MODE = false

  const [isBurgerActive, setIsBurgerActive] = useState(false)

  useEffect(() => {
    if (SUS_MODE) {
      easterEggLetter.current.addEventListener('mouseenter', (e) => easterEgg(e))
      easterEggLetter.current.addEventListener('mouseleave', (e) => easterEgg(e))
    }
  }, [])

  const easterEgg = (e) => {
    if (e.type == 'mouseenter') {
      e.target.innerHTML = 'S'
      setTitleImg(susImg)
    } else {
      e.target.innerHTML = 'B'
      setTitleImg(busImg)
    }
  }

  const { session } = useContext(AuthContext)

  const navigate = useNavigate()

  return (
    <div className='topbar-wrapper'>
      <div className='title'>
        <img src={titleImg} className='left' />
        <span className='text'>
          OMNI<span ref={easterEggLetter}>B</span>US
        </span>
        <img src={titleImg} className='right' />
      </div>
      <button
        className={`burger ${isBurgerActive ? 'active' : ''}`}
        onClick={() => setIsBurgerActive(!isBurgerActive)}>
        <span className='burger-box'>
          <span className='burger-inner'></span>
        </span>
      </button>
      <div className='buttons'>
        {session?.user ? null : (
          <button className='reg' onClick={() => navigate('/register')}>
            Zarejestruj się
          </button>
        )}
        {session?.user ? (
          <button className='dshb' onClick={() => navigate('/dashboard')}>
            Dashboard
          </button>
        ) : (
          <button className='log' onClick={() => navigate('/login')}>
            Zaloguj się
          </button>
        )}
      </div>
      <div className={`burger-menu-overlay ${isBurgerActive ? 'active' : ''}`}>
        <div className='burger-menu'>
          <div className='burger-buttons'>
            {/* {session?.user ? null : (
              <button className='reg' onClick={() => navigate('/register')}>
                Zarejestruj się
              </button>
            )} */}
            {session?.user ? (
              <button className='dshb' onClick={() => navigate('/dashboard')}>
                Dashboard
              </button>
            ) : (
              <button className='log' onClick={() => navigate('/login')}>
                Zaloguj się
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
