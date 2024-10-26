import { useEffect, useState, useContext } from 'react'
import { supabase } from '@/supa/client'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '@/providers/AuthProvider'
import { useForm } from 'react-hook-form'
import Style from './Auth.styles.js'
import Topbar from '@/components/Topbar/Topbar.jsx'

const BASE_URL = 'http://localhost:5173'
const DONE_REDIRECT = '/dashboard'

const Auth = ({ type }) => {
  const { register, handleSubmit } = useForm()

  const [error, setError] = useState(null)

  const { session } = useContext(AuthContext)

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
          emailRedirectTo: `${BASE_URL}${DONE_REDIRECT}`,
        },
      })

      if (error) setError(error)
      else navigate(DONE_REDIRECT)
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

  useEffect(() => {
    if (error) {
      alert(error)
    }
  }, [error])

  return (
    <Style.AuthWrapper>
      <Topbar />
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
