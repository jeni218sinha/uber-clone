// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDltAUWjWOzNVPUsDrqOuGmAujUIojYSFY",
    authDomain: "uber-next-clone-live-90e99.firebaseapp.com",
    projectId: "uber-next-clone-live-90e99",
    storageBucket: "uber-next-clone-live-90e99.appspot.com",
    messagingSenderId: "1053074704862",
    appId: "1:1053074704862:web:198a3e24a03231acfc754f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }