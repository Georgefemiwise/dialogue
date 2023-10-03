import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function profile() {
  return (
	<View>
	  <Link href='/(tabs)/home'>profile</Link>
	</View>
  )
}

const styles = StyleSheet.create({})
