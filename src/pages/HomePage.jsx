import React from 'react';
import styled from 'styled-components';
import Carousel from '../components/Carousel';
import NewsLetterSignUp from '../components/NewsLetterSignUp';
import {indica_jar, hybrid_jar, sativa_jar} from '../photo_assets/signature_flower/index.js';
import {birthday_cake,blue_dream,sherblato} from '../photo_assets/flavors/index.js';

const signature_flower = [ indica_jar, hybrid_jar, sativa_jar ];
const flavors = [ birthday_cake, blue_dream , sherblato ];
const banner = require('../photo_assets/carousel_home/scd-logo-estd.jpg');

const Home = () => {
  return (
    <Container>
      <WebBannerBackground src={banner} alt='banner background'/>

      <CarouselContainer>

        <CarouselItem>
          <Cream>CREAM</Cream>
          <Carousel slides={flavors} />
        </CarouselItem>

        <CarouselItem>
            <Carousel slides={signature_flower} />
            <Herb>HERB</Herb>
        </CarouselItem>
      </CarouselContainer>

      <NewsLetterSignUp />
    </Container>
  );
};

const CarouselItem = styled.div`
  display: flex;
  width: 50vw;
`;
const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 60vh;
  width: 100vw;
  margin: 0;
`;
const Container = styled.div`
  align-items: center;
  background-color: black;
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
`;
const Cream = styled.div`
  color: white;
  font-family: Modak;
  font-size: 100px;
  letter-spacing: -10vh;
  width: 6vw;
  writing-mode: vertical-rl;
  text-orientation: upright;
  transform: translate(30px, 30px);
`;
const Herb = styled.h1`
  align-self: center;
  color: white;
  font-size: 110px;
  font-family: Modak;
  font-weight: normal;
  letter-spacing: -87px;
  margin: 0;
  width: 7vw;
  writing-mode: vertical-rl;
  text-orientation: upright;
  transform: translate(30px, -30px);
`;
const WebBannerBackground = styled.img`
  margin-top: 50px;
  width: 1440px;
  height: 185vh;
  @media (min-width: 390px) {
    height: 40%;
    width: 100%;
  }
  @media (min-width: 425px) {
    height: 70vh;
    width: 100vw;
  }
  @media (min-width: 768px) {
    height: 110vh;
    width: 100vw;
  }
  @media (min-width: 1024px) {
    height: 200vh;
  }
  @media (min-width: 1440px) {
    height: 250vh;
  }
  @media (min-width: 2560px) {
    height: 300vh;
  }
`;

export default Home;
