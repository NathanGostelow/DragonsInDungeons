import React, { Component } from 'react';
import _ from 'lodash';
import D20 from '../D20.png';

class SubClasses extends Component {
	constructor(props){
		super(props);
		this.state = {
			error: null,
			subclasses : [],
			isLoaded: false
		};
	}

	componentDidMount() {
    this.SubClasslist();
  }

  SubClasslist() {
    fetch('http://www.dnd5eapi.co/api/subclasses')
    	.then(res => res.json())
      .then(
      	(result) => {
    	  	this.setState({
		     		isLoaded: true,
            subclasses: _.uniqBy(result.results, 'name')
   	   		})
          this.SortItems();
          // this.AddToGlossary();
      },
      (error) =>{
      	this.setState({
      		isLoaded: true,
      		error
      	})
      });
  }

  SortItems(){
    this.setState({subclasses: this.state.subclasses.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))}) 
  }

  // AddToGlossary(){
  //   const alph = 'abcdefghijklmnopqrstuvqxyz'.split('');
  // }

  render() {
  	const {error, isLoaded, subclasses} = this.state;
  	if(error){
  		return <div> Error: {error.message}</div>
  	} else if(!isLoaded){
  		return <img src={D20} className="loading-image" alt="Loading" />
  	} else {
	    return (
	      <div className="container">
	        <h1> SubClasses </h1>
	        	{subclasses.map(item => (
	        		<div className='equipment-card' key={item.name}>
	        			<span className='equipment-title'>{item.name}</span>
	        		</div>
	        	))}       
	      </div>
	    );
	  }
  }
}

export default SubClasses;
