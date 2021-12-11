import './Card.css';
import React from 'react';



function DescriptionCard(props) {

  return (
    <div className='superhero-card'>
      <img className='superhero-picture' alt="superhero" src={props.picture} />
      <div className='container'>
      <div className='superhero-name'>Name: {props.name}</div>
      <div className='superhero-universe'>Universe: {props.universe}</div>
      <div className='superhero-alterEgo'>Alter Ego: {props.alterEgo}</div>
      <div className='superhero-occupation'>Occupation: {props.occupation}</div>
      <div className='superhero-friends'>Friends: {props.friends}</div>
      <div className='superhero-powers'>Super-Powers: {props.superPowers}</div>
      <div className='superhero-info'>Info: {props.info}</div>
    </div>
    </div>
  );
}

export default DescriptionCard