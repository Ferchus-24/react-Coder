import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDTwh56sjv6fC0q9DIWp3o3t6ZH1PK5O0",
  authDomain: "ecommercecoder-6473f.firebaseapp.com",
  projectId: "ecommercecoder-6473f",
  storageBucket: "ecommercecoder-6473f.appspot.com",
  messagingSenderId: "932868452390",
  appId: "1:932868452390:web:fb2e54695e782fd9db76e7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
