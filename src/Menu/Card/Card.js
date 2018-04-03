import React from 'react';
import './Card.css';


function Card(props) {
    return (
      <div className='Card'>
        <h3> {props.value} </h3>
        <div className={`fa ${props.img} fa-2x`}></div>
      </div>
    );
  
}

export default Card;
