// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqHbkaH_X8AFkEhKczVeLBy-pxTrRkzZM",
  authDomain: "explore-firebase-af084.firebaseapp.com",
  projectId: "explore-firebase-af084",
  storageBucket: "explore-firebase-af084.firebasestorage.app",
  messagingSenderId: "212779744424",
  appId: "1:212779744424:web:0fb8c346f41749e8ee569d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
