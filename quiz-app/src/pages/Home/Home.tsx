import HomeFooterPart from '@/components/Home/FooterPart/HomeFooterPart'
import HomeJoinPart from '@/components/Home/JoinPart/HomeJoinPart'
import HomeTopBar from '@/components/Home/TopBar/HomeTopBar'
import HomeTopPart from '@/components/Home/TopPart/HomeTopPart'
import { HomeWrapper } from '@/pages/Home/Home.styles'
import { FC } from 'react'

const Home: FC = () => {
  return (
    <HomeWrapper>
      <HomeTopBar />
      <HomeTopPart />
      <HomeJoinPart />
      <HomeFooterPart />
    </HomeWrapper>
  )
}

export default Home
