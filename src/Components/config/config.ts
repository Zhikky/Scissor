// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvkgH7weg-IGcLeWnYrx0e9HtV5WaZFVw",
  authDomain: "scissor-alt.firebaseapp.com",
  projectId: "scissor-alt",
  storageBucket: "scissor-alt.appspot.com",
  messagingSenderId: "268642048024",
  appId: "1:268642048024:web:126c2c3602af6de4344b6d"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);