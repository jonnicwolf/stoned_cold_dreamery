import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useCart } from './CartProvider';

import FlavorCard from './FlavorCard';
import Mobile_Flavors from './Mobile_Flavors';

const blue_dream = require( '../photo_assets/flavors/blue_dream.jpg' );
const birthday_cake = require( '../photo_assets/flavors/birthday_cake.jpg' );
const sherblato = require( '../photo_assets/flavors/sherblato.jpg' );
const cloud = require('../photo_assets/cloud/—Pngtree—white cartoon clouds clipart_5568114.png');
const products = require('../data.json');
const sw = window.innerWidth <= 720;

const Flavors = () => {
  const { addItemToCart } = useCart();

  function renderFlavors (sw) {
    return sw
    ? (<Mobile_Flavors/>)
    : (<Container>
        <TitleContainer color={'#fffff6'}>
          <Title>FLAVORS</Title>
          <SubTitle>The <br />Stoned Cold Dreamery's <br /> finest treats</SubTitle>
        </TitleContainer>

        <FlavorCard linkPath={'/cream'} imgSrc={blue_dream} title={'Blue Dream'} />
        <FlavorCard linkPath={'/cream'} imgSrc={birthday_cake} title={'Birthday Cake'} />
        <FlavorCard linkPath={'/cream'} imgSrc={sherblato} title={'Sherblato'} />
      </Container>)
  }

  return renderFlavors(sw);
};

const Container = styled.div`
  border-bottom: 1px solid #ebbf9e;
  display: flex;
  width: 100vw;
  height: 30vw;
  background-color: white;
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
`;
const TitleContainer = styled(Frame)`
  margin: 0px;
  border-radius: 0;
  box-shadow: 'none';
  font-family: 'Bebas Neue';
  font-size: 3vw;
  letter-spacing: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  width: 40%;
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
const SubTitle = styled.div`
  text-align: right;
  padding: 15px;
  color: #104e65;
  @media screen and (max-width: 1064px) {
    font-size: 5vw;
  }
`;


export default Flavors;
