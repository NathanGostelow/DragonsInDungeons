import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Monsters from './Monsters/Monsters.js';
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
      'fa-paw',
      'fa-balance-scale',
      'fa-group',
      'fa-magic',
    ]


    return (
      <div className="App">
          <header className="App-header">
            <img src={logo2} className="App-logo" alt="logo" />
          </header>
          {/*<Route exact path="" 
              component={Menu}
              value="value"
              icon="icon"
              link="value"
          />*/}
          <Route exact path='' render={()=><Menu
              value={value}
              icon={icon}
              link={value}
            />}
          />
          <Route path='/Monsters' component={Monsters} />
          
      </div>
    );
  }
}

export default App;
