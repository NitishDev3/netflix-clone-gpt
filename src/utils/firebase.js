// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnplqmAwNca7-Ce3jhfC-QErYK5csxFYs",
  authDomain: "netflixclonegpt.firebaseapp.com",
  projectId: "netflixclonegpt",
  storageBucket: "netflixclonegpt.appspot.com",
  messagingSenderId: "982778933305",
  appId: "1:982778933305:web:fc282df3299d0d35705de8",
  measurementId: "G-CE9JVYEYWL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);