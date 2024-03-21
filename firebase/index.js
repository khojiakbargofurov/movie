// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD0X8TciVb_lcHGGhF6NIA2ofXUUo40kj0",
  authDomain: "project-4e868.firebaseapp.com",
  projectId: "project-4e868",
  storageBucket: "project-4e868.appspot.com",
  messagingSenderId: "180536904260",
  appId: "1:180536904260:web:0b868d9f701e8201664a11",
  measurementId: "G-WP9NF4TVMD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAnalytics(app)