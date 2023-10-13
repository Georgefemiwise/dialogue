import { StyleSheet } from 'react-native'
import React from 'react'
import { ExternalLink } from '../../../components/ExternalLink'
import { Text, View } from 'react-native'
import { Link } from 'expo-router'
import CustomList from '../../../components/List'

export default function ProflePage() {
    return (
        <View>
          
            <CustomList href="/(tabs)/user/profile" name='person' title="Profile" />
            <CustomList href="/(tabs)/user/settings" name="settings" title="Settings" />
            <CustomList href="/(auth)/logout" name="logout" title="Logout" />
        </View>
    )
}

const styles = StyleSheet.create({})
