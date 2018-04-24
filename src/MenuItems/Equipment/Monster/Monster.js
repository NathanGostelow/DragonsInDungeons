import React, { Component } from 'react';
// import includes from 'lodash/includes.js'
import './Monster.css';
import D20 from '../../D20.png';
// import Card from './Card/Card.js';

class Monster extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	item: null,
	  	isLoaded: false
	  };

	}

  componentDidMount(){
    this.ItemRequest();
  }

  ItemRequest() {
  	const url = 'http://www.dnd5eapi.co/api';
    fetch( url + this.props.match.url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
          	item : result,
          	isLoaded: true,
          	desc: result.desc ? result.desc : ['This Item has no description :(']
          })
          console.log('componentDidMount request', this.state.item);
      },
      (error) =>{
        this.setState({
          isLoaded: true,
          error
        })
      });
  }

  render() {
  	const {error, item, isLoaded, desc} = this.state; 
  	if(error){
  		return <div> Error: {error.message}</div>
  	} else if(!isLoaded){
  		return <img src={D20} className="loading-image" alt="Loading" />
  	}else if(this.props.match.url.indexOf('equipment') >= 0){
  		return(
	  		<div className="container">
          <div className="inner-container-full">
            <div className="monster-title-container">
              <img className="icon" title={item.equipment_category} src={process.env.PUBLIC_URL + '/img/Icons/' + item.equipment_category + '.png'} alt={item.equipment_category}/>
              <span className="monster-title"> {item.name} - {item.cost.quantity}{item.cost.unit}</span>
            </div>
  	  			
  	  			<div className="column-2">
  	    			{/*<span className="monster-name">Category: {item.equipment_category} </span>*/}
  	    			{item.damage ? <span className="monster-name"> damage: {item.damage.dice_count}d{item.damage.dice_value}</span> : null}
              {item.armor_class ? <span className="monster-name"> AC: {item.armor_class.base}+{item.armor_class.max_bonus}</span> : null}
              {item.armor_class ? <span className="monster-name"> dex bonus: {item.armor_class.dex_bonus}</span> : null}
  	    			<span className="monster-name">Weight: {item.weight} </span>
  	    		</div>
  	    		<div className="column-2">
  	    			<div className="monster-title-container">
  		  			</div>
  	    			{desc.map((des, key) => (
  		    			<span key={key} className="monster-name"> {des} </span>
  		    		))}
  	    		</div>
  	    		{/*<h3 className="monster-desc"> {item.desc[0]} </h3> */}
	    	  </div>
        </div>
  		)
  	}else if(this.props.match.url.indexOf('monsters') >= 0){
  		return (
  			<div className="container">
          <div className="inner-container-full">
    				<h1 className="monster-name"> coming soon </h1>
          </div>
  			</div>
  		)
  	}else if(this.props.match.url.indexOf('spells') >= 0){
  		return (
  			<div className="container">
          <div className="inner-container-full">
    				<h1 className="monster-name"> coming soon </h1>
          </div>
  			</div>
  		)
  	}
  }
}

export default Monster;
