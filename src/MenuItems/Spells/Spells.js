import React, { Component } from 'react';
import D20 from '../D20.png';

class Spells extends Component {
	constructor(props){
		super(props);
		this.state = {
			error: null,
			spells : [],
			isLoaded: false
		};
	}

	componentDidMount() {
    this.SpellsList();
    console.log('1');
  }

  SpellsList() {
    fetch('http://www.dnd5eapi.co/api/spells')
    	.then(res => res.json())
      .then(
      	(result) => {
          result.results.sort((a, b) => a.name - b.name);
          console.log(result.results);
    	  	this.setState({
		     		isLoaded: true,
   	   			spells: result.results.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)) 

   	   		})
    	  	console.log('2');
      },
      (error) =>{
      	this.setState({
      		isLoaded: true,
      		error
      	})
      });
  }

  render() {
  	const {error, isLoaded, spells} = this.state;
  	if(error){
  		return <div> Error: {error.message}</div>
  	} else if(!isLoaded){
  		return <img src={D20} className="loading-image" alt="Loading" />
  	} else {
	    return (
	      <div className="container">
	        <h1> Spells </h1>
	        	{spells.map(item => (
	        		<div className='equipment-card' key={item.name}>
	        			<span className='equipment-title'>{item.name}</span>
	        		</div>
	        	))}       
	      </div>
	    );
	  }
  }
}

export default Spells;
