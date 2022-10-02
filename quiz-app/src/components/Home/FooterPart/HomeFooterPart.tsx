import {
  Footer,
  HomeFooterPartWrapper,
  Quote,
} from '@/components/Home/FooterPart/HomeFooterPart.styles'
import { FC } from 'react'

const HomeFooterPart: FC = () => {
  return (
    <HomeFooterPartWrapper>
      <Quote>Standardowa edukacja zapewni Ci przeżycie. Samokształcenie - fortunę ~ Jim Rohn</Quote>
      <Footer>
        <span className='title'>Omnibus</span>
        <span className='subtitle'>Powered by Mechan Web Dev</span>
      </Footer>
    </HomeFooterPartWrapper>
  )
}

export default HomeFooterPart
