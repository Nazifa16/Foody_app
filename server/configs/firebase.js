// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMAhV834ILSWW73IHAYwKF-oAO5ttEr_0",
  authDomain: "foody-d795a.firebaseapp.com",
  projectId: "foody-d795a",
  storageBucket: "foody-d795a.appspot.com",
  messagingSenderId: "512581147526",
  appId: "1:512581147526:web:ff2e804084922af21d2a07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fileStorage = getStorage(app);
