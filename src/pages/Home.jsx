import React from 'react';
import styled from 'styled-components';
import Carousel from '../components/Carousel';
import NewsLetterSignUp from '../components/NewsLetterSignUp';
import {
  indica_jar,
  hybrid_jar,
  sativa_jar
} from '../photo_assets/signature_flower';
import {
  birthday_cake,
  blue_dream,
  sherblato
} from '../photo_assets/flavours';

const banner = require("../photo_assets/advertising possibility 2.1.jpg");

const Home = () => {
  const signature_flower = [indica_jar, hybrid_jar, sativa_jar];
  const flavours = [birthday_cake, blue_dream, sherblato];

  return (
    <Container>
      <WebBannerBackground src={banner} alt='banner background'/>

      <CarouselContainer>
        <Flavours>CREAM</Flavours>
        <Carousel slides={flavours} />
        <Carousel slides={signature_flower} />
        <Herb>HERB</Herb>
      </CarouselContainer>

      <NewsLetterSignUp />
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  background-color: black;
  display: flex;
  flex-direction: column;
  height: 180%;
  height: 295vh;
`;
const Flavours = styled.div`
  align-self: center;
  color: white; 
  font-family: var(--font-family-modak);
  font-size: 100px;
  letter-spacing: -65px;
  margin: 0;
  text-orientation: upright;
  transform: translate(20px, -20px);
  writing-mode: vertical-rl;
  width: 150px;
`;
const Herb = styled.h1`
  align-self: center;
  color: white;
  font-size: 110px;
  font-family: var(--font-family-modak);
  font-weight: normal;
  letter-spacing: -60px;
  margin: 0;
  transform: translate(-15px, -20px);
  writing-mode: vertical-rl;
  text-orientation: upright;
`;
const WebBannerBackground = styled.img`
  margin-top: 50px;
  width: 1440px;
  height: 185vh;
`;
const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Home;
