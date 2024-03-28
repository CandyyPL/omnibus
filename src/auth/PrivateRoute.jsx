import { AuthContext } from '@/providers/AuthProvider'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ route }) => {
  const { session } = useContext(AuthContext)

  if (session?.user) {
    return route
  } else {
    return <Navigate to="/" replace={true} />
  }
}

export default PrivateRoute
