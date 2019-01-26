import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="logo.svg" className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
          <p>Exercise 1 - Controlled Component</p>
        </header>
        <main className="App-main">
          <div className="container">
            <input type="text" placeholder="Say Something" />
            <p className="echo">Echo:</p>
            <p>This should mirror the text you typed into the input field.</p>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
