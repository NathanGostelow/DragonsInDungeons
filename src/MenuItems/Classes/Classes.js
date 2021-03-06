import React, { Component } from 'react';
// import './Classes.css';
import D20 from '../D20.png';

class Classes extends Component {
	constructor(props){
		super(props);
		this.state = {
			error: null,
			classes : [],
			isLoaded: false
		};
	}

	componentDidMount() {
    this.ClassesList();
  }

  ClassesList() {
    fetch('http://www.dnd5eapi.co/api/classes')
    	.then(res => res.json())
      .then(
      	(result) => {
          result.results.sort((a, b) => a.name - b.name);
    	  	this.setState({
		     		isLoaded: true,
   	   			classes: result.results.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)) 

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
  	const {error, isLoaded, classes} = this.state;
  	if(error){
  		return <div> Error: {error.message}</div>
  	} else if(!isLoaded){
  		return <img src={D20} className="loading-image" alt="Loading" />
  	} else {
	    return (
	      <div className="container">
	        <h1> Classes </h1>
	        	{classes.map(item => (
  	        		<div className='classes-card' key={item.name}>
                  <span className='classes-title'>{item.name}</span>
                  <img className='classes-img' src={process.env.PUBLIC_URL + '/img/classes/' + item.name +'.png'} alt={item.name}/>
                  {/*<div className='overlay'> testicle</div>*/}
                  {/*<span className='classes-button'> View Details </span>*/}
	           		</div>
	        	))}       
	      </div>
	    );
	  }
  }
}

export default Classes;
