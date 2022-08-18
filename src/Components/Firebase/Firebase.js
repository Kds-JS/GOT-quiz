// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDEWMuh_UD5s0DcrHChmsKqlFllqIFp-qE",
  authDomain: "got-quiz-8d64c.firebaseapp.com",
  projectId: "got-quiz-8d64c",
  storageBucket: "got-quiz-8d64c.appspot.com",
  messagingSenderId: "422922086480",
  appId: "1:422922086480:web:43d7b8aed656d81c320955",
  measurementId: "G-49ZJYNXB0B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app);

export const firestore = getFirestore();

export const user = uid => doc(firestore,`users/${uid}`);