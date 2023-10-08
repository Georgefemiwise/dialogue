import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { authStyles } from './style'

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
        <Text style={{ textAlign: 'center' , marginBottom:5}}>
          Our mission is all about making life in school a little better, join
          us
        </Text>
      </View>

      <View>
        <Link href="/login" asChild>
          <Pressable>
            <Text
              style={{
                ...styles.btn,
                backgroundColor: 'purple',
                color: 'white',
              }}
            >
              Login
            </Text>
          </Pressable>
        </Link>
        <Link href="/register" asChild>
          <Pressable>
            <Text
              style={{ ...styles.btn, borderWidth: 0.2, backgroundColor: '#b1ff45' }}
            >
              Register
            </Text>
          </Pressable>
        </Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  btn: {
    padding: 15,
    marginVertical: 5,
    borderRadius: 4,
    fontSize: 14,
    fontWeight: 'bold',
  },
})
