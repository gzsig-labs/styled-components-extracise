import React from 'react';
import SingleListBeer from '../../components/SingleListBeer';
import AppContext from '../../context/AppContext';

const Beers = props => {
  return (
    <AppContext.Consumer>
      {(context) => {
        return (
          <React.Fragment>
            <context.NavBar />
            {context.state.beers.map(beer => {
              return <SingleListBeer beer={beer} key={beer._id} />;
            })}
          </React.Fragment>
        )
      }}
    </AppContext.Consumer>
  );
};

export default Beers;
