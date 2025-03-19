// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAle4dG_KL3A3AxwaGCHlC82IDKWTTGuko",
  authDomain: "smart-grading-c45b3.firebaseapp.com",
  projectId: "smart-grading-c45b3",
  storageBucket: "smart-grading-c45b3.firebasestorage.app",
  messagingSenderId: "484176300434",
  appId: "1:484176300434:web:5ed8e5e9d842965592994b",
  measurementId: "G-PEF740JSP0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
