import { supabase } from '@/supa/client'
import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      const session = await supabase.auth.getSession()

      setUser(session?.user ?? null)
      setLoading(false)
    })()

    const { data: listener } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  const provide = {
    user,
    signIn: (data) => supabase.auth.signInWithPassword(data),
    signUp: (data) => supabase.auth.signUp(data),
    signOut: () => supabase.auth.signOut(),
  }

  return <AuthContext.Provider value={provide}>{!loading && children}</AuthContext.Provider>
}

export default AuthProvider
