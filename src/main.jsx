// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import './index.css';
import App from './App.jsx';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-rvvvLf0vIkMi-jdniuDrcomRDFpDg-o",
  authDomain: "arambhumireddy-portfolio.firebaseapp.com",
  projectId: "arambhumireddy-portfolio",
  storageBucket: "arambhumireddy-portfolio.firebasestorage.app",
  messagingSenderId: "530086161288",
  appId: "1:530086161288:web:f0616387497457c8c9e83d",
  measurementId: "G-421FXS496F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "/React-port/"}> {/* Add BrowserRouter and basename */}
      <App />
    </BrowserRouter>
  </StrictMode>,
);