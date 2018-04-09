import React, { Component } from 'react';
import './Equipment.css';
import D20 from '../D20.png';
// import Card from './Card/Card.js';

class Equipment extends Component {
	constructor(props){
		super(props);
		this.state = {
			error: null,
			equipment : [],
			isLoaded: false
		};
	}

	componentDidMount() {
    this.EquipmentList();
  }

  EquipmentList() {
    fetch('http://www.dnd5eapi.co/api/equipment')
    	.then(res => res.json())
      .then(
      	(result) => {
    	  	this.setState({
		     		isLoaded: true,
   	   			equipment: result.results 
   	   		})
    	  	console.log(this.state);
      },
      (error) =>{
      	this.setState({
      		isLoaded: true,
      		error
      	})
      });
  }

  render() {
  	const {error, isLoaded, equipment} = this.state;
  	if(error){
  		return <div> Error: {error.message}</div>
  	} else if(!isLoaded){
  		return <img src={D20} className="loading-image" alt="Loading" />
  	} else {
	    return (
	      <div className="container">
	        <h1> Hello Equipment </h1>
	        	{equipment.map(item => (
	        		<div className='equipment-card' key={item.name}>
	        			<span className='equipment-title'>{item.name}</span>
	        		</div>
	        	))}       
	      </div>
	    );
	  }
  }
}

export default Equipment;
