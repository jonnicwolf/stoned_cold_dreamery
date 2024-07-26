import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function FlavorCard ({ linkPath, imgSrc, title }) {
  return (
    <Container>
      <Link to={linkPath}>
        <Img src={imgSrc}/>
      </Link>

      <Info>
        <Price>$15.99</Price>
        <Title>{title}</Title>
        <Stars>
            <Star src='https://img.icons8.com/?size=20&id=85784&format=png&color=000000/' />
            <Star src='https://img.icons8.com/?size=20&id=85784&format=png&color=000000/' />
            <Star src='https://img.icons8.com/?size=20&id=85784&format=png&color=000000/' />
            <Star src='https://img.icons8.com/?size=20&id=85784&format=png&color=000000/' />
          <Count>(4)</Count>
        </Stars>
        <Note>Ultra-pasteurized heavy cream base</Note>
        <Button>Buy Now</Button>
      </Info>
    </Container>
  );
};

const Container = styled.div`
  width: 25%;
  height: 100%
  display: flex;
  flex-direction: column;
  background-color: #f2f2f0;
  padding: 30px;
  border-radius: 3%;
  box-shadow: 0px 1px 20px 1px;
  margin: 30px;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 5%;
  transition: all 0.3s linear;
   &: hover {
    scale: 1.1;
   }
`;

const Info = styled.div`
  margin-top: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Price = styled.span`
  font-size: 1.1rem;
  width: 100%;
  font-family: Chakra Petch;
`;
const Title = styled.span`
  font-size: 2rem;
  width: 100%;
  font-family: Permanent Marker;
`;
const Stars = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 5px;
`;
const Star = styled.img`
  font-size: 1rem;
`;
const Count = styled.span`
  align-self: flex-end;
`;
const Note = styled.p`
  color: #8a8987;
  font-weight: 700;
  width: 100%;
`;

const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #104e65;
  color: #104e65;
  font-size: 1.5rem;
  font-family: Chakra Petch;
  width: 80%;
  align-self: center;
  transition: all 0.3s linear;
  &: hover {
    background-color: #104e65;
    border: 1px solid white;
    color: white;
    scale: 1.1;
  }
`
