import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './Card.css';


function Card(props) {

    return (
    <Link to={`/${props.link}`}>
      <div className='Card'>
        <h3 className='Card-Title'> <i className={`fa ${props.img} fa-2x`} > </i>  { props.value} </h3>
      </div>
      </Link>
    );
  
}

export default Card;
