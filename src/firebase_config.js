// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGs5r7X359WZbzKQhUIjD8uZTpnIBi7-E",
  authDomain: "chatapp-2942a.firebaseapp.com",
  projectId: "chatapp-2942a",
  storageBucket: "chatapp-2942a.appspot.com",
  messagingSenderId: "698340768968",
  appId: "1:698340768968:web:cc1d1f6597a79a3474f9fd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
