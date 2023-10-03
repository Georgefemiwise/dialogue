import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function index() {
  return (
	<View>
	  <Link href='/list/1'>one</Link>
	  <Link href='/list/2'>two</Link>
	  <Link href='/list/3'>three</Link>
	</View>
  )
}

const styles = StyleSheet.create({})
