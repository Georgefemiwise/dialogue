import React, { useState, useEffect } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../../core/api/firebase/config'
import { Avatar, Button, TextInput } from 'react-native-paper'
import { useAuth } from '../../../core/context/Authcontext'
 import { collection, addDoc } from 'firebase/firestore'

interface UserProfile {
    name: string
    email: string
    phoneNumber: string
    age: string
    profilePicURL: string
}

const ProfileScreen = () => {
    const profile = useAuth()

    const [user, setUser] = useState<UserProfile | null>(null)
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>(`${profile.user?.email}`)
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [age, setAge] = useState<string>('')
    const [profilePicURL, setProfilePicURL] = useState<string>('')

    useEffect(() => {
        // Load user data from Firebase when the component mounts

        // const userRef = FIRESTORE_DB.collection('users').doc('your_user_id')
        // userRef.get().then((doc: { exists: any; data: () => UserProfile }) => {
        //     if (doc.exists) {
        //         const userData = doc.data() as UserProfile
        //         setUser(userData)
        //         setName(userData.name)
        //         setEmail(userData.email)
        //         setPhoneNumber(userData.phoneNumber)
        //         setAge(userData.age)
        //         setProfilePicURL(userData.profilePicURL)
        //     }
        // })
    }, [])

    const updateProfile = async () => {

        try {
            const docRef = await addDoc(collection(FIRESTORE_DB, 'users'), {
                first: 'Ada',
                last: 'Lovelace',
                born: 1815,
            })
            console.log('Document written with ID: ', docRef.id)
        } catch (e) {
            console.error('Error adding document: ', e)
        }
    }

    return (
        <ScrollView>
            {/* <Avatar.Image size={24} source={require('../assets/avatar.png')} /> */}
            <View>
                {/* {profilePicURL && (
                    <Image
                        source={{ uri: profilePicURL }}
                        style={{ width: 100, height: 100 }}
                    />
                )} */}
                <View
                    style={{ flexDirection: 'row', justifyContent: 'center' }}
                >
                    <Avatar.Text size={70} label="XD" />
                </View>
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
              
                <Button
                    mode="contained"
                    style={{ borderRadius: 0 }}
                    onPress={updateProfile}
                >
                    Update Profile
                </Button>
            </View>
        </ScrollView>
    )
}

export default ProfileScreen
