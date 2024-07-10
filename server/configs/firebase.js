// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE9r4H7uIRFoMKmEON1vfuGDh1mGaCEKo",
  authDomain: "foodyapp-b4d5f.firebaseapp.com",
  projectId: "foodyapp-b4d5f",
  storageBucket: "foodyapp-b4d5f.appspot.com",
  messagingSenderId: "79847692054",
  appId: "1:79847692054:web:a46c32acfce7d10f862237",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fileStorage = getStorage(app);
