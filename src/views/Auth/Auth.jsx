import './Auth.scss'
import { useContext, useEffect, useRef, useState } from 'react'
import { supabase } from '@/supa/client'
import { AuthContext } from '@/providers/AuthProvider'
import { postData } from '@/supa/dbFunctions'
import { useNavigate } from 'react-router-dom'

const Auth = ({ type }) => {
  const usernameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const passwordRepeatRef = useRef(null)

  const [error, setError] = useState(null)

  const { user, setUser } = useContext(AuthContext)

  const navigate = useNavigate()

  const auth = async () => {
    if (type === 'register') {
      const email = emailRef.current.value
      const password = passwordRef.current.value
      const passwordRepeat = passwordRepeatRef.current.value

      if (password !== passwordRepeat) return

      const { error } = await supabase.auth.signUp({
        email,
        password,
      })

      if (error) setError(error)
      else navigate('/quiz')
    } else if (type === 'login') {
      const email = emailRef.current.value
      const password = passwordRef.current.value

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) setError(error)
    }
  }

  const logout = async () => {
    const { error } = await supabase.auth.signOut()

    if (error) setError(error)
  }

  useEffect(() => {
    if (user) {
      const username = usernameRef.current.value
      postData('users', [{ uid: user.id, username }])
    }
  }, [user])

  useEffect(() => {
    if (error) {
      alert(error)
    }
  }, [error])

  return (
    <div className='auth-wrapper'>
      <button onClick={() => logout()}>WYLOGUJ</button>
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
