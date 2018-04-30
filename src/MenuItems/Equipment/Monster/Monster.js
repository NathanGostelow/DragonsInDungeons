import React, { Component } from 'react';
// import includes from 'lodash/includes.js'
import './Monster.css';
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
    this.ItemRequest();
  }

  CheckModifier(name, ability){
    let modifier = null;
    modifier = Math.floor((ability - 10) / 2);
    return (<td><span className="bold">{name}</span><span className="light">{ability}({modifier})</span></td>);
  }

  GetSavingThrows(obj){
    let savingThrows = '';

    savingThrows = obj.dexterity_save ? 'Dex ' + obj.dexterity_save + ', ' : '';
    savingThrows += obj.charisma_save ? 'Cha ' + obj.charisma_save + ', ' : '';
    savingThrows += obj.constitution_save ? 'Con ' + obj.constitution_save + ', ' : '';
    savingThrows += obj.wisdom_save ? 'Wis ' + obj.wisdom_save: '';
    savingThrows = (savingThrows.length < 1) ? null : savingThrows;

    if(savingThrows){
      return <li><span className="bold">Saving Throws</span> <span className="light">{savingThrows}</span></li>
    }
    return savingThrows;    
  }

  ItemRequest() {
  	const url = 'http://www.dnd5eapi.co/api';
    fetch( url + this.props.match.url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
          	item : result,
          	isLoaded: true,
          	desc: result.desc ? result.desc : ['This Item has no description :(']
          })
          console.log('componentDidMount request', this.state.item);
      },
      (error) =>{
        this.setState({
          isLoaded: true,
          error
        })
      });
  }

  render() {
  	const {error, item, isLoaded, desc} = this.state; 
  	if(error){
  		return <div> Error: {error.message}</div>
  	} else if(!isLoaded){
  		return <img src={D20} className="loading-image" alt="Loading" />
  	}else if(this.props.match.url.indexOf('equipment') >= 0){
  		return(
	  		<div className="container">
          <div className="inner-container-full">
            <div className="monster-title-container">
              <img className="icon" title={item.equipment_category} src={process.env.PUBLIC_URL + '/img/Icons/' + item.equipment_category + '.png'} alt={item.equipment_category}/>
              <span className="monster-title"> {item.name} - {item.cost.quantity}{item.cost.unit}</span>
            </div>
  	  			
  	  			<div className="column-2">
  	    			{/*<span className="monster-name">Category: {item.equipment_category} </span>*/}
  	    			{item.damage ? <span className="monster-name"> damage: {item.damage.dice_count}d{item.damage.dice_value}</span> : null}
              {item.armor_class ? <span className="monster-name"> AC: {item.armor_class.base}+{item.armor_class.max_bonus}</span> : null}
              {item.armor_class ? <span className="monster-name"> dex bonus: {item.armor_class.dex_bonus}</span> : null}
  	    			<span className="monster-name">Weight: {item.weight} </span>
  	    		</div>
  	    		<div className="column-2">
  	    			<div className="monster-title-container">
  		  			</div>
  	    			{desc.map((des, key) => (
  		    			<span key={key} className="monster-name"> {des} </span>
  		    		))}
  	    		</div>
  	    		{/*<h3 className="monster-desc"> {item.desc[0]} </h3> */}
	    	  </div>
        </div>
  		)
  	}else if(this.props.match.url.indexOf('monsters') >= 0){
  		return (
  			<div className="container">
          <div className="m-inner-container-full">
    				<h1 className="m-name"> {item.name}</h1>
            <p className="m-description"> {item.size}, {item.type} </p>
            <div className="m-break"></div>
            <ul className="monster-list">   
              <li><span className="bold">Armor Class:</span> <span className="light">{item.armor_class}</span></li>
              <li><span className="bold">Hit Points:</span> <span className="light">{item.hit_points}</span></li>
              <li><span className="bold">Speed:</span> <span className="light">{item.speed}</span></li>
            </ul>
            <div className="m-break"></div>
            <table>
              <tbody>
                <tr>
                  {this.CheckModifier('STR', item.strength)}
                  {this.CheckModifier('DEX', item.dexterity)}
                  {this.CheckModifier('CON', item.constitution)}
                  {this.CheckModifier('INT', item.intelligence)}
                  {this.CheckModifier('WIS', item.wisdom)}
                  {this.CheckModifier('CHA', item.charisma)}
                </tr>
              </tbody>
            </table>
            <div className="m-break"></div>
            <ul className="monster-list">   
              {this.GetSavingThrows(item)}
              <li><span className="bold">Senses </span> <span className="light">{item.senses}</span></li>
              <li><span className="bold">Languages</span> <span className="light">{item.languages}</span></li>
              <li><span className="bold">Challenge</span> <span className="light">{item.challenge_rating}</span></li>
            </ul>
          </div>
  			</div>
  		)
  	}else if(this.props.match.url.indexOf('spells') >= 0){
  		return (
  			<div className="container">
          <div className="inner-container-full">
    				<h1 className="monster-name"> coming soon </h1>
          </div>
  			</div>
  		)
  	}
  }
}

export default Monster;
