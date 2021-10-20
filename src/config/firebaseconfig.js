import firebase from "firebase";
import "firebase/storage"; 


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD65wHPi6188XTC7ECOP0PuM4T-d8g1Wd4",
  authDomain: "task-8774a.firebaseapp.com",
  projectId: "task-8774a",
  storageBucket: "task-8774a.appspot.com",
  messagingSenderId: "596512075769",
  appId: "1:596512075769:web:d841efcbfe459753351728"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;