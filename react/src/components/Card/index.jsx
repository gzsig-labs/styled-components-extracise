import React from 'react';
import StyledCardLinked from './styles';

const Card = props => {
  return (
    <StyledCardLinked to={props.path}>
      <img src={props.image} alt={props.title}/>
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </StyledCardLinked>
  );
};

export default Card;