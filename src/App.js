import React, { Component } from 'react';
import Menu from './Menu/Menu.js';
import logo2 from './logo.png';
import './App.css';

class App extends Component {
  render() {

    const value = [
    'Spells', 
    'Classes', 
    'Monsters', 
    'SubClasses',
    'Races', 
    'Equipment'
    ];

    const icon = [
      'fa-bolt',
      'fa-medkit',
      'fa-gitlab',
      'fa-balance-scale',
      'fa-hand-spock-o',
      'fa-apple',
    ]


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo2} className="App-logo" alt="logo" />
        </header>

      <Menu
        value={value}
        icon={icon}
      />

      </div>
    );
  }
}

export default App;
