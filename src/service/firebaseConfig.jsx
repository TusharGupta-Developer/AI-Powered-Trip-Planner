// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo5T8YihAHyicqQTUeu4F3RLwzu5JHkms",
  authDomain: "myresumeproject-10ddf.firebaseapp.com",
  projectId: "myresumeproject-10ddf",
  storageBucket: "myresumeproject-10ddf.firebasestorage.app",
  messagingSenderId: "500715395852",
  appId: "1:500715395852:web:17b30bdff890b9399a8729",
  measurementId: "G-352VXK8C4Y"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);