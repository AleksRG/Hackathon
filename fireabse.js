import { initializeApp } from "firebase/app";
import { get, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDl58DFh1EafhIi8qIdvmUV8JB6ZiPStqY",
  authDomain: "hackathon-baa0c.firebaseapp.com",
  projectId: "hackathon-baa0c",
  storageBucket: "hackathon-baa0c.appspot.com",
  messagingSenderId: "320941036579",
  appId: "1:320941036579:web:dd93464d8e646212eacd96",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
