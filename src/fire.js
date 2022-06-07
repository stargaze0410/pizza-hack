import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBfoe1HfVhy0uDSatQ384M4HwdrbY8GyTw",
    authDomain: "final-project-84210.firebaseapp.com",
    projectId: "final-project-84210",
    storageBucket: "final-project-84210.appspot.com",
    messagingSenderId: "850845450775",
    appId: "1:850845450775:web:6e51042b15d785ef385252",
    measurementId: "G-XMF4M0B79L"
};

// Инициализируем Firebase

const fire = firebase.initializeApp(firebaseConfig);

export default fire;