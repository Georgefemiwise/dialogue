import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function DetailLayout() {
  return (
	<Stack>
	  <Stack.Screen name='index' options={{headerTitle:'news', headerShown:false}}/>
	</Stack>
  )
}

const styles = StyleSheet.create({})
