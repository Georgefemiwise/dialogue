import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

export default function detail() {
	const {id} = useLocalSearchParams()
	return (
	<View>
	  <Stack.Screen options={{headerTitle: `post ${id}`}} />
		  <Text>detail: { id }</Text>
	</View>
  )
}

const styles = StyleSheet.create({})
