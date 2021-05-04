import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyAqUAVYkpeAQQCQGxywK0c2k_b6gHLcvpY',
  authDomain: 'mycontacts-2dff4.firebaseapp.com',
  projectId: 'mycontacts-2dff4',
  storageBucket: 'mycontacts-2dff4.appspot.com',
  messagingSenderId: '285447675168',
  appId: '1:285447675168:web:692676402cb5abea958b45',
  measurementId: 'G-E1XL4Z44GJ',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();
const auth = firebase.auth();

//collection references
const userCollection = db.collection('users')

export { 
  auth,
  userCollection,
  db
};
