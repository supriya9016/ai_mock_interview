import {initializeApp, getApp,getApps} from 'firebase/app';
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD--zS5g9GSwzzVnRDbavtDP5jzwekhlyY",
  authDomain: "prepwise-3d856.firebaseapp.com",
  projectId: "prepwise-3d856",
  storageBucket: "prepwise-3d856.firebasestorage.app",
  messagingSenderId: "921314636076",
  appId: "1:921314636076:web:d84c30ab42156c9f94bc89",
  measurementId: "G-0ZQQ19N8TQ"
};

// Initialize Firebase
const app = !getApps().length? initializeApp(firebaseConfig):getApp();
export const auth = getAuth(app);
export const db=getFirestore(app);