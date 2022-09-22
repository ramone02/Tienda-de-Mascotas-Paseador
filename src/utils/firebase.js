// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1jyEN6iVVq8Lsp1uoGvXEs5BFp9RAB18",
    authDomain: "react-project-58789.firebaseapp.com",
    projectId: "react-project-58789",
    storageBucket: "react-project-58789.appspot.com",
    messagingSenderId: "921675624243",
    appId: "1:921675624243:web:10a3624839f965bd01d846"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);