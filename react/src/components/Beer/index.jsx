import React, { Component } from 'react';
import {
  StyledBeer,
  StyledImage,
  StyledDiv,
  Title,
  Tagline,
  Attenuation,
  Date,
  Description,
  ContributedBy,
} from './styles';
import AppContext from '../../context/AppContext';

class Beer extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    console.log(this.props);
    
    if (id) {
      return this.context.searchBeer(id);
    } else {
      return this.context.searchRandomBeer();
    }
  }

  componentWillUnmount() {
    this.context.clearBeer();
  }

  render() {
    return (
      <AppContext.Consumer>
        {(context) => (
          <React.Fragment>
            <context.NavBar />
            {Object.entries(context.state.chosenBeer).length === 0 ? (
              <p>Carregando</p>
            ) : (
                <StyledBeer>
                  <StyledImage
                    src={context.state.chosenBeer.image_url}
                    alt={context.state.chosenBeer.name}
                  />
                  <StyledDiv>
                    <Title>{context.state.chosenBeer.name}</Title>
                    <Attenuation>{context.state.chosenBeer.attenuation_level}</Attenuation>
                  </StyledDiv>
                  <StyledDiv>
                    <Tagline>{context.state.chosenBeer.tagline}</Tagline>
                    <Date>{context.state.chosenBeer.first_brewed}</Date>
                  </StyledDiv>
                  <Description>{context.state.chosenBeer.description}</Description>
                  <ContributedBy>{context.state.chosenBeer.contributed_by}</ContributedBy>
                </StyledBeer>
              )}
          </React.Fragment>
        )}
      </AppContext.Consumer>
    );
  }
}
Beer.contextType = AppContext;
export default Beer;
