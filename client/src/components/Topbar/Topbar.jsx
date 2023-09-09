import './Topbar.scss'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import busImg from '@/assets/img/bus.png'
import susImg from '@/assets/img/sus_color.png'

const Topbar = () => {
  const easterEggLetter = useRef(null)

  const [titleImg, setTitleImg] = useState(busImg)
  const SUS_MODE = false

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
      <div className='buttons'>
        <button className='reg' onClick={() => navigate('/register')}>
          Zarejestruj się
        </button>
        <button className='log' onClick={() => navigate('/login')}>
          Zaloguj się
        </button>
      </div>
    </div>
  )
}

export default Topbar
