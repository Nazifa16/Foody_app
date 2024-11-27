// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoyRZX2LWXoo3C-v0UmvQXBiwpPKRrSzc",
  authDomain: "foody-last-49ef4.firebaseapp.com",
  projectId: "foody-last-49ef4",
  storageBucket: "foody-last-49ef4.appspot.com",
  messagingSenderId: "851086371982",
  appId: "1:851086371982:web:62c60fd79f7d15abe86ddf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fileStorage = getStorage(app);
