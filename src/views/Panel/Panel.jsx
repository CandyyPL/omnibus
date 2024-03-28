import { AuthContext } from '@/providers/AuthProvider'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const Panel = ({ Component }) => {
  const { signOut } = useContext(AuthContext)

  const navigate = useNavigate()

  return (
    <div className='panel-wrapper'>
      <div className='sidebar'>
        <div className='logo'>OMNIBUS</div>
        <ul className='menu-links'>
          <li onClick={() => navigate('/dashboard')}>Dashboard</li>
          <li onClick={() => navigate('/ranking')}>Ranking</li>
          <li onClick={() => navigate('/settings')}>Ustawienia</li>
        </ul>
        <button onClick={() => signOut()}>WYLOGUJ</button>
      </div>
      <div className='panel-component'>{Component}</div>
    </div>
  )
}

export default Panel
