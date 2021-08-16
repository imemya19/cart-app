import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import  firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD3m9xgmvDe9TKnqxFVFDfVOEQuls3iH3Q",
    authDomain: "cart-app-81c92.firebaseapp.com",
    projectId: "cart-app-81c92",
    storageBucket: "cart-app-81c92.appspot.com",
    messagingSenderId: "354698273693",
    appId: "1:354698273693:web:2725085491002885bc8574",
    measurementId: "G-B37D5LTKX1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

