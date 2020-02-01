import React from 'react';
import StyledSingleListBeer from './styles';
import { Link } from 'react-router-dom';

const SingleListBeer = props => {
  return (
    <StyledSingleListBeer>
      <div className='div-img'>
        <Link to={`/beer/${props.beer._id}`}>
          <img src={props.beer.image_url} alt={props.beer.name} />
        </Link>
      </div>
      <div className='div-body'>
        <h2>{props.beer.name}</h2>
        <p className='description'>{props.beer.tagline}</p>
        <div className='contributedBy'>
          <strong>Created By: </strong>
          <p>{props.beer.contributed_by}</p>
        </div>
      </div>
    </StyledSingleListBeer>
  );
};

export default SingleListBeer;
