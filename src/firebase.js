// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCcgBG0-OUoDmhoeok3WXWfrKZ7iXSxky4",

  authDomain: "shopswift-app.firebaseapp.com",

  projectId: "shopswift-app",

  storageBucket: "shopswift-app.firebasestorage.app",

  messagingSenderId: "727136274260",

  appId: "1:727136274260:web:f7cc274738ef431afceac1",

  measurementId: "G-Z8Z8YL8B5Y"

};



// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);