import firebase from "firebase";
// import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAzV0za9esDg8J4tWGPKEP36lrRng2lyR4",
  authDomain: "uber-eats-749b4.firebaseapp.com",
  projectId: "uber-eats-749b4",
  storageBucket: "uber-eats-749b4.appspot.com",
  messagingSenderId: "604552504850",
  appId: "1:604552504850:web:48398cab91f056f4a61acb",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
