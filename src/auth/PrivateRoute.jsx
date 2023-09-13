import { supabase } from '@/supa/client'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    ;(async () => {
      const user = await supabase.auth.getSession()
      if (user) setUser(user)
    })()
  }, [])

  if (user) {
    return children
  } else {
    return <Navigate to='/' replace={true} />
  }
}

export default PrivateRoute
