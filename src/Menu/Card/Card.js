import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './Card.css';


function Card(props) {

    return (
    <Link to={`/${props.link}`}>
      <div className='Card'>
        <h3 className='Card-Title'> {props.value} </h3>
        <div className={`fa ${props.img} fa-5x`}></div>
      </div>
      </Link>
    );
  
}

export default Card;
