// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8y6Bvbwtihse8f_wDh-b0X-ULFhTuay0",
  authDomain: "foody-last.firebaseapp.com",
  projectId: "foody-last",
  storageBucket: "foody-last.appspot.com",
  messagingSenderId: "687355603601",
  appId: "1:687355603601:web:a6968c09843761d0da6d30",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fileStorage = getStorage(app);
