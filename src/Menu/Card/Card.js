import React from 'react';
import './Card.css';


function Card(props) {
    return (
      <div className='Card'>
        <h3 className='Card-Title'> {props.value} </h3>
        <div className={`fa ${props.img} fa-5x`}></div>
      </div>
    );
  
}

export default Card;
