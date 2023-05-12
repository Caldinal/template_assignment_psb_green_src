import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyCoCUAJLH3l60HiPhtkYVDnjx3y4NC3SLo",
  authDomain: "template7-23e9e.firebaseapp.com",
  projectId: "template7-23e9e",
  storageBucket: "template7-23e9e.appspot.com",
  messagingSenderId: "278269898885",
  appId: "1:278269898885:web:f81c47c92ea9128467b9ec"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export {auth , db, storage}