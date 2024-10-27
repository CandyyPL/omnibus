import { AuthContext } from '@/providers/AuthProvider.jsx'
import { useNavigate } from 'react-router-dom'
import Style from './TopbarButtons.styles.js'
import { supabase } from '@/supa/client.js'
import { useContext } from 'react'

const TopbarMenu = ({ closeFunction }) => {
  const { session } = useContext(AuthContext)

  const navigate = useNavigate()

  const logout = async () => {
    const { error } = await supabase.auth.signOut()

    if (error) setError(error)

    navigate('/')
  }

  const handleClick = (url) => {
    closeFunction()
    navigate(url)
  }

  return (
    <Style.ButtonsWrapper>
      <button onClick={() => handleClick('/')}>Strona główna</button>
      {session?.user ? null : <button onClick={() => handleClick('/register')}>Rejestracja</button>}
      {session?.user ? (
        <>
          <button onClick={() => handleClick('/dashboard')}>Panel</button>
          <button onClick={() => logout()}>Wyloguj</button>
        </>
      ) : (
        <button onClick={() => handleClick('/login')}>Logowanie</button>
      )}
    </Style.ButtonsWrapper>
  )
}

export default TopbarMenu
