// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
// import { getFirestore } from "firebase/firestore"


// firebase app configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYBZLBwIA9gekGw11cjE-MPDlbMNDY8a4",
  authDomain: "dialogue-omega.firebaseapp.com",
  projectId: "dialogue-omega",
  storageBucket: "dialogue-omega.appspot.com",
  messagingSenderId: "594615861166",
  appId: "1:594615861166:web:a208520717346f18dfd23f",
  measurementId: "G-GNE8D8QG95"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)


