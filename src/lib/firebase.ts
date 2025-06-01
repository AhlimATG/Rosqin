
// firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAl_-81WcXZLUvFAjxEb_Xwj8yC4r07SwA",
  authDomain: "rosqin-57403.firebaseapp.com",
  projectId: "rosqin-57403",
  storageBucket: "rosqin-57403.firebasestorage.app",
  messagingSenderId: "95226624593",
  appId: "1:95226624593:web:6e9c0b547cd975992a9670",
  measurementId: "G-XNSC9KJL1H"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, analytics, db, auth };
