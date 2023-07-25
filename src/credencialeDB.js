// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7x-7CnbAsLQgTS7Q38YeH4vJhoHcgqN8",
  authDomain: "consultoriomedicoexpo.firebaseapp.com",
  projectId: "consultoriomedicoexpo",
  storageBucket: "consultoriomedicoexpo.appspot.com",
  messagingSenderId: "974112444171",
  appId: "1:974112444171:web:11c3595d29cd62678fdc0e"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase