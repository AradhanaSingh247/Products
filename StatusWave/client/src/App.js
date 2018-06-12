import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './Containers/login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to status wave</h1>
        </header>
        <p className="App-intro">
        <Login/>
        </p>
      </div>
    );
  }
}

export default App;
