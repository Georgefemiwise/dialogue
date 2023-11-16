import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { authStyles } from './style'
import Button from '../../components/Button'

export default function Onboarding() {
	
  return (
    <View style={authStyles.container}>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ ...authStyles.header, marginBottom: 0 }}>Welcome</Text>
        <Text style={{ textAlign: 'center', marginBottom: 5 }}>
          Our mission is all about making life in school a little better, join
          us
        </Text>
      </View>

      <View>
        <Button title="Login" handlePress={() => router.push('/login')} />

        <Button
          title="Register"
          mode="contained"
          handlePress={() => router.push('/register')}
        />
      </View>
    </View>
  )
}
