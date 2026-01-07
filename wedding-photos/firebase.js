// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdi_xIJIN8mDT4JL6OUWJKpaW0yZFMeCU",
  authDomain: "wedding-photos-d7fff.firebaseapp.com",
  projectId: "wedding-photos-d7fff",
  storageBucket: "wedding-photos-d7fff.firebasestorage.app",
  messagingSenderId: "293222472012",
  appId: "1:293222472012:web:83a4bd904140d86d13d7e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const db = firebase.firestore();