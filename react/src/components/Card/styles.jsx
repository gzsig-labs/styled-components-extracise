import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledCardLinked = styled(Link)`
  width: 40vw;
  border: 1px solid lightgray;
  padding-bottom: 30px;
  text-decoration: none;
  box-sizing: border-box;

  img {
    width: 100%;
  }
  
  h2 {
    font-size: 30px;
    font-weight: 300;
    padding: 0;
    margin: 0;
    color: black;
  }

  div {
    padding: 0 25px;
  }

  p {
    color: lightgray;
    padding: 0;
    margin: 0;
  }
`;

export default StyledCardLinked;