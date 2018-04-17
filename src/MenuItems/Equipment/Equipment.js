import React, { Component } from 'react';
import _ from 'lodash';
import {Router, Link} from 'react-router-dom';
// import includes from 'lodash/includes.js'
import './Equipment.css';
import D20 from '../D20.png';
// import Card from './Card/Card.js';

class Equipment extends Component {
	constructor(props){
		super(props);
    console.log(props.match);
		this.state = {
      id: this.props.cont,
			error: null,
			equipment : [],
			isLoaded: false
		};
	}

  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.cont !== prevState.id){
      return {
          id: nextProps.cont,
          error: null,
          equipment : [],
          isLoaded: false
      }
    }
    return null
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.id !== this.state.id) {
      this.EquipmentList(this.state.id);
    }
  }
	componentDidMount() {
    this.EquipmentList(this.props.cont);
  }

  EquipmentList(prop) {
    const cachedData = localStorage.getItem(prop);
    if(cachedData){
      console.log('serving from localstorage rather than wastering away the data')
      this.setState({
        isLoaded : true,
        equipment : JSON.parse(cachedData)
      })
      return;
    }
    fetch('http://www.dnd5eapi.co/api/' + prop)
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
  SetLocalStorage(type){
    localStorage.setItem(type, JSON.stringify(this.state.equipment));
  }

  AddToGlossary(data){
    const storageName = this.props.cont;
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
    this.SetLocalStorage(storageName);
  }

  RenderGlossary(gloss, first){
    let glossUpper = gloss.toUpperCase();
    if(!first){
      return null
    }
      return <div className='dictionary-title'> {glossUpper} </div>;
  }

  render() {
  	const {error, isLoaded, equipment} = this.state;
    const match = this.props.match;
  	if(error){
  		return <div> Error: {error.message}</div>
  	} else if(!isLoaded){
  		return <img src={D20} className="loading-image" alt="Loading" />
  	} else {
	    return (
	      <div className="container">
	        	{equipment.map((item) => (
              <div className='inner-container' key={item.name}>
              <div>
                  { this.RenderGlossary(item.value, item.firstInGlossary) }
                </div>
	        		<div className='equipment-card'>
                <Link to={`${match.url}/${item.name}`}>
	        			    <span className='equipment-title'>{item.name}</span>
                </Link>
	        		</div>
              </div>
	        	))}       
	      </div>
	    );
	  }
  }
}

export default Equipment;
