import React, { Component } from 'react';

import Menu from './Menu/Menu.js';
import logo2 from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          
          <header className="App-header">
            <img src={logo2} className="App-logo" alt="logo" />
          </header>

        <Menu/>

        </div>
    );
  }
}

export default App;
