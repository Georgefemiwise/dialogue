import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { FIREBASE_AUTH } from '../../core/api/firebase/config'
import { signInWithEmailAndPassword } from '@firebase/auth'
import { Link, router } from 'expo-router'
import { authStyles } from './style'
import Logo from '../../components/Logo'
import { MaterialIcons } from '@expo/vector-icons'
import TextInput from '../../components/TextInputs'
import Button from '../../components/Button'

interface Credentials {
    email: string
    password: string
}

const initialCredentials: Credentials = {
    email: '',
    password: '',
}

export default function LoginForm() {
    const [credentials, setCredentials] =
        useState<Credentials>(initialCredentials)
    const [error, setError] = useState('')

    // update input fields for email
    const updateEmail = (text: string) => {
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            email: text,
        }))
    }
    // update input fields for password
    const updatePassword = (text: string, error: string) => {
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            password: text,
        }))
    }
    // Accessing email and password
    const { email, password } = credentials

    const handleSubmit = async () => {
        const auth = FIREBASE_AUTH
        try {
            const response = await signInWithEmailAndPassword(
                auth,
                email,
                password
            )

            console.log(response)
             router.replace('/(tabs)/')
        } catch (error: any) {
            // If it's a Firebase error, try to extract the specific error message
            if (error.message === 'auth/invalid-email') {
                console.log('Invalid email address.')
                setError((prev) => 'Invalid email address')
            } else if (error.message === 'auth/user-not-found') {
                console.log('User not found.')
                setError((prev) => 'user not found')
            } else if (error.message === 'auth/wrong-password') {
                console.log('Invalid password.')
                setError((prev) => 'Invalid email address')
            } else if (error.message == 'auth/network-request-failed') {
                console.log('network request failed.')
                setError((prev) => '')
            } else {
                // If it's not a known Firebase error, display the custom error message
                console.log('errorMessage')
                setError((prev) => 'Invalid email address')
            }

            console.log(error)

            // try {
            //   const response = await signInWithEmailAndPassword(auth, email, password)
            //   console.log(response.user)
            // } catch (error: any) {
            //   const errorCode = error.code
            //   const errorMessage = error.message
            //   console.log(errorMessage)

            //   // console.log(error)
            //   // setError(error.error.message)
            // }

            // Clear the form after submission
            setCredentials({
                email: '',
                password: '',
            })
        }
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
                <Logo />
                <Text
                    style={{
                        ...authStyles.header,
                        marginBottom: 0,
                        fontSize: 28,
                    }}
                >
                    Login
                </Text>
            </View>
            {error && (
                <Text
                    style={{
                        color: 'red',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <MaterialIcons
                        name="error"
                        style={{ paddingRight: 5 }}
                        size={20}
                        color="red"
                    />
                    {error}
                </Text>
            )}
            <TextInput
                value={email}
                returnKeyType="next"
                label="Email"
                onChangeText={updateEmail}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />

            <TextInput
                label="Password"
                returnKeyType="next"
                value={password}
                onChangeText={updatePassword}
                secureTextEntry={true}
            />
            <Text style={styles.forgotPassword}>
                <Link href="/register">Forgot password</Link>
            </Text>

            <Button mode="elevated" handlePress={handleSubmit} title="Submit" />

            <Text style={{ marginVertical: 10 }}>
                I don't have an acccount?{' '}
                <Link style={{ color: 'blue', marginTop: 10 }} href="/register">
                    Register
                </Link>
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    forgotPassword: {
        color: '#aaa',
        width: '100%',
        textAlign: 'right',
    },
})
