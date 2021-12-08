import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLIg7rF2yEzhfwVu_eTvTsfo6rD1s8LCs",
  authDomain: "math-sight.firebaseapp.com",
  projectId: "math-sight",
  databaseURL: "https://math-sight-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "math-sight.appspot.com",
  messagingSenderId: "436200955308",
  appId: "1:436200955308:web:4f9041103fe49501566e09",
  measurementId: "G-QZQMJ0YPTH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
