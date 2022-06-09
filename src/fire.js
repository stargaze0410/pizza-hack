import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAamcqHKQA0IVclz1MawLo_sXVzSo1A3L8",
  authDomain: "pizza-hack.firebaseapp.com",
  projectId: "pizza-hack",
  storageBucket: "pizza-hack.appspot.com",
  messagingSenderId: "770453862026",
  appId: "1:770453862026:web:dde5bd6c9d658a55895f73",
  measurementId: "G-9YQ7XZ3D19",
};

// Инициализируем Firebase

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
