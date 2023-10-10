import React, { useEffect, useState, createContext } from 'react'
import { FIREBASE_AUTH } from '../api/firebase/config'
import { User, onAuthStateChanged } from 'firebase/auth'

import {
    setPersistence,
    signInWithEmailAndPassword,
    browserSessionPersistence,
} from 'firebase/auth'

interface AuthProps {
    user?: User | null
    initialized: boolean
}

export const AuthContext = createContext<AuthProps>({
    user: null,
    initialized: false,
})
export function useAuth() {
    return React.useContext(AuthContext)
}
export function AuthProvider({ children }: any) {
    const [user, setUser] = useState<User | null>(null)
    const [initialized, setInitialized] = useState<boolean>(false)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (authUser) => {
            console.log('user auth changed: ', authUser)
            setUser(authUser)
            setInitialized(true)
        })

        return () => {
            // Unsubscribe from the Firebase auth listener when component unmounts
            unsubscribe()
        }
    }, [])

    const signIn = async (email: string, password: string) => {
        setPersistence(FIREBASE_AUTH, browserSessionPersistence)
        try {
            // Implement Firebase sign-in logic here (using email and password)
            // Example:
            await signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
        } catch (error) {
            // console.error('Sign-in error:', error.message)
            // Handle sign-in error (e.g., show an error message)
        }
    }

    const signOut = async () => {
        try {
            // Implement Firebase sign-out logic here
            // Example:
            // await signOut(FIREBASE_AUTH);
        } catch (error) {
            // console.error('Sign-out error:', error.message)
            // Handle sign-out error (e.g., show an error message)
        }
    }

    // Ensure the Firebase authentication state has been initialized before rendering
    if (!initialized) {
        return <p>Loading...</p>
    }

    // Provide the user and initialized state to the context
    const value = { user, initialized, signIn, signOut }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
