import {
  ClassChoice,
  ClassOption,
  JoinPartFormWrapper,
} from '@/components/Home/JoinPartForm/JoinPartForm.styles'
import { FC, useEffect } from 'react'

const JoinPartForm: FC = () => {
  useEffect(() => {
    const viewHeight = window.innerHeight
    const viewWidth = window.innerWidth
    const viewport = document.querySelector('meta[name=viewport]')!

    viewport.setAttribute(
      'content',
      'height=' + viewHeight + 'px, width=' + viewWidth + 'px, initial-scale=1'
    )
  }, [])

  return (
    <JoinPartFormWrapper>
      <h1>Zapisz się</h1>
      <input type='text' placeholder='Imię i nazwisko' />
      <input type='text' placeholder='Adres e-mail' />
      <ClassChoice>
        <span>Klasa: </span>
        <ClassOption>1</ClassOption>
        <ClassOption>2</ClassOption>
        <ClassOption>3</ClassOption>
        <ClassOption>4</ClassOption>
        {/* <div className='classOption'>5</div> */}
      </ClassChoice>
      <button type='submit'>WYŚLIJ ZGŁOSZENIE</button>
    </JoinPartFormWrapper>
  )
}

export default JoinPartForm
