import firebase from 'firebase';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyA4loBwRjbOGZ7kJRvQ5c3u1txrhRWpfSs',
  authDomain: 'list-members.firebaseapp.com',
  projectId: 'list-members',
  storageBucket: 'list-members.appspot.com',
  messagingSenderId: '362034244469',
  appId: '1:362034244469:web:2ae0c96585473bc271413c',
  measurementId: 'G-QLKPD91GKR',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();

export { auth };
