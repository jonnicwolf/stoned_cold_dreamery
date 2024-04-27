import React from 'react';
import styled from 'styled-components';

import Carousel from './Carousel';

import { boricanna, boricanna_shared_joint } from '../photo_assets/carousel_home/index.js';
const boricanna_slides = [ boricanna_shared_joint, boricanna,]


const Boricanna = ({ slides }) => {
  return (
    <Container>
      <CarouselBox>
        <Carousel
          
          />
      </CarouselBox>
      <TextBox></TextBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vw;
  width: 100vw;
`;

const CarouselBox = styled.div`
  height: 35%;
  width: 100%;
`;
const TextBox = styled.div`
  height: 45%;
  width: 100%;
`;

export default Boricanna;
