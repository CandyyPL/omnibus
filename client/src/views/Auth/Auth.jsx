import { useEffect, useRef, useState } from 'react'
import './Auth.scss'
import { supabase } from '@/supa/client'

const Auth = ({ type }) => {
  const usernameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const passwordRepeatRef = useRef(null)

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  const auth = async () => {
    if (type === 'register') {
      const username = usernameRef.current.value
      const email = emailRef.current.value
      const password = passwordRef.current.value
      const passwordRepeat = passwordRepeatRef.current.value

      if (password !== passwordRepeat) return

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      })

      if (error) setError(error)
      if (data) setData(data)
    } else if (type === 'login') {
      const email = emailRef.current.value
      const password = passwordRef.current.value

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) setError(error)
      if (data) setData(data)
    }
  }

  const logout = async () => {
    const { error } = await supabase.auth.signOut()

    if (error) setError(error)
  }

  useEffect(() => {
    console.log(data)
  }, [data])

  useEffect(() => {
    console.log(error)
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
