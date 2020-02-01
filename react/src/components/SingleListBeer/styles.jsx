import styled from 'styled-components';

const StyledSingleListBeer = styled.div`
  box-sizing: border-box;
  width: 40vw;
  margin: 0 auto;
  display: flex;
  height: 200px;
  padding: 20px;
  border-bottom: 1px solid lightgray;

  .div-img {
    width: 100px;
    margin-right: 30px;
    text-align: center;
  }

  .div-img img {
    height: 100%;
  }

  .div-body {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  h2 {
    font-size: 25px;
    font-weight: 300;
    color: black;
    padding: 20px 0;
  }

  .description {
    color: lightgray;
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 10px;
  }

  .contributedBy {
    display: flex;
    flex-direction: row;
    font-size: 15px;
  }
`;

export default StyledSingleListBeer;
