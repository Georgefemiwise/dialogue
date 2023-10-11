import React from 'react'
import { Stack } from 'expo-router'

export default function AuthLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    title: 'Profile',
                }}
            /> 
            <Stack.Screen
                name="settings"
                options={{
                    title: 'Settings',
                }}
            />
        </Stack>
    )
}
