import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-RoooYRe-d0U-Iivt5O7du0zM3Hxmr1c",
  authDomain: "find-waldo-94e43.firebaseapp.com",
  projectId: "find-waldo-94e43",
  storageBucket: "find-waldo-94e43.appspot.com",
  messagingSenderId: "615590417940",
  appId: "1:615590417940:web:7eabe71f3a58475d477901",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
