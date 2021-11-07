import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDGY9oxH0tz0ZoUeQr6UMnXus7A-Ij9s5k",
  authDomain: "movie-app-eca2e.firebaseapp.com",
  projectId: "movie-app-eca2e",
  storageBucket: "movie-app-eca2e.appspot.com",
  messagingSenderId: "340545098480",
  appId: "1:340545098480:web:7fa5639e56c9877c5f2835",
  measurementId: "G-SYWQDY79CP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default firebase
export const db = getFirestore(app)