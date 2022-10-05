import { FC } from 'react'
import { HomeTopPartWrapper, TopPartInfoBox } from '@/components/Home/TopPart/HomeTopPart.styles'
import studentImg from '@/assets/student.png'

const HomeTopPart: FC = () => {
  return (
    <HomeTopPartWrapper>
      <div className='small-width'>
        <InfoBox />
        <img src={studentImg} alt='student' />
      </div>
      <div className='large-width'>
        <div className='join-motto'>
          <span>
            NIE CZEKAJ, <button>DOŁĄCZ</button> JUŻ TERAZ
          </span>
        </div>
        <div className='lower-content'>
          <img src={studentImg} alt='student' />
          <InfoBox />
        </div>
      </div>
    </HomeTopPartWrapper>
  )
}

const InfoBox: FC = () => {
  return (
    <TopPartInfoBox>
      <h1>Witaj w Omnibusie!</h1>
      <span>
        Jest to platforma quizowa stworzona dla uczniów. Odpowiadaj na pytania z dziedziny
        matematyki, informatyki czy języków obcych. Zdobywaj punkty i awansuj w rankingu.
        <br />
        <b>Powodzenia!</b>
      </span>
    </TopPartInfoBox>
  )
}

export default HomeTopPart
