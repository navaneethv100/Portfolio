// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtPClip4J_lvsefcjMtpHu3CVsewozAWc",
  authDomain: "portfoliov100.firebaseapp.com",
  projectId: "portfoliov100",
  storageBucket: "portfoliov100.appspot.com",
  messagingSenderId: "638126659752",
  appId: "1:638126659752:web:8083cd9a033f51af8b8a9d",
  measurementId: "G-J5JYY214M0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();