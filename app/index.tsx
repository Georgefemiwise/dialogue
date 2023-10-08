import { Redirect } from 'expo-router'
import {AuthProvider} from '../core/context/Authcontext'

export default function StartPage() {
  return (
    <AuthProvider>
      <Redirect href="/(auth)/onboarding" />
    </AuthProvider>
  )
}
