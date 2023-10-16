import React, { useState, useEffect } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../../core/api/firebase/config'
import { Avatar, Button, TextInput } from 'react-native-paper'
import { useAuth } from '../../../core/context/Authcontext'
import { getDoc, setDoc, doc, getDocFromServer } from 'firebase/firestore'

interface UserProfile {
    name: string
    email: string
    phoneNumber: string
    age: string
    profilePicURL: string
}

const ProfileScreen = () => {
    const [name, setName] = useState<any>('')
    const [email, setEmail] = useState<any>('') // Provide a default value for email
    const [phoneNumber, setPhoneNumber] = useState<any>()
    const [age, setAge] = useState<string>('')

    const userData = useAuth()
    useEffect(() => {
        // Load user data from Firebase when the component mounts

        setName(userData.user?.displayName)
        setEmail(userData.user?.email)
        setPhoneNumber(userData.user?.phoneNumber)
        setAge('')
    }, [])

    const updateProfile = async () => {
        try {
            if (name && email && phoneNumber && age) {
                const userDatall = useAuth()
                // get user data ref with the user unique id (uid)
//                 const getUserRef = doc(
//                     FIRESTORE_DB,
//                     'users',
//                     `${userDatall.user?.uid}`
//                 )
// ``
                // user data
                const userData = {
                    first: '',
                    last: '',
                    age: '',
                }

                // set new user data
                // const docRef = await setDoc(getUserRef, userData)

                // Clear the fields after processing
                setName('')
                setEmail('')
                setPhoneNumber('')
                setAge('')
            } else {
                // Handle the case where not all required fields are filled
                console.log('Please fill in all required fields.')
            }
        } catch (e) {
            console.error('Error adding document: ', e)
        }
    }
    return (
        <ScrollView>
            <View>
                <TextInput
                    placeholder="Name"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChangeText={(text) => setPhoneNumber(text)}
                />
                <TextInput
                    placeholder="Age"
                    value={age}
                    onChangeText={(text) => setAge(text)}
                />
                <Button onPress={updateProfile}>update Profile</Button>
            </View>
        </ScrollView>
    )
}

export default ProfileScreen
