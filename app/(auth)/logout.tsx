import { View, Text } from 'react-native'
import React from 'react'
import Button from '../../components/Button'
import { signOut } from 'firebase/auth'
import { FIREBASE_AUTH } from '../../core/api/firebase/config'

export default function logout() {
    return (
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text>Are you sure you want to logout?</Text>
            <View style={{ width:"50%"}}>
            <Button
                mode="contained"
                title="logout"
                handlePress={() => signOut(FIREBASE_AUTH)}
            />
            </View>
        </View>
    )
}
