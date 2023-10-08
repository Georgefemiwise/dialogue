import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { FIREBASE_AUTH } from '../../core/api/firebase/config'
import { createUserWithEmailAndPassword } from '@firebase/auth'
import { authStyles } from './style'
import { Link, router } from 'expo-router'
import Logo from '../../components/Logo'
import TextInput from '../../components/TextInputs'
import Button from '../../components/Button'

interface RgistrationForm {}

interface RgistrationFormtate {
  email: string
  password: string
}

export default function RgistrationForm(props: RgistrationForm) {
  const [state, setState] = useState<RgistrationFormtate>({
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
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      console.log(response)
      router.replace('/login')
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
        <Logo />
        <Text style={{ ...authStyles.header, marginBottom: 0, fontSize: 28 }}>
          Create account
        </Text>
      </View>
      <TextInput
        value={state.email}
        returnKeyType="next"
        label="Email"
        onChangeText={handleEmailChange}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        value={state.password}
        returnKeyType="next"
        label="Password"
        onChangeText={handlePasswordChange}
        autoCapitalize="none"
        autoCompleteType="password"
        textContentType="password"
        keyboardType="password"
        inputType="numeric"
      />

      <Button mode="elevated" handlePress={handleSubmit} title="Submit" />

      <Text style={{ marginVertical: 10 }}>
        I don't have an acccount?{' '}
        <Link style={{ color: 'blue', marginTop: 10 }} href="/login">
          Login
        </Link>
      </Text>
    </View>
  )
}
