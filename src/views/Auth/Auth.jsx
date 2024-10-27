import { useEffect, useState, useContext } from 'react'
import { AuthContext } from '@/providers/AuthProvider'
import Topbar from '@/components/Topbar/Topbar.jsx'
import { useNavigate } from 'react-router-dom'
import closeImg from '@/assets/img/close.png'
import { useForm } from 'react-hook-form'
import { supabase } from '@/supa/client'
import Style from './Auth.styles.js'

const BASE_URL = 'http://localhost:5173'
const DONE_REDIRECT = '/dashboard'

const Auth = ({ type }) => {
  const { register, handleSubmit, reset } = useForm()

  const [error, setError] = useState(null)
  const [emailPopupVisible, setEmailPopupVisible] = useState(false)

  const navigate = useNavigate()

  const auth = async (data) => {
    if (type === 'register') {
      if (data.password !== data.passwordRepeat) return

      const { error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            username: data.username,
          },
          emailRedirectTo: `${BASE_URL}`,
        },
      })

      if (error) setError(error)
      else {
        clearForm()
        setEmailPopupVisible(true)
      }
    } else if (type === 'login') {
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      })

      if (error) setError(error)
      else navigate(DONE_REDIRECT)
    }
  }

  const logout = async () => {
    const { error } = await supabase.auth.signOut()

    if (error) setError(error)
  }

  const clearForm = () => {
    reset({ username: '', email: '', password: '', passwordRepeat: '' })
  }

  useEffect(() => {
    if (error) {
      alert(error)
    }
  }, [error])

  useEffect(() => {
    clearForm()
  }, [])

  return (
    <Style.AuthWrapper>
      <Topbar />
      {emailPopupVisible && (
        <Style.EmailPopup>
          <div className='email-popup-bg'>
            <div className='email-popup-content'>
              <button className='email-popup-close' onClick={() => setEmailPopupVisible(false)}>
                <img src={closeImg} alt='close' />
              </button>
              <span>
                Twoja rejestracja przebiegła pomyślnie! Pamiętaj aby potwierdzić swój adres e-mail.
                Masz na to 24 godziny.
              </span>
            </div>
          </div>
        </Style.EmailPopup>
      )}
      {/* {session?.user && <button onClick={() => logout()}>WYLOGUJ</button>} */}
      <Style.Form onSubmit={handleSubmit(auth)}>
        {type === 'register' ? <h1>Rejestracja</h1> : <h1>Logowanie</h1>}
        {type === 'register' ? (
          <input type='text' placeholder='Nazwa użytkownika' {...register('username')} />
        ) : null}

        <input type='text' placeholder='E-mail' {...register('email')} />
        <input type='password' placeholder='Hasło' {...register('password')} />

        {type === 'register' ? (
          <input type='password' placeholder='Powtórz hasło' {...register('passwordRepeat')} />
        ) : null}

        <button type='submit'>{type === 'register' ? 'Zarejestruj się' : 'Zaloguj się'}</button>
      </Style.Form>
    </Style.AuthWrapper>
  )
}

export default Auth
