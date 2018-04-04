import React, { Component } from 'react';
import './Menu.css';
import Card from './Card/Card.js';

class Menu extends Component {
  renderCard(i){
  	return(
  		<Card
  			value={this.props.value[i]}
  			img={this.props.icon[i]}
  		/>
  	);
  }
  render() {
    return (
      <div className="Menu">
        <div className="Row">
        	{this.renderCard(0)}
        	{this.renderCard(1)}
        	{this.renderCard(2)}
        	{this.renderCard(3)}
        	{this.renderCard(4)}
        	{this.renderCard(5)}
	       {/* <Card value={'Spells'} img={'fa-bolt'} />
	        <Card value={'Classes'} img={'fa-medkit'} />
	        <Card value={'Monsters'} img={'fa-gitlab'} />

	        <Card value={'SubClasses'} img={'fa-balance-scale'} />
	        <Card value={'Races'} img={'fa-hand-spock-o'} />
	        <Card value={'Equipment'} img={'fa-apple'} />*/}
        </div>

        
      </div>
    );
  }
}

export default Menu;
