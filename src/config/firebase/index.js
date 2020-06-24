import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDvwpo1e0OmkWywREOUFJjoyhG2ewp8CyI",
    authDomain: "digitan-a7c1b.firebaseapp.com",
    databaseURL: "https://digitan-a7c1b.firebaseio.com",
    projectId: "digitan-a7c1b",
    storageBucket: "digitan-a7c1b.appspot.com",
    messagingSenderId: "1046090615035",
    appId: "1:1046090615035:web:9beed928c48e906968085e",
    measurementId: "G-43S5G45HH8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export default firebase;