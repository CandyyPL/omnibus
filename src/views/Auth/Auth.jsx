import './Auth.scss'
import { useEffect, useRef, useState, useContext } from 'react'
import { supabase } from '@/supa/client'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '@/providers/AuthProvider'

const BASE_URL = 'http://localhost:5173'
const DONE_REDIRECT = '/dashboard'

const Auth = ({ type }) => {
  const usernameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const passwordRepeatRef = useRef(null)

  const [error, setError] = useState(null)

  const { session } = useContext(AuthContext)

  const navigate = useNavigate()

  const auth = async () => {
    if (type === 'register') {
      const username = usernameRef.current.value
      const email = emailRef.current.value
      const password = passwordRef.current.value
      const passwordRepeat = passwordRepeatRef.current.value

      if (password !== passwordRepeat) return

      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username,
          },
          emailRedirectTo: `${BASE_URL}${DONE_REDIRECT}`,
        },
      })

      if (error) setError(error)
      else navigate(DONE_REDIRECT)
    } else if (type === 'login') {
      const email = emailRef.current.value
      const password = passwordRef.current.value

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
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
    <div className='auth-wrapper'>
      {session?.user && <button onClick={() => logout()}>WYLOGUJ</button>}
      <div className='form'>
        {type === 'register' ? (
          <input type='text' placeholder='Nazwa użytkownika' ref={usernameRef} />
        ) : null}
        <input type='text' placeholder='E-mail' ref={emailRef} />
        <input type='password' placeholder='Hasło' ref={passwordRef} />
        {type === 'register' ? (
          <input type='password' placeholder='Powtórz hasło' ref={passwordRepeatRef} />
        ) : null}
        <button onClick={() => auth()}>
          {type === 'register' ? 'Zarejestruj się' : 'Zaloguj się'}
        </button>
      </div>
    </div>
  )
}

export default Auth
