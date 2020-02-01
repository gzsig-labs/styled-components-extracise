import React, { Component } from 'react';
import './App.css';
import Home from './containers/Home';
import NavBar from './components/NavBar';
import Beers from './containers/Beers';
import Beer from './components/Beer';
import NewBeer from './components/NewBeer';
import { Switch, Route } from 'react-router-dom';

import AppProvider from './context/AppProvider';

class App extends Component {
  render() {
    return (
      <AppProvider>
        <React.Fragment>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route
              path='/beers'
              render={() => {
                return <Beers />
              }}
            />
            <Route
              path='/beer/:id'
              component={Beer}
            />
            <Route
              path='/random'
              component={Beer}
            />
            <Route
              path='/new-beer'
              render={() => {
                return (
                  <NewBeer
                    
                  />
                );
              }}
            />
          </Switch>
        </React.Fragment>
      </AppProvider>
    );
  }
}

export default App;
