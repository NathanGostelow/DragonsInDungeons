import React, { Component } from 'react';
import _ from 'lodash';
// import includes from 'lodash/includes.js'
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
    const cachedData = localStorage.getItem('equipment');
    if(cachedData){
      console.log('serving from localstorage rather than wastering away the data')
      this.setState({
        isLoaded : true,
        equipment : JSON.parse(cachedData)
      })
      return;
    }
    fetch('http://www.dnd5eapi.co/api/equipment')
    	.then(res => res.json())
      .then(
      	(result) => {
          this.SortItems(result.results);
      },
      (error) =>{
      	this.setState({
      		isLoaded: true,
      		error
      	})
      });
  }

  SortItems(data){
    data = _.uniqBy(data, 'name');
    data.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    this.AddToGlossary(data);

  }
  SetLocalStorage(){
    localStorage.setItem('equipment', JSON.stringify(this.state.equipment));
  }

  AddToGlossary(data){
    const alph = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let gloss = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let items = data;

    for(let item of items){     
      item.value =  _.includes(alph, item.name[0].toLowerCase()) ? item.name[0].toLowerCase() : 'n/a';
      if(_.includes(gloss, item.name[0].toLowerCase())){
        item.firstInGlossary = true;
        gloss.shift();
      }else{
        item.firstInGlossary = false;
      }
          
    }
    this.setState({
      isLoaded :true,
      equipment : items
    })
    this.SetLocalStorage();
  }

  RenderGlossary(gloss, first){
    if(!first){
      return null
    }
      return <div> {gloss} </div>;
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

	        	{equipment.map((item) => (
              <div className='inner-container' key={item.name}>
              <div>
                  { this.RenderGlossary(item.value, item.firstInGlossary) }
                </div>
	        		<div className='equipment-card'>
	        			<span className='equipment-title'>{item.value} {item.name}</span>
	        		</div>
              </div>
	        	))}       
	      </div>
	    );
	  }
  }
}

export default Equipment;
