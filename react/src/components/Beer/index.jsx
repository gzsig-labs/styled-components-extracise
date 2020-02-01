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
  Paragraph
} from './styles';

class Beer extends Component {
  componentDidMount() {
    if (this.props.match) {
      const id = this.props.match.params.id;
      return this.props.handleBeer(id);
    } else {
      return this.props.handleBeer();
    }
  }

  componentWillUnmount() {
    this.props.clearBeer();
  }

  render() {
    return (
      <React.Fragment>
        <this.props.NavBar />
        {Object.entries(this.props.beer).length === 0 ? (
          <p>Carregando</p>
        ) : (
          <StyledBeer>
            <StyledImage
              src={this.props.beer.image_url}
              alt={this.props.beer.name}
            />
            <StyledDiv>
              <Title>{this.props.beer.name}</Title>
              <Attenuation>{this.props.beer.attenuation_level}</Attenuation>
            </StyledDiv>
            <StyledDiv>
              <Tagline>{this.props.beer.tagline}</Tagline>
              <Date>{this.props.beer.first_brewed}</Date>
            </StyledDiv>
            <Description>{this.props.beer.description}</Description>
            <ContributedBy>{this.props.beer.contributed_by}</ContributedBy>
          </StyledBeer>
          // <StyledBeer>
          //   <StyledImage
          //     src={this.props.beer.image_url}
          //     alt={this.props.beer.name}
          //   />
          //   <StyledDiv>
          //     <Title>{this.props.beer.name}</Title>
          //     <Paragraph color='lightgray' size='20px'>
          //       {this.props.beer.attenuation_level}
          //     </Paragraph>
          //   </StyledDiv>
          //   <StyledDiv>
          //     <Paragraph color='lightgray' size='15px'>
          //       {this.props.beer.tagline}
          //     </Paragraph>
          //     <Paragraph color='black' size='15px' weight='bold'>
          //       {this.props.beer.first_brewed}
          //     </Paragraph>
          //   </StyledDiv>
          //   <Paragraph color='black' size='15px' weight='bold'>
          //     {this.props.beer.description}
          //   </Paragraph>
          //   <Paragraph color='lightgray' size='15px' weight='bold'>
          //     {this.props.beer.contributed_by}
          //   </Paragraph>
          // </StyledBeer>
        )}
      </React.Fragment>
    );
  }
}

export default Beer;
