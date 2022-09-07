import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "hackathon-baa0c.firebaseapp.com",
  projectId: "hackathon-baa0c",
  storageBucket: "hackathon-baa0c.appspot.com",
  messagingSenderId: "320941036579",
  appId: "1:320941036579:web:dd93464d8e646212eacd96",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
