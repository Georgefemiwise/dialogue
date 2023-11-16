import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../core/api/firebase/config'
import { createUserWithEmailAndPassword, updateProfile } from '@firebase/auth'
import { authStyles } from './style'
import { Link, router } from 'expo-router'
import Logo from '../../components/Logo'
import TextInput from '../../components/TextInputs'
import Button from '../../components/Button'
import { StyleSheet } from 'react-native'
import { doc, setDoc } from 'firebase/firestore'

interface RegistrationFormstate {
    displayName: string
    email: string
    password: string
    confirmPassword: string
}

// interface error{
//   errorMessage: string
// }

export default function RgistrationForm() {
    const [state, setState] = useState<RegistrationFormstate>({
        email: '',
        password: '',
        displayName: '',
        confirmPassword: '',
    })

    const [errorMessage, setErrorMessage] = useState('')

    const handleDisplayNameChange = (text: string) => {
        setState({ ...state, displayName: text })
    }

    const handleEmailChange = (text: string) => {
        setState({ ...state, email: text })
    }

    const handlePasswordChange = (text: string) => {
        setState({ ...state, password: text })
    }
    const handleConfirmPasswordChange = (text: string) => {
        setState({ ...state, confirmPassword: text })
    }

    const handleSubmit = async () => {
        const { email, password, confirmPassword, displayName } = state
        const auth = FIREBASE_AUTH

        if (!password || !email || !confirmPassword || !displayName) {
            setErrorMessage('Please enter all the required fields')
            return
        }
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match')
            return
        }

        try {
            //create a user with just email and password
            const response = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            )

            // update user profile eg display name,phone number, email, uid, and suppose image
            await updateProfile(response.user, { displayName })

            //create a doc that will use in the app (general)
            await setDoc(doc(FIRESTORE_DB, 'users', response.user.uid), {
                uid: response.user.uid,
                displayName,
                email,
            })
            router.replace('/login')
        } catch (error) {
            // If it's a Firebase error, try to extract the specific error message
            if (error.message === 'auth/invalid-email') {
                console.log('Invalid email address.')
                setErrorMessage((prev) => 'Invalid email address')
            } else if (error.message === 'auth/user-not-found') {
                console.log('User not found.')
                setErrorMessage((prev) => 'user not found')
            } else if (error.message === 'auth/wrong-password') {
                console.log('Invalid password.')
                setErrorMessage((prev) => 'Invalid email address')
            } else if (error.message == 'auth/network-request-failed') {
                console.log('network request failed.')
                setErrorMessage((prev) => '')
            } else {
                // If it's not a known Firebase error, display the custom error message
                console.log('errorMessage',error)
                setErrorMessage((prev) => 'Invalid email address')
            }
        }

        // Clear the form after submission
        setState({
            email: '',
            password: '',
            displayName: '',
            confirmPassword: '',
        })
    }

    return (
        <View style={authStyles.container}>
            <View
                style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingBottom: 30,
                }}
            >
                {/* <Logo /> */}
                <Text
                    style={{
                        ...authStyles.header,
                        marginBottom: 0,
                        fontSize: 28,
                    }}
                >
                    Create account
                </Text>
            </View>

            {errorMessage.length > 0 && (
                <Text style={{ ...styles.control, color: 'red' }}>
                    {errorMessage}
                </Text>
            )}
            <View style={styles.control}>
                <Text>Full Name</Text>
                <TextInput
                    value={state.displayName}
                    returnKeyType="next"
                    label="John Lius"
                    onChangeText={handleDisplayNameChange}
                    autoCompleteType="text"
                />
            </View>

            <View style={styles.control}>
                <Text>Email</Text>
                <TextInput
                    value={state.email}
                    returnKeyType="next"
                    label="john.lius@domain.com"
                    onChangeText={handleEmailChange}
                    autoCompleteType="email"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                />
            </View>
            <View style={styles.control}>
                <Text>Password</Text>
                <TextInput
                    value={state.password}
                    returnKeyType="next"
                    label="Password"
                    onChangeText={handlePasswordChange}
                    autoCapitalize="none"
                    autoCompleteType="password"
                    textContentType="password"
                    keyboardType="password"
                    inputType="numeric"
                />
            </View>
            <View style={styles.control}>
                <Text>Comfirm Password</Text>
                <TextInput
                    value={state.confirmPassword}
                    returnKeyType="next"
                    label="Confirm Password"
                    onChangeText={handleConfirmPasswordChange}
                    autoCapitalize="none"
                    autoCompleteType="password"
                    textContentType="password"
                    keyboardType="password"
                    inputType="numeric"
                />
            </View>

            <Button
                mode="contained"
                handlePress={handleSubmit}
                title="Submit"
            />

            <Text style={{ marginVertical: 10 }}>
                I don't have an acccount?
                <Link style={{ color: 'blue', marginTop: 10 }} href="/login">
                    Login
                </Link>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    control: {
        marginBottom: 15,
    },
})
