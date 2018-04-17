import React, { Component } from 'react';
import {Switch, BrowserRouter, Route, Link} from 'react-router-dom';
// import Subclasses from '../MenuItems/Subclasses/Subclasses.js';
import RaceClass from '../MenuItems/RaceClass/RaceClass.js';
import Equipment from '../MenuItems/Equipment/Equipment.js';
import Monster from '../MenuItems/Equipment/Monster/Monster.js';
import logo2 from '../logo.png';
import '../App.css';

class Container extends Component {
  render() {
    return (

      <main>
        <Switch>
          <Route exact path='/' />
          <Route exact path='/monsters' render={(props) => <Equipment {...props} cont='monsters'/>} />
          <Route exact path='/equipment' render={(props) => <Equipment {...props} cont='equipment'/>} />
          <Route exact path='/spells' render={(props) => <Equipment {...props} cont='spells'/>} />
          <Route path='/classes' render={(props) => <RaceClass {...props} cont='classes'/>} />
          <Route path='/races' render={(props) => <RaceClass {...props} cont='races'/>} />
          <Route path='/monsters/:id' component={Monster} />
          <Route path='/equipment/:id' component={Monster} />
          <Route path='/spells/:id' component={Monster} />
          {/*<Route path='/subclasses' component={Subclasses} />*/}
        </Switch>
      </main>
    );
  }
}

export default Container;
