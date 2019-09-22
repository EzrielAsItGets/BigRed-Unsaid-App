import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebaseApp from "./firebase.js"

function getDataTemplate() {
  var db = firebaseApp.firestore();
  db.collection("words").get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
      });
    })
}

function getHappyWords1() {
  var db = firebaseApp.firestore();
  db.collection("words").where('emotion1', '==', 'happy').get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
      });
    })
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
