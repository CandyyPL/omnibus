import { FC } from 'react'
import {
  HomeJoinPartWrapper,
  JoinPartWarning,
  WarningBox,
} from '@/components/Home/JoinPart/HomeJoinPart.styles'
import bigBusImg from '@/assets/bus-big.png'
import JoinPartForm from '@/components/Home/JoinPartForm/JoinPartForm'

const HomeJoinPart: FC = () => {
  return (
    <HomeJoinPartWrapper>
      <JoinPartWarning>
        <img src={bigBusImg} alt='bus' />
        <WarningBox>
          <span>
            Pamiętaj, aby podane przez ciebie dane były poprawne. W przypadku podania niepoprawnych
            danych, możesz nie otrzymać nagród, a twoje konto może zostać usunięte!
          </span>
        </WarningBox>
      </JoinPartWarning>
      <JoinPartForm />
    </HomeJoinPartWrapper>
  )
}

export default HomeJoinPart
