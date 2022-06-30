// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdPPbPRfa9BeucCI55BlME8NgsCItp8ds",
  authDomain: "next-netflix-clone-6d538.firebaseapp.com",
  projectId: "next-netflix-clone-6d538",
  storageBucket: "next-netflix-clone-6d538.appspot.com",
  messagingSenderId: "1087043143250",
  appId: "1:1087043143250:web:adbf0bd0b821fc1de1818b"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }



