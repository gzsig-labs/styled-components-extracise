import React, { Component } from 'react';
import './App.css';
import Home from './containers/Home';
import NavBar from './components/NavBar';
import Beers from './containers/Beers';
import Beer from './components/Beer';
import NewBeer from './components/NewBeer';
import { Switch, Route } from 'react-router-dom';

import beersAPI from './utils/axios';

class App extends Component {
  state = {
    beers: [],
    chosenBeer: {},
    randomBeer: {},
    message: ''
  };

  async componentDidMount() {
    try {
      const beers = await beersAPI.get('/all');
      return this.setState({
        beers: beers.data
      });
    } catch (error) {
      console.log(error);
    }
  }

  searchBeer = async id => {
    try {
      const beer = await beersAPI.get(`/single/${id}`);
      return this.setState({
        chosenBeer: beer.data
      });
    } catch (error) {
      console.log(error);
    }
  };

  searchRandomBeer = async () => {
    try {
      const beer = await beersAPI.get('/random');
      return this.setState({
        randomBeer: beer.data
      });
    } catch (error) {
      console.log(error);
    }
  };

  clearBeer = () => {
    return this.setState({
      chosenBeer: {},
      randomBeer: {}
    });
  };

  createNewBeer = async beerObj => {
    try {
      const newBeer = await beersAPI.post('/new', beerObj);
      this.setState({
        message: newBeer.data.message
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route
            path='/beers'
            render={() => {
              return <Beers beers={this.state.beers} NavBar={NavBar} />;
            }}
          />
          <Route
            path='/beer/:id'
            render={props => {
              return (
                <Beer
                  {...props}
                  beer={this.state.chosenBeer}
                  NavBar={NavBar}
                  handleBeer={this.searchBeer}
                  clearBeer={this.clearBeer}
                />
              );
            }}
          />
          <Route
            path='/random'
            render={() => {
              return (
                <Beer
                  beer={this.state.randomBeer}
                  NavBar={NavBar}
                  handleBeer={this.searchRandomBeer}
                  clearBeer={this.clearBeer}
                />
              );
            }}
          />
          <Route
            path='/new-beer'
            render={() => {
              return (
                <NewBeer
                  createBeer={this.createNewBeer}
                  NavBar={NavBar}
                  message={this.state.message}
                />
              );
            }}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
