import React, { Component } from 'react';
import {BrowserRouter as Switch, BrowserRouter, Route, Link} from 'react-router-dom';
import Menu from '../Menu/Menu.js';
import logo2 from '../logo.png';
import '../App.css';

class Header extends Component {
  render() {

    const value = [
    'spells', 
    'classes', 
    'monsters', 
    // 'subClasses',
    'races', 
    'equipment'
    ];

    const icon = [
      'fa-bolt',
      'fa-medkit',
      'fa-paw',
      // 'fa-balance-scale',
      'fa-group',
      'fa-magic',
    ]


    return (

      <header className="App-header">
        <Link to='/'>
          <img src={logo2} className="App-logo" alt="logo" />
        </Link>
        <Menu value={value} icon={icon} link={value} />
      </header>

    );
  }
}

export default Header;
