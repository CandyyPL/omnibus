import './Welcome-Desktop.scss'
import './Welcome-Mobile.scss'
import mainSchoolBusImg from '@/assets/img/main_school_bus.png'
import Topbar from '@/components/Topbar/Topbar.jsx'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const primaryState = { 0: false, 1: false, 2: false, 3: false, 4: false }

const Welcome = () => {
  const [gradeStates, setGradeStates] = useState(primaryState)

  const selectGrade = (idx) => {
    let primary = primaryState
    setGradeStates(primary)
    setGradeStates({ [idx]: true })
  }

  const { register, handleSubmit } = useForm()

  const onSubmit = (d) => {
    let grade = Number(Object.entries(gradeStates)[0][0]) + 1

    d = { ...d, grade }

    // send application
  }

  return (
    <div className='welcome-wrapper'>
      <Topbar />
      <div className='welcome-content'>
        <div className='bus-img'>
          <img src={mainSchoolBusImg} />
        </div>
        <div className='welcome-info'>
          <section className='about'>
            <h2>Czym jest OMNIBUS ?</h2>
            <div className='cards'>
              <div className='card st'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ducimus minus
                  voluptatem omnis iusto eum aperiam incidunt voluptate tempore iste sit adipisci
                  dolorem saepe, odio animi maxime, fugiat eos explicabo.
                </p>
              </div>
              <div className='card nd'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ducimus minus
                  voluptatem omnis iusto eum aperiam incidunt voluptate tempore iste sit adipisci
                  dolorem saepe, odio animi maxime, fugiat eos explicabo.
                </p>
              </div>
              <div className='card rd'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ducimus minus
                  voluptatem omnis iusto eum aperiam incidunt voluptate tempore iste sit adipisci
                  dolorem saepe, odio animi maxime, fugiat eos explicabo.
                </p>
              </div>
              <div className='card th'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ducimus minus
                  voluptatem omnis iusto eum aperiam incidunt voluptate tempore iste sit adipisci
                  dolorem saepe, odio animi maxime, fugiat eos explicabo.
                </p>
              </div>
            </div>
          </section>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='join-form'>
          <h2>Zapisz się</h2>
          <input type='text' placeholder='Imię i nazwisko' {...register('fname')} />
          <input type='text' placeholder='Adres e-mail' {...register('mail')} />
          <div className='grade-select'>
            <span>Klasa:</span>
            <div
              className={`grade ${gradeStates[0] ? 'selected' : ''}`}
              onClick={() => selectGrade(0)}>
              1
            </div>
            <div
              className={`grade ${gradeStates[1] ? 'selected' : ''}`}
              onClick={() => selectGrade(1)}>
              2
            </div>
            <div
              className={`grade ${gradeStates[2] ? 'selected' : ''}`}
              onClick={() => selectGrade(2)}>
              3
            </div>
            <div
              className={`grade ${gradeStates[3] ? 'selected' : ''}`}
              onClick={() => selectGrade(3)}>
              4
            </div>
            <div
              className={`grade ${gradeStates[4] ? 'selected' : ''}`}
              onClick={() => selectGrade(4)}>
              5
            </div>
          </div>
          <input type='text' placeholder='Profil nauki' {...register('profile')} />
          <button type='submit'>Wyślij zgłoszenie</button>
        </form>
      </div>
      <footer>
        <span>
          Powered by{' '}
          <a href='https://github.com/CandyyPL' target='_blank'>
            CandyyPL
          </a>
        </span>
      </footer>
    </div>
  )
}

export default Welcome
