import React, { Component } from 'react';
import { Form, Label, Input, TextArea, Button } from './styles';

class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: ''
  };

  handleInput = e => {
    const state = {};
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createBeer(this.state);
  };

  render() {
    const NavBar = this.props.NavBar;
    return (
      <React.Fragment>
        <NavBar />
        <Form onSubmit={this.handleSubmit}>
          {this.props.message !== '' ? <p>{this.props.message}</p> : ''}
          <Label htmlFor='name'>Name</Label>
          <Input
            type='text'
            id='name'
            name='name'
            value={this.state.name}
            onChange={this.handleInput}
          />
          <Label htmlFor='tagline'>Tagline</Label>
          <Input
            type='text'
            id='tagline'
            name='tagline'
            value={this.state.tagline}
            onChange={this.handleInput}
          />
          <Label htmlFor='description'>Description</Label>
          <TextArea
            id='description'
            name='description'
            value={this.state.description}
            onChange={this.handleInput}
          />
          <Label htmlFor='first_brewed'>First Brewed</Label>
          <Input
            type='text'
            id='first_brewed'
            name='first_brewed'
            value={this.state.first_brewed}
            onChange={this.handleInput}
          />
          <Label htmlFor='brewers_tips'>Brewers Tips</Label>
          <Input
            type='text'
            id='brewers_tips'
            name='brewers_tips'
            value={this.state.brewers_tips}
            onChange={this.handleInput}
          />
          <Label htmlFor='attenuation_level'>Attenuation Level</Label>
          <Input
            type='number'
            id='attenuation_level'
            name='attenuation_level'
            value={this.state.attenuation_level}
            onChange={this.handleInput}
          />
          <Label htmlFor='contributed_by'>Contributed By</Label>
          <Input
            type='text'
            id='contributed_by'
            name='contributed_by'
            value={this.state.contributed_by}
            onChange={this.handleInput}
          />
          <Button type='submit'>ADD NEW</Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default NewBeer;
