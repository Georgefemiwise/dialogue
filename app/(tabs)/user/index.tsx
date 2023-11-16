import { StyleSheet } from 'react-native'
import React from 'react'
import { View } from 'react-native'
import CustomList from '../../../components/List'

export default function ProflePage() {
    return (
        <View>
            <CustomList
                href="/(tabs)/user/profile"
                name="person"
                title="Personal Data"
            />
            <CustomList
                href="/(tabs)/user/settings"
                name="settings"
                title="Settings"
            />

            <CustomList
                href="/(tabs)/user/settings"
                name="school"
                title="Achievements"
            />
            <CustomList href="/(tabs)/user/settings" name="FAQ" title="FAQ" />
            <CustomList
                href="/(tabs)/user/settings"
                name="people"
                title="Community"
            />

            <CustomList href="/(auth)/logout" name="logout" title="Logout" />
        </View>
    )
}

const styles = StyleSheet.create({})
