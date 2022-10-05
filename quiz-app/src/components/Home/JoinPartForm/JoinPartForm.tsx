import {
  ClassChoice,
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
        <div className='option'>1</div>
        <div className='option'>2</div>
        <div className='option'>3</div>
        <div className='option'>4</div>
        {/* <div className='classOption'>5</div> */}
      </ClassChoice>
      <button type='submit'>WYŚLIJ ZGŁOSZENIE</button>
    </JoinPartFormWrapper>
  )
}

export default JoinPartForm
