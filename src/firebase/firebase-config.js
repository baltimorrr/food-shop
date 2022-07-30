import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVmf6ZYhKI6mHzXUzX7qX8kIpQ90z8FdE",
  authDomain: "food-shop-6f003.firebaseapp.com",
  projectId: "food-shop-6f003",
  storageBucket: "food-shop-6f003.appspot.com",
  messagingSenderId: "32793474867",
  appId: "1:32793474867:web:073e73b0afca790558f046",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
