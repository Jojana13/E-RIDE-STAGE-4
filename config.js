import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyA9qYki2Magr8wBAZAvEQzmoVOriZvD1WQ",
    authDomain: "e-ride-5b13f.firebaseapp.com",
    projectId: "e-ride-5b13f",
    storageBucket: "e-ride-5b13f.appspot.com",
    messagingSenderId: "6392979926",
    appId: "1:6392979926:web:3ffe79f9d3d94627008477"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
