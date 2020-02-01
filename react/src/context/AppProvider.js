import React, { Component } from "react";
import AppContext from './AppContext';
import beersAPI from '../utils/axios';
import NavBar from '../components/NavBar'

class AppProvider extends Component {
  state = {
    beers: [],
    chosenBeer: {},
    randomeBeer: {},
    message: ''
  }

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
        chosenBeer: beer.data
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
    const contextVariables = {
      state: this.state,
      searchBeer: this.searchBeer,
      searchRandomBeer: this.searchRandomBeer,
      clearBeer: this.clearBeer,
      createNewBeer: this.createNewBeer,
      loadBeers: this.loadBeers,
      NavBar,
    }
    return (
      <AppContext.Provider value={contextVariables}>
        {this.props.children}
      </AppContext.Provider>
    )
  }

}

export default AppProvider