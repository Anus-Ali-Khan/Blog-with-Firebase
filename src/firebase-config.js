// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-vDldrwdAJFJVpiObcz-UcAUQWpUrx1g",
    authDomain: "blogproject-a57d6.firebaseapp.com",
    projectId: "blogproject-a57d6",
    storageBucket: "blogproject-a57d6.appspot.com",
    messagingSenderId: "796793066481",
    appId: "1:796793066481:web:7034679408e57c37d56a50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();