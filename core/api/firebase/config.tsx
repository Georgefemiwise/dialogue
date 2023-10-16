// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, initializeAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getStorage, ref } from 'firebase/storage'

// firebase app configuration
const firebaseConfig = {
    apiKey: process.env.EXPO_PUBLIC_API_KEY,
    authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
    storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.EXPO_PUBLIC_MESSAGE_SENDER_ID,
    appId: process.env.EXPO_PUBLIC_APP_ID,
    measurementId: process.env.EXPO_PUBLIC_MEASUREMENT_ID,
}

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig)
// Firebase database
const FIRESTORE_DB = getFirestore(FIREBASE_APP)
// Firebase authentication
const FIREBASE_AUTH = getAuth()
// Create a root reference
const storage = getStorage()

export { FIREBASE_APP, FIRESTORE_DB, FIREBASE_AUTH, storage }
