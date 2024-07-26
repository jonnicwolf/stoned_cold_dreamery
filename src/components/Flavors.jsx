import React from 'react';
import styled from 'styled-components';

import FlavorCard from './FlavorCard';
import MobileFlavors from './MobileFlavors';

const blue_dream = require( '../photo_assets/flavors/blue_dream.jpg' );
const birthday_cake = require( '../photo_assets/flavors/birthday_cake.jpg' );
const sherblato = require( '../photo_assets/flavors/sherblato.jpg' );

const products = require('../data.json');
const mobile_products = {
  blueDream: products.cream.blue_dream,
  birthdayCake: products.cream.birthday_cake,
  sherblato_: products.cream.sherblato
}
;

const sw = window.innerWidth <= 720;

const Flavors = () => {

  function renderFlavors (sw) {
    return sw
    ? (<MobileFlavors products={mobile_products} />)
    : (<Container>
        <TitleContainer>
          <Title>FLAVORS</Title>
          <SubTitle>The <br />Stoned Cold Dreamery's <br /> finest treats</SubTitle>
        </TitleContainer>

        <FlavorCard
          linkPath={'/cream'}
          product={products.cream.blue_dream}
          imgSrc={blue_dream}
          title={'Blue Dream'} />
        <FlavorCard
          linkPath={'/cream'}
          product={products.cream.birthday_cake}
          imgSrc={birthday_cake}
          title={'Birthday Cake'} />
        <FlavorCard
          linkPath={'/cream'}
          product={products.cream.sherblato}
          imgSrc={sherblato}
          title={'Sherblato'} />
      </Container>)
  }

  return renderFlavors(sw);
};

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 30vw;
  background-color: white;
`;
const TitleContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f2f2f0;
  font-family: 'Bebas Neue';
  font-size: 3vw;
  letter-spacing: 5px;
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
