import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBwaiZKm1NhH3FReh6vf9YCep121nJSdyg",
  authDomain: "quiz-app-94784.firebaseapp.com",
  projectId: "quiz-app-94784",
  storageBucket: "quiz-app-94784.appspot.com",
  messagingSenderId: "776287909027",
  appId: "1:776287909027:web:128a494441a283df28fb16"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, createUserWithEmailAndPassword };
