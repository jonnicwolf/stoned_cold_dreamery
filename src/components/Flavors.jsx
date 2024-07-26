import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useCart } from './CartProvider';

import FlavorCard from './FlavorCard';

const blue_dream = require( '../photo_assets/flavors/blue_dream.jpg' );
const birthday_cake = require( '../photo_assets/flavors/birthday_cake.jpg' );
const sherblato = require( '../photo_assets/flavors/sherblato.jpg' );
const cloud = require('../photo_assets/cloud/—Pngtree—white cartoon clouds clipart_5568114.png');
const products = require('../data.json');

const Flavors = () => {
  const { addItemToCart } = useCart();

  return (
    <Container>
      <TitleContainer color={'#fffff6'} style={{margin: '0px', borderRadius: '0px', boxShadow: 'none'}}>
        <Title>FLAVORS</Title>
        <SubTitle>The <br />Stoned Cold Dreamery's <br /> finest treats</SubTitle>
      </TitleContainer>

      <FlavorCard linkPath={'/cream'} imgSrc={blue_dream} title={'Blue Dream'} />
      <FlavorCard linkPath={'/cream'} imgSrc={birthday_cake} title={'Birthday Cake'} />
      <FlavorCard linkPath={'/cream'} imgSrc={sherblato} title={'Sherblato'} />
    </Container>
  );
};

const Container = styled.div`
  border-bottom: 1px solid #ebbf9e;
  display: flex;
  width: 100vw;
  height: 30vw;
  background-color: white;
  @media screen and (max-width: 690px) {
    justify-content: center;
    flex-wrap: wrap;
    width: 102%;
    height: 120vw;
  }
  @media screen and (min-width: 691px) and (max-width: 1064px) {
    justify-content: center;
    flex-wrap: wrap;
    height: 90vh;
  }
`;
const Frame = styled.div`
  width: 25%;
  height: 100%
  display: flex;
  flex-direction: column;
  background-color: #f2f2f0;
  padding: 55px;
  margin: 1vw;
  border-radius: 3%;
  box-shadow: 0px 1px 20px 1px;
  @media screen and (max-width: 1064px) {
    height: 50%;
    width: 49.7vw;
    border: 1px solid #ebbf9e;
  }
`;
const FrameInfo = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid red;
  //color: #d18755;
  @media screen and (max-width: 700px) {
    height: 20%;
  }
`;
const TitleContainer = styled(Frame)`
  font-family: 'Bebas Neue';
  font-size: 3vw;
  letter-spacing: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Title = styled.div`
  font-size: 5vw;
  padding: 15px;
  font-family: Modak;
  color: #104e65;
  @media screen and (max-width: 1064px) {
    font-size: 7vw;
  }
`;
const Img = styled.img`
  object-fit: cover;
  height: 70%;
  width: 100%;
  max-width: 100%;
  position: relative;
  border-radius: 5%;
`;
const ImgTitle = styled.div`
  padding-left: 15px;
  font-family: Permanent Marker;
  font-weight: bold;
  font-size: 3rem;
  color: #104e65;
  z-index: 1;
  @media screen and (max-width: 1064px) {
    font-size: 4rem;
  }
`;
const ImgInfo = styled.div`
  display: flex;
  height: 70%;
  height: 50%;
  width: 100%;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
`;
const Price = styled.p`
  display: flex;
  align-items: center;
  height: 100%;
  width: 50%;
  font-family: 'Chakra Petch';
  font-weight: bold;
  font-size: 2rem;
  color: #104e65;
  //border: 2px solid blue;
  @media screen and (max-width: 1064px) {
    font-size: 3rem;
  }
`;
const Button = styled.button`
  z-index: 1;
  font-family: Modak;
  border: none;
  cursor: pointer;
  background-color: none;
  height: 100%;
`;
const SubTitle = styled.div`
  text-align: right;
  padding: 15px;
  color: #104e65;
  @media screen and (max-width: 1064px) {
    font-size: 5vw;
  }
`;
const Cloud = styled.img`
  height: 150%;
  width: 100%;
  // transform: translateY(-2vw);
  opacity: ${props => props.hover ? 1 : 0};
  transition: opacity 0.1s linear;
`;
const CartPlus = styled.p`
  font-size: 2rem;
  color: #104e65;
  height: 100%;
`;

export default Flavors;
