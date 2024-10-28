import TopbarButtons from '@/components/TopbarButtons/TopbarButtons.jsx'
import Style from './Topbar.styles.js'
import { useState } from 'react'

const DEFAULT_TITLE = 'OMNIBUS'
const DEFAULT_TITLE_URL = '/'

const Topbar = ({ title = DEFAULT_TITLE, titleUrl = DEFAULT_TITLE_URL }) => {
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
        <a href={titleUrl} className='text'>
          {title}
        </a>
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
