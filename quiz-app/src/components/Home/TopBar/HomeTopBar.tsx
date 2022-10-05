import { FC } from 'react'
import { HomeTopBarWrapper } from '@/components/Home/TopBar/HomeTopBar.styles'
import loginImg from '@/assets/login.png'
import smallBusImg from '@/assets/bus-small.png'

const HomeTopBar: FC = () => {
  return (
    <HomeTopBarWrapper>
      <div className='small-width'>
        <span>OMNIBUS</span>
        <img src={loginImg} alt='bus' />
      </div>
      <div className='large-width'>
        <div className='left'></div>
        <div className='center'>
          <img src={smallBusImg} alt='bus' />
          <span>OMNIBUS</span>
          <img src={smallBusImg} alt='bus' />
        </div>
        <div className='right'>
          <button>ZALOGUJ SIĘ</button>
        </div>
      </div>
    </HomeTopBarWrapper>
  )
}

export default HomeTopBar
