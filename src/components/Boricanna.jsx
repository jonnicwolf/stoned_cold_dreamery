import React from 'react';
import styled from 'styled-components';

import Carousel from './Carousel';

import { banner, shared_joint, sign_1, sign_2 } from '../photo_assets/boricanna/index.js';
const boricanna_slides = [ banner, shared_joint, sign_1, sign_2];
const slide_duration = 3000;

const Boricanna = () => {
  return (
    <Container>
      <TextBox>
        <SubTitle>Our Growers</SubTitle>
        <P>We at Stoned Cold Dreamery are proud to call Boricanna our exclusive growers for all our house-branded products.
        <br /><br />
        The Morales family in Trujillo Alto, Puerto Rico, cultivates a legacy of excellence at Boricanna.
        <br /><br />
        Since 2020, Boricanna has nurtured a deep-rooted commitment to sustainable agriculture and community empowerment. Through innovative farming practices and a passion for quality, Boricanna offers a transformative experience in cannabis cultivation.</P>
      </TextBox>
      <CarouselBox>
        <Carousel
          slides={boricanna_slides}
          time={slide_duration}
          size={'large'}
          />
      </CarouselBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vw;
  width: 100vw;
`;

const CarouselBox = styled.div`
  height: 70%;
  width: 100%;
`;
const TextBox = styled.div`
  display: flex;
  background-color: #cca287;
  color: #d18755;
  height: 30%;
  width: 100%;
`;

const SubTitle = styled.p`
  font-family: bebas neue;
  padding: 35px;
  color: #104e65;
  width: 30%;
  font-size: 6vw;
  @media screen only and (max-width: 1024px) {
    font-size: 4vw;
  }
`;
const P = styled.p`
  padding: 35px;
  width: 70%;
  color: white;
  font-weight: bold;
  font-size: 1.8vw;
  @media screen and (max-width: 1024px) {
    padding: 5px;
  }
`;

export default Boricanna;
