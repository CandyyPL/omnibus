import { useEffect, useRef, useState } from 'react'
import busImg from '@/assets/img/bus.png'
import susImg from '@/assets/img/sus_color.png'
import { TopbarWrapper } from '@/components/Topbar/Topbar.styles.js'

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

  return (
    <TopbarWrapper>
      <div className='title'>
        <img src={titleImg} className='left' />
        <span className='text'>
          OMNI<span ref={easterEggLetter}>B</span>US
        </span>
        <img src={titleImg} className='right' />
      </div>
      <div className='buttons'>
        <button className='reg'>Zarejestruj się</button>
        <button className='log'>Zaloguj się</button>
      </div>
    </TopbarWrapper>
  )
}

export default Topbar
