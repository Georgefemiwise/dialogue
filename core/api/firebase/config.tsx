// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
