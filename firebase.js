// ...existing code...
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdi_xIJIN8mDT4JL6OUWJKpaW0yZFMeCU",
  authDomain: "wedding-photos-d7fff.firebaseapp.com",
  projectId: "wedding-photos-d7fff",
  storageBucket: "wedding-photos-d7fff.firebasestorage.app",
  messagingSenderId: "293222472012",
  appId: "1:293222472012:web:83a4bd904140d86d13d7e9"
};

// Initialize Firebase (modular)
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { app, storage, db };
// ...existing code...