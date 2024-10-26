import { AuthContext } from '@/providers/AuthProvider.jsx'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'

const TopbarMenu = ({ closeFunction }) => {
  const { session } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleClick = (url) => {
    closeFunction()
    navigate(url)
  }

  return (
    <>
      {session?.user ? null : (
        <button className='reg' onClick={() => handleClick('/register')}>
          Zarejestruj się
        </button>
      )}
      {session?.user ? (
        <button className='dshb' onClick={() => handleClick('/dashboard')}>
          Dashboard
        </button>
      ) : (
        <button className='log' onClick={() => handleClick('/login')}>
          Zaloguj się
        </button>
      )}
    </>
  )
}

export default TopbarMenu
