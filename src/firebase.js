// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG1k05_33wlRE4hbXqAdAPRLgJwPywwq4",
  authDomain: "selfexpression-31a95.firebaseapp.com",
  projectId: "selfexpression-31a95",
  storageBucket: "selfexpression-31a95.appspot.com",
  messagingSenderId: "591239599786",
  appId: "1:591239599786:web:9ca5edcf6a2eebe6ad62d3",
  measurementId: "G-YSJDCR513Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
