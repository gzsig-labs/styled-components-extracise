import React from 'react';
import CardsWrapper from './styles';
import Card from '../../components/Card';

const Cards = () => {
  const cards = [
    {
      title: 'All Beers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida enim eget mauris pulvinar auctor. Nulla euismod purus feugiat ante vestibulum, id scelerisque augue condimentum. Nullam vel sem eros. Nulla massa orci, scelerisque ut felis at, fermentum interdum mauris. Donec porttitor libero id tortor rhoncus tincidunt. Donec sagittis tortor leo.',
      image: './images/beers.png',
      path: '/beers'
    },
    {
      title: 'New Beer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida enim eget mauris pulvinar auctor. Nulla euismod purus feugiat ante vestibulum, id scelerisque augue condimentum. Nullam vel sem eros. Nulla massa orci, scelerisque ut felis at, fermentum interdum mauris. Donec porttitor libero id tortor rhoncus tincidunt. Donec sagittis tortor leo.',
      image: './images/new-beer.png',
      path: '/new-beer'
    },
    {
      title: 'Random Beer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida enim eget mauris pulvinar auctor. Nulla euismod purus feugiat ante vestibulum, id scelerisque augue condimentum. Nullam vel sem eros. Nulla massa orci, scelerisque ut felis at, fermentum interdum mauris. Donec porttitor libero id tortor rhoncus tincidunt. Donec sagittis tortor leo.',
      image: './images/random-beer.png',
      path: '/random'
    }
  ];

  return (
    <CardsWrapper>
      {cards.map((element, index) => {
        return <Card title={element.title} description={element.description} image={element.image} key={index} path={element.path}/>
      })}
    </CardsWrapper>
  );
};

export default Cards;