import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBIuqWHC2YkKsNf5uEOMRqNPxRoCfVYAk0",
  authDomain: "interprep-1546e.firebaseapp.com",
  projectId: "interprep-1546e",
  storageBucket: "interprep-1546e.firebasestorage.app",
  messagingSenderId: "981284468025",
  appId: "1:981284468025:web:67701a623173ffae5ea4e8",
  measurementId: "G-HW0C2CGDWB"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);