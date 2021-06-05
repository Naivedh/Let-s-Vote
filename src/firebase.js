import firebase from 'firebase/app'
import "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "lets--vote.firebaseapp.com",
  projectId: "lets--vote",
  storageBucket: "lets--vote.appspot.com",
  messagingSenderId: "154539961096",
  appId: "1:154539961096:web:6d36d0cd0f27b8da2b9abd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;