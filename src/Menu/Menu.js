import React, { Component } from 'react';
import './Menu.css';
import Card from './Card/Card.js';

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <div className="Row">
	        <Card value={'Spells'} img={'fa-bolt'} />
	        <Card value={'Classes'} img={'fa-medkit'} />
	        <Card value={'Monsters'} img={'fa-gitlab'} />

	        <Card value={'SubClasses'} img={'fa-balance-scale'} />
	        <Card value={'Races'} img={'fa-hand-spock-o'} />
	        <Card value={'Equipment'} img={'fa-apple'} />
        </div>

        
      </div>
    );
  }
}

export default Menu;
