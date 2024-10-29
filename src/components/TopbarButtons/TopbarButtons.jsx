import { AuthContext } from '@/providers/AuthProvider.jsx'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Style from './TopbarButtons.styles.js'
import { supabase } from '@/supa/client.js'

const LOGOUT_REDIRECT = '/'

const TopbarMenu = ({ closeFunction }) => {
  const { session } = useContext(AuthContext)

  const [error, setError] = useState('')

  const navigate = useNavigate()

  const logout = async () => {
    const { error } = await supabase.auth.signOut()

    if (error) {
      setError(error)
      return
    }

    navigate(LOGOUT_REDIRECT)
  }

  const handleClick = (url) => {
    closeFunction()
    navigate(url)
  }

  useEffect(() => {
    if (error) {
      alert(error)
    }
  }, [error])

  return (
    <Style.ButtonsWrapper>
      <button onClick={() => handleClick('/')}>Strona główna</button>
      {session?.user ? null : <button onClick={() => handleClick('/register')}>Rejestracja</button>}
      {session?.user ? (
        <>
          <button onClick={() => handleClick('/dashboard')}>Panel</button>
          <button onClick={() => handleClick('/ranking')}>Ranking</button>
          <button onClick={() => handleClick('/settings')}>Ustawienia</button>
          <button onClick={() => logout()}>Wyloguj</button>
        </>
      ) : (
        <button onClick={() => handleClick('/login')}>Logowanie</button>
      )}
    </Style.ButtonsWrapper>
  )
}

export default TopbarMenu
