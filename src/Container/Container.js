import React, { Component } from 'react';
import {Switch, BrowserRouter, Route, Link} from 'react-router-dom';
import Monsters from '../MenuItems/Monsters/Monsters.js';
import Subclasses from '../MenuItems/Subclasses/Subclasses.js';
import Classes from '../MenuItems/Classes/Classes.js';
import Spells from '../MenuItems/Spells/Spells.js';
import Races from '../MenuItems/Races/Races.js';
import Equipment from '../MenuItems/Equipment/Equipment.js';
import logo2 from '../logo.png';
import '../App.css';

class Container extends Component {
  render() {
    return (

      <main>
        <Switch>
          <Route exact path='/' />
          <Route path='/Monsters' component={Monsters} />
          <Route path='/Subclasses' component={Subclasses} />
          <Route path='/Classes' component={Classes} />
          <Route path='/Spells' component={Spells} />
          <Route path='/Races' component={Races} />
          <Route path='/Equipment' component={Equipment} />
        </Switch>
      </main>
    );
  }
}

export default Container;
