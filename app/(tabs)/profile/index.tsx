import { StyleSheet } from 'react-native'
import React from 'react'
import { ExternalLink } from '../../../components/ExternalLink'
import { Text, View } from 'react-native'
import { Link } from 'expo-router'

export default function ProflePage() {
  return (
    <View>
      <Text>ProflePage</Text>
      <Text>
        <Link href="/(tabs)/">back</Link>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({})
