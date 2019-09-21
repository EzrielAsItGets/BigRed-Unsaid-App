import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAESjy6DCiKTMbxbRaxPPPLde0qRaIwtts",
    authDomain: "unsaid-253618.firebaseapp.com",
    databaseURL: "https://unsaid-253618.firebaseio.com",
    projectId: "unsaid-253618",
    storageBucket: "unsaid-253618.appspot.com",
    messagingSenderId: "603598121238",
    appId: "1:603598121238:web:0930c2faa615d4cee3c837"
  };
  // Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;