import React, { Component } from 'react';
import { BrowserRouter as Router, Link} from '../node_modules/react-router-dom';

import Menu from './Menu/Menu.js';
import logo2 from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          
          <header className="App-header">
            <img src={logo2} className="App-logo" alt="logo" />
          </header>

        <Menu/>

        </div>
      </Router>
    );
  }
}

export default App;
