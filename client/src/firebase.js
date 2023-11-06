// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'propspace-19785.firebaseapp.com',
  projectId: 'propspace-19785',
  storageBucket: 'propspace-19785.appspot.com',
  messagingSenderId: '1005270015175',
  appId: '1:1005270015175:web:5b6a73b2d240d08f0132e2',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
