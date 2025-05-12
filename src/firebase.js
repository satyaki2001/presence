// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBtDY_F9LKoxWezLBH2m8Cp5fwLq6xqjpk",
  authDomain: "presence-68022.firebaseapp.com",
  projectId: "presence-68022",
  storageBucket: "presence-68022.firebasestorage.app",
  messagingSenderId: "976230533436",
  appId: "1:976230533436:web:e3f9a7e05499058693b639",
  measurementId: "G-X2LL84R53Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optional: only use analytics if available (client-side)
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics };
