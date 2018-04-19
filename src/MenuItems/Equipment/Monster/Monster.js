import React, { Component } from 'react';
// import includes from 'lodash/includes.js'
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
    this.EquipmentList();
  }

  EquipmentList() {
  	// console.log(this.props);
  	const url = 'http://www.dnd5eapi.co/api';
    fetch( url + this.props.match.url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
          	item : result,
          	isLoaded: true
          })
          // this.SortItems(result.results);
      },
      (error) =>{
        this.setState({
          isLoaded: true,
          error
        })
      });
  }

  render() {
  	const {error, item, isLoaded} = this.state;
  	console.log(this.props.match.url.indexOf('equipment') >= 0);
  	if(error){
  		return <div> Error: {error.message}</div>
  	} else if(!isLoaded){
  		return <img src={D20} className="loading-image" alt="Loading" />
  	}else if(this.props.match.url.indexOf('equipment') >= 0){
  		return(
	  		<div className="container">
	  			<div className="column-2">
	    			<h1 className="monster-name"> {item.name} </h1>
	    		</div>
	    		<div className="column-2">
	    			<h1 className="monster-name"> {item.name} </h1>
	    		</div>
	    		{/*<h3 className="monster-desc"> {item.desc[0]} </h3> */}
	    	</div>
  		)
  	}else if(this.props.match.url.indexOf('monsters') >= 0){
  		return (
  			<div className="container">
  				<h1 className="monster-name"> coming soon </h1>
  			</div>
  		)
  	}else if(this.props.match.url.indexOf('spells') >= 0){
  		return (
  			<div className="container">
  				<h1 className="monster-name"> coming soon </h1>
  			</div>
  		)
  	}
  }
}

export default Monster;
