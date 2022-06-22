import firebase from "firebase";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnfLpT3h1dcVigiXaWwoBli3jVt-nZus0",
  authDomain: "rn-prus.firebaseapp.com",
  projectId: "rn-prus",
  storageBucket: "rn-prus.appspot.com",
  messagingSenderId: "579165673929",
  appId: "1:579165673929:web:db68edd45097ad247a7018",
  measurementId: "G-PML5FGYW4B"
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();

export {firebase,db};
