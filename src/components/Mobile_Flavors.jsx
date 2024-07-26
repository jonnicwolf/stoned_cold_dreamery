import React from 'react';
import styled from 'styled-components';

import FlavorCard from './FlavorCard';

const blue_dream = require( '../photo_assets/flavors/blue_dream.jpg' );
const birthday_cake = require( '../photo_assets/flavors/birthday_cake.jpg' );
const sherblato = require( '../photo_assets/flavors/sherblato.jpg' );

export default function Mobile_Flavors () {
  return (
    <Container>
      <Title>
        Flavors
      </Title>
      <Slider>
        <FlavorCard linkPath='/cream' imgSrc={blue_dream}  title='Blue Dream' />
        <FlavorCard linkPath='/cream' imgSrc={birthday_cake}  title='Birthday Cake' />
        <FlavorCard linkPath='/cream' imgSrc={sherblato}  title='Sherblato' />
      </Slider>

    </Container>
  );
};

const Container = styled.div`
  font-family: Bebas Neue;
  background-color: white;
  align-self: flex-start;
  width: 100vw;
`;
const Title = styled.span`
  font-size: 2rem;
  font-weight: bold;
  padding-left: 15px;
  color: #d18755;
`;
const Slider = styled.div`
  display: flex;
  overflow-y: scroll;
  padding: 10px;
  margin: 5px;
  z-index: 15;
`;
