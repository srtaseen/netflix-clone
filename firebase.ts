// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxoIzWtcrXCLL3WyQsWXqlARxWQHp-ydY",
  authDomain: "netflix-clone-b4d0e.firebaseapp.com",
  projectId: "netflix-clone-b4d0e",
  storageBucket: "netflix-clone-b4d0e.appspot.com",
  messagingSenderId: "38160136268",
  appId: "1:38160136268:web:662c9ff430c2e988009ce9"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }