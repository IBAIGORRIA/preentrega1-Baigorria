
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APY_KEY,
  authDomain: "maite-joyas.firebaseapp.com",
  projectId: "maite-joyas",
  storageBucket: "maite-joyas.appspot.com",
  messagingSenderId: "435670686733",
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);