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
  	console.log(this.props);
    this.EquipmentList();
  }

  EquipmentList() {
  	const url = 'http://www.dnd5eapi.co/api/equipment/';
    fetch( url + this.props.match.params.id)
      .then(res => res.json())
      .then(
        (result) => {
          console.log('results', result);
          this.setState({
          	item : result,
          	isLoaded: true
          })
          console.log(this.state.item.name);
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
  	console.log(this.state);
  	if(error){
  		return <div> Error: {error.message}</div>
  	} else if(!isLoaded){
  		return <img src={D20} className="loading-image" alt="Loading" />
  	}else{
  		return(
	  		<div className="container">
	    		<h1 className="monster-name"> {item.name} </h1>
	    		<h3 className="monster-desc"> {item.desc[0]} </h3> 
	    	</div>
  		)
  	}
  }
}

export default Monster;
