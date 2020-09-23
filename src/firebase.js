import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDli4fue5jU2RZ8vygnh6LBYuFzJwdSJd4",
  authDomain: "challenge-31507.firebaseapp.com",
  databaseURL: "https://challenge-31507.firebaseio.com",
  projectId: "challenge-31507",
  storageBucket: "challenge-31507.appspot.com",
  messagingSenderId: "857653535985",
  appId: "1:857653535985:web:7a450b3b9f4156a6b93550",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }