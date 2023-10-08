import React, { useEffect, useState, createContext } from 'react'
import { FIREBASE_AUTH } from '../api/firebase/config'
import { onAuthStateChanged } from 'firebase/auth'

interface AuthProps {
  user?: string
  initialized?: boolean
}

export const AuthContext = createContext<AuthProps>({})

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<any>()

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user auth changed: ', user)
    })
  }, [])
  const value = {}
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
