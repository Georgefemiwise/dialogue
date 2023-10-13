import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Button, Image, ScrollView } from 'react-native'
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../../core/api/firebase/config'

interface UserProfile {
    name: string
    email: string
    phoneNumber: string
    age: string
    profilePicURL: string
}

const ProfileScreen = () => {
    const [user, setUser] = useState<UserProfile | null>(null)
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [age, setAge] = useState<string>('')
    const [profilePicURL, setProfilePicURL] = useState<string>('')

    useEffect(() => {
        // Load user data from Firebase when the component mounts
        const userId = FIREBASE_AUTH.currentUser?.uid

        // const userRef = FIRESTORE_DB
        //     .collection('users')
        //     .doc('your_user_id')
        // userRef.get().then((doc: { exists: any; data: () => UserProfile }) => {
        //     if (doc.exists) {
        //         const userData = doc.data() as UserProfile
        //         setUser(userData)
        //         setName(userData.name)
        //         setEmail(userData.email)
        //         setPhoneNumber(userData.phoneNumber)
        //         setAge(userData.age)
        //         setProfilePicURL(userData.profilePicURL)
        // }
        // })
    }, [])

    const updateProfile = () => {
        // Update user data in the Firebase database
        // const userRef = firebase
        //     .firestore()
        //     .collection('users')
        //     .doc('your_user_id')
        // userRef.update({
        //     name: name,
        //     email: email,
        //     phoneNumber: phoneNumber,
        //     age: age,
        //     profilePicURL: profilePicURL,
        // })
    }

    return (
        <ScrollView>
            <View>
                {profilePicURL && (
                    <Image
                        source={{ uri: profilePicURL }}
                        style={{ width: 100, height: 100 }}
                    />
                )}
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
                <TextInput
                    placeholder="Profile Picture URL"
                    value={profilePicURL}
                    onChangeText={(text) => setProfilePicURL(text)}
                />
                <Button title="Update Profile" onPress={updateProfile} />
            </View>
        </ScrollView>
    )
}

export default ProfileScreen
