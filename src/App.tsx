import React from 'react';
import './App.scss';
import Home from './Components/home';
import SignUp from './Components/Signup/signup';
import { Routes, Route } from "react-router-dom";
import firebaseApp from './Components/config/config';
import firebase from 'firebase/compat/app';

// Initialize Firebase app
firebase.initializeApp(firebaseApp);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp firebaseApp={firebaseApp} />} />
      </Routes>
    </div>
  );
}

export default App;
