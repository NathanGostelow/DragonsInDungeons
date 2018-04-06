import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Monsters from './Monsters/Monsters.js';
import Subclasses from './Subclasses/Subclasses.js';
import Classes from './Classes/Classes.js';
import Spells from './Spells/Spells.js';
import Races from './Races/Races.js';
import Equipment from './Equipment/Equipment.js';
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
            <Link to='/'>
              <img src={logo2} className="App-logo" alt="logo" />
            </Link>
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
          <Route exact path='/'/>
          <Route path='/Monsters' component={Monsters} />
          <Route path='/Subclasses' component={Subclasses} />
          <Route path='/Classes' component={Classes} />
          <Route path='/Spells' component={Spells} />
          <Route path='/Races' component={Races} />
          <Route path='/Equipment' component={Equipment} />
          
      </div>
    );
  }
}

export default App;
