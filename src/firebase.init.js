// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYnQe3Y1b3ebaGDGtHiV5fPVaHpBpHS_4",
    authDomain: "gym-trainer-4437e.firebaseapp.com",
    projectId: "gym-trainer-4437e",
    storageBucket: "gym-trainer-4437e.appspot.com",
    messagingSenderId: "715561899930",
    appId: "1:715561899930:web:8277c78cb3653b90d34c23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;