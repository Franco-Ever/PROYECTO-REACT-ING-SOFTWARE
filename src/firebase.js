import firebase from "firebase/app";
import 'firebase/firestore';
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyARaLHrr6o52uKTbMG5VCbUCJIhZzZ4q7o",
  authDomain: "loginauthreactjs.firebaseapp.com",
  projectId: "loginauthreactjs",
  storageBucket: "loginauthreactjs.appspot.com",
  messagingSenderId: "536514428873",
  appId: "1:536514428873:web:be66a04cef111ce508f218"
};
  // Initialize Firebase
 const fb= firebase.initializeApp(firebaseConfig);

export const db= fb.firestore();
