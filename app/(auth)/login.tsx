import React, { useState } from 'react'
import { StyleSheet, TextInput, Button, View, Text, Image } from 'react-native'
import { FIREBASE_AUTH } from '../../core/api/firebase/config'
import { signInWithEmailAndPassword } from '@firebase/auth'
import { Link } from 'expo-router'
import { authStyles } from './style'
import { FontAwesome5 } from '@expo/vector-icons'

interface LoginFormProps {}

interface LoginFormState {
  email: string
  password: string
}

export default function LoginForm(props: LoginFormProps) {
  const [state, setState] = useState<LoginFormState>({
    email: '',
    password: '',
  })

  const handleEmailChange = (text: string) => {
    setState({ ...state, email: text })
  }

  const handlePasswordChange = (text: string) => {
    setState({ ...state, password: text })
  }

  const handleSubmit = async () => {
    const { email, password } = state
    const auth = FIREBASE_AUTH

    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
      console.log(response)
    } catch (error) {
      console.log(error)
    }

    // Clear the form after submission
    setState({ email: '', password: '' })
  }

  return (
    <View style={authStyles.container}>
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 30,
        }}
      >
        <Text style={{ ...authStyles.header, marginBottom: 0, fontSize: 28 }}>
          Login your account
        </Text>
      </View>
      <TextInput
        style={authStyles.input}
        placeholder="Email"
        value={state.email}
        onChangeText={handleEmailChange}
      />
      <TextInput
        style={authStyles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={state.password}
        onChangeText={handlePasswordChange}
      />
      <Text style={styles.forgotPassword}>
        <Link href="/register">Forgot password</Link>
      </Text>

      <Button color="purple" title="Submit" onPress={handleSubmit} />

      <Text style={{  marginVertical: 10 }}>
        I don't have an acccount?{' '}
        <Link style={{ color: 'blue', marginTop: 10 }} href="/register">
          Register
        </Link>
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  forgotPassword: { color: '#aaa', width: '100%', textAlign: 'right' },
})
