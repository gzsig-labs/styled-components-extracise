import styled from 'styled-components';

export const StyledBeer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  margin: 0 auto;
`;

export const StyledImage = styled.img`
  height: 200px;
  width: auto;
  object-fit: contain;
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 25px;
  font-weight: 300;
  color: black;
`;

export const Attenuation = styled.p`
  color: lightgray;
  font-size: 20px;
`;

export const Tagline = styled.p`
  color: lightgray;
  font-size: 15px;
`;

export const Date = styled.p`
  font-weight: bold;
  color: black;
  font-size: 15px;
`;

export const Description = styled.p`
  font-weight: bold;
  color: black;
  font-size: 15px;
`;

export const ContributedBy = styled.p`
  font-weight: bold;
  color: lightgray;
  font-size: 15px;
`;

export const Paragraph = styled.p`
  font-weight: ${props => props.weight};
  color: ${props => props.color};
  font-size: ${props => props.size};
`;
