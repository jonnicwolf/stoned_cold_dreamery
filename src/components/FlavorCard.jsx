import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const blue_dream = require( '../photo_assets/flavors/blue_dream.jpg' );

export default function FlavorCard() {
  return (
    <Container>
      <Link to='/cream'>
        <Img src={blue_dream}/>
      </Link>

      <Info>
        <Price>$15.99</Price>
        <Title>Blue Dream</Title>
        <Stars>
            <Star src='https://img.icons8.com/?size=20&id=85784&format=png&color=000000/' />
            <Star src='https://img.icons8.com/?size=20&id=85784&format=png&color=000000/' />
            <Star src='https://img.icons8.com/?size=20&id=85784&format=png&color=000000/' />
            <Star src='https://img.icons8.com/?size=20&id=85784&format=png&color=000000/' />
          <Count>(4)</Count>
        </Stars>
        <Note>Ultra-pasteurized heavy cream base</Note>
        <button>Buy Now</button>
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
`;

const Img = styled.img`
  width: 100%;
  border-radius: 5%;
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
