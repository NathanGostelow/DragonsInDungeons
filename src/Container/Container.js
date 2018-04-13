import React, { Component } from 'react';
import {Switch, BrowserRouter, Route, Link} from 'react-router-dom';
import Subclasses from '../MenuItems/Subclasses/Subclasses.js';
import Classes from '../MenuItems/Classes/Classes.js';
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
          <Route path='/monsters' render={() => <Equipment cont='monsters'/>} />
          <Route path='/equipment' render={() => <Equipment cont='equipment'/>} />
          <Route path='/spells' render={() => <Equipment cont='spells'/>} />
          <Route path='/subclasses' component={Subclasses} />
          <Route path='/classes' component={Classes} />
          <Route path='/races' component={Races} />
        </Switch>
      </main>
    );
  }
}

export default Container;
