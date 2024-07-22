// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-6daa0.firebaseapp.com",
  projectId: "mern-auth-6daa0",
  storageBucket: "mern-auth-6daa0.appspot.com",
  messagingSenderId: "967869087473",
  appId: "1:967869087473:web:8caa1b9e5d21cf389f3350",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
