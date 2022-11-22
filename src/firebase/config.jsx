// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBaE30JpTvUWPy5soXMYkRxyWQHuGj2hsY",
  authDomain: "portfolio-5d88f.firebaseapp.com",
  projectId: "portfolio-5d88f",
  storageBucket: "portfolio-5d88f.appspot.com",
  messagingSenderId: "374026753729",
  appId: "1:374026753729:web:ef02354901037b75d96640",
  measurementId: "G-3LYJ1HM2ZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//export const analytics = getAnalytics(app);
export const auth  = getAuth(app)
export const db  = getFirestore(app)
export const storage  = getStorage(app)


export default app