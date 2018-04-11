import React, { Component } from 'react';
import D20 from '../D20.png';

class Monsters extends Component {
	constructor(props){
		super(props);
		this.state = {
			error: null,
			monsters : [],
			isLoaded: false
		};
	}

	componentDidMount() {
    this.MonstersList();
  }

  MonstersList() {
    fetch('http://www.dnd5eapi.co/api/monsters')
    	.then(res => res.json())
      .then(
      	(result) => {
          result.results.sort((a, b) => a.name - b.name);
    	  	this.setState({
		     		isLoaded: true,
   	   			monsters: result.results.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)) 

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
  	const {error, isLoaded, monsters} = this.state;
  	if(error){
  		return <div> Error: {error.message}</div>
  	} else if(!isLoaded){
  		return <img src={D20} className="loading-image" alt="Loading" />
  	} else {
	    return (
	      <div className="container">
	        <h1> Monsters </h1>
	        	{monsters.map(item => (
	        		<div className='equipment-card-temp' key={item.name}>
	        			<span className='equipment-title'>{item.name}</span>
	        		</div>
	        	))}       
	      </div>
	    );
	  }
  }
}

export default Monsters;
