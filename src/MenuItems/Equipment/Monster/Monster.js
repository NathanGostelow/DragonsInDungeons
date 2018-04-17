import React, { Component } from 'react';
// import includes from 'lodash/includes.js'
import D20 from '../../D20.png';
// import Card from './Card/Card.js';

class Monster extends Component {

  componentDidMount(){
    console.log(this.props);
  }

  render() {
    return(<img className="loading-image" src={D20} />)
  }
}

export default Monster;
