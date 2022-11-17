// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqQclHKXW0DJjiTA0ImvdJ-_ibySHxV7Y",
  authDomain: "fire-contact-app-self.firebaseapp.com",
  databaseURL: "https://fire-contact-app-self-default-rtdb.firebaseio.com",
  projectId: "fire-contact-app-self",
  storageBucket: "fire-contact-app-self.appspot.com",
  messagingSenderId: "1084958806491",
  appId: "1:1084958806491:web:5e0f0b2c0c5d4e27c397fe",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
