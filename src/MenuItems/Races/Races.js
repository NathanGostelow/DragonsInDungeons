import React, { Component } from 'react';
import D20 from '../D20.png';

class Races extends Component {
	constructor(props){
		super(props);
		this.state = {
			error: null,
			races : [],
			isLoaded: false
		};
	}

	componentDidMount() {
    this.RacesList();
  }

  RacesList() {
    fetch('http://www.dnd5eapi.co/api/races')
    	.then(res => res.json())
      .then(
      	(result) => {
          result.results.sort((a, b) => a.name - b.name);
    	  	this.setState({
		     		isLoaded: true,
   	   			races: result.results.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)) 

   	   		})
      },
      (error) =>{
      	this.setState({
      		isLoaded: true,
      		error
      	})
      });
  }

  render() {
  	const {error, isLoaded, races} = this.state;
  	if(error){
  		return <div> Error: {error.message}</div>
  	} else if(!isLoaded){
  		return <img src={D20} className="loading-image" alt="Loading" />
  	} else {
	    return (
	      <div className="container">
	        <h1> Races </h1>
	        	{races.map(item => (
	        		<div className='equipment-card' key={item.name}>
	        			<span className='equipment-title'>{item.name}</span>
	        		</div>
	        	))}       
	      </div>
	    );
	  }
  }
}

export default Races;
