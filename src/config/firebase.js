import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_APY_KEY,
  authDomain: "maite-joyas.firebaseapp.com",
  projectId: "maite-joyas",
  storageBucket: "maite-joyas.appspot.com",
  messagingSenderId: "435670686733",
  appId: "1:435670686733:web:3a9152ea7e13417403c944"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);