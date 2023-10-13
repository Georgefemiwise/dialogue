import React from 'react'
import { Stack } from 'expo-router'

export default function TaskLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    title: 'Profile',
                }}
            />
        </Stack>
    )
}
