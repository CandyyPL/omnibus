import { AuthContext } from '@/providers/AuthProvider'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const { session } = useContext(AuthContext)

  if (session?.user) {
    return children
  } else {
    return <Navigate to='/' replace={true} />
  }
}

export default PrivateRoute
