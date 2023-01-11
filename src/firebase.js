import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "tutorial-df26c.firebaseapp.com",
  projectId: "tutorial-df26c",
  storageBucket: "tutorial-df26c.appspot.com",
  messagingSenderId: "339090662893",
  appId: "1:339090662893:web:07d177ffa94813b50533e4",
  measurementId: "G-MQ4B3VCWKK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
