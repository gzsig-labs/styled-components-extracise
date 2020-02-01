import React from 'react';
import SingleListBeer from '../../components/SingleListBeer';

const Beers = props => {
  return (
    <React.Fragment>
      <props.NavBar />
      {props.beers.map(beer => {
        return <SingleListBeer beer={beer} key={beer._id} />;
      })}
    </React.Fragment>
  );
};

export default Beers;
