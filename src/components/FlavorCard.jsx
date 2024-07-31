import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useCart } from './CartProvider';

export default function FlavorCard ({ linkPath, product, imgSrc, title }) {
  const { addItemToCart } = useCart();
  const navigate = useNavigate();

  function handleClick () {
    addItemToCart(product);
    navigate('/cart');
  };

  return (
    <Container>
      <Link to={linkPath}>
        <Img src={imgSrc}/>
      </Link>

      <Info>
        <Price>$15.99</Price>
        <Title>{title}</Title>
        <Stars>
          <Star src='https://img.icons8.com/?size=15&id=85784&format=png&color=000000/' />
          <Star src='https://img.icons8.com/?size=15&id=85784&format=png&color=000000/' />
          <Star src='https://img.icons8.com/?size=15&id=85784&format=png&color=000000/' />
          <Star src='https://img.icons8.com/?size=15&id=85784&format=png&color=000000/' />
          <Count>(4)</Count>
        </Stars>
        <Note>Ultra-pasteurized heavy cream base</Note>
        <Button onClick={handleClick}>Buy Now</Button>
      </Info>
    </Container>
  );
};

const Container = styled.div`
  width: 30%;
  height: 100%
  display: flex;
  flex-direction: column;
  background-color: #f2f2f0;
  padding: 30px;
  border-radius: 3%;
  box-shadow: 0px 1px 20px 1px;
  margin: 30px;
  @media (max-width: 720px) {
    margin: 0;
  }
`;

const Img = styled.img`
  width: 100%;
  border-radius: 5%;
  transition: all 0.3s linear;
  &: hover {
    scale: 1.1;
  }
  @media screen and (max-width: 720px) {
    scale: 1.2;
  }
`;

const Info = styled.div`
  margin-top: 1vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Price = styled.span`
  font-size: 1rem;
  width: 100%;
  font-family: Chakra Petch;
  @media screen and (max-width: 720px) {
    font-size: 0.8rem;
  }
`;
const Title = styled.span`
  font-size: 2rem;
  width: 100%;
  font-family: Permanent Marker;
  @media screen and (max-width: 720px) {
    font-size: 0.5rem;
  }
`;
const Stars = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 5px;
  @media screen and (max-width: 720px) {
    gap: 5px;
  }
`;
const Star = styled.img`
  font-size: 1rem;
`;
const Count = styled.span`
  align-self: flex-end;
  font-family: Chakra Petch;
  @media screen and (max-width: 720px) {
    font-size: 0.8rem;
  }
`;
const Note = styled.p`
  color: #8a8987;
  font-weight: 700;
  width: 100%;
  padding: 0;
  margin: 0;
  @media screen and (max-width: 720px) {
    font-size: 0.5rem;
  }
`;

const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #104e65;
  color: #104e65;
  font-size: 1.5rem;
  font-family: Chakra Petch;
  width: 100%;
  align-self: center;
  transition: all 0.3s linear;
  margin: 10px;
  &: hover {
    background-color: #104e65;
    border: 1px solid white;
    color: white;
    scale: 1.1;
  }
  @media screen and (max-width: 720px) {
    font-size: 1rem;
  }
`
