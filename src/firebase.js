import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqzBSjJxwLQ4dI0ESTH9Vqw7CSRZbe2FQ",
  authDomain: "marciuschat.firebaseapp.com",
  // databaseURL: "https://marciuschat-default-rtdb.firebaseio.com",
  projectId: "marciuschat",
  storageBucket: "marciuschat.appspot.com",
  messagingSenderId: "255506769482",
  appId: "1:255506769482:web:69edb94bfdf343e3fee8b3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
