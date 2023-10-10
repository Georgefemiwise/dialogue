import { View, Text } from 'react-native'
import React from 'react'
import Button from '../../components/Button'
import { signOut } from 'firebase/auth'
import { FIREBASE_AUTH } from '../../core/api/firebase/config'

export default function logout() {
    return (
        <View>
            <Text>are you sure you want to logot?</Text>
            <Button
                mode="contained"
                title="logout"
                handlePress={() => signOut(FIREBASE_AUTH)}
            />
        </View>
    )
}
