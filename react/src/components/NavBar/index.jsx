import React from 'react';
import { Link } from 'react-router-dom';
import StyledNavBar from './styles';

const NavBar = () => {
  return (
    <StyledNavBar>
      <Link to='/'>
        <img src='../icons/home-solid.svg' alt='Home' />
      </Link>
    </StyledNavBar>
  );
};

export default NavBar;
