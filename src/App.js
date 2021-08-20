import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Status from "./Components/Status.js";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Status text = "I am Rahul"/>
        <Status text = "My girlfriends name is Naveksha"/>
        <Status text = "We love each other a lot"/>

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
