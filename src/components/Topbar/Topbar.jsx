import TopbarButtons from '@/components/TopbarButtons/TopbarButtons.jsx'
import busImg from '@/assets/img/bus.png'
import Style from './Topbar.styles.js'
import { useState } from 'react'

const Topbar = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false)

  const handleCloseMenu = () => {
    setIsBurgerActive(false)
  }

  return (
    <Style.TopbarWrapper>
      <Style.MenuWrapper className={`${isBurgerActive ? 'active' : ''}`}>
        <TopbarButtons closeFunction={handleCloseMenu} />
      </Style.MenuWrapper>
      <Style.Title>
        {/* <img src={busImg} className='left' /> */}
        <a href='/' className='text'>
          OMNIBUS
        </a>
        {/* <img src={busImg} className='right' /> */}
      </Style.Title>
      <Style.Burger
        className={`${isBurgerActive ? 'active' : ''}`}
        onClick={() => setIsBurgerActive(!isBurgerActive)}>
        <span className='burger-box'>
          <span className='burger-inner'></span>
        </span>
      </Style.Burger>
      <Style.TopbarButtons>
        <TopbarButtons />
      </Style.TopbarButtons>
    </Style.TopbarWrapper>
  )
}

export default Topbar
