// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: "AIzaSyAPCJUOj8aQ8-wZ1I_LKB_jIyNdv54PKQw",
  authDomain: "tiktok---jornada-cd7e8.firebaseapp.com",
  projectId: "tiktok---jornada-cd7e8",
  storageBucket: "tiktok---jornada-cd7e8.appspot.com",
  messagingSenderId: "496318877003",
  appId: "1:496318877003:web:f0a699bb35e59e7457acce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db; 