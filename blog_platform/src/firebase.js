// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgw-lqol8oK9wViGfue0_srTUluoxLONw",
  authDomain: "blog-8a96e.firebaseapp.com",
  projectId: "blog-8a96e",
  storageBucket: "blog-8a96e.appspot.com",
  messagingSenderId: "90115735890",
  appId: "1:90115735890:web:1f1277217426a74382fa8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();