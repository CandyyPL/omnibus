import { FC } from 'react'
import { HomeTopBarWrapper } from '@/components/Home/TopBar/HomeTopBar.styles'
import smallBusImg from '@/assets/bus-small.png'

const HomeTopBar: FC = () => {
  return (
    <HomeTopBarWrapper>
      <div className='center'>
        <img src={smallBusImg} alt='bus' />
        <span>OMNIBUS</span>
        <img src={smallBusImg} alt='bus' />
      </div>
      {/* <div className='buttons'></div> */}
    </HomeTopBarWrapper>
  )
}

export default HomeTopBar
