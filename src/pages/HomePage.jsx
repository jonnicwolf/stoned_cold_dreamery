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
        <Cream>CREAM</Cream>
        <Carousel slides={flavours} />
        <Carousel slides={signature_flower} />
        <Herb>HERB</Herb>
      </CarouselContainer>

      <NewsLetterSignUp />
    </Container>
  );
};

const CarouselContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 70px;
  justify-content: center;
  overflow: hidden;
  @media (min-width: 390px) {
    flex-direction: column;
    gap: 10px;
  }
  @media (min-width: 768px) {
    gap: 20px;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 100px;
  }
  @media (min-width: 2560px) {
    gap: 100px;
  }
`;
const Container = styled.div`
  align-items: center;
  background-color: black;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
`;
const Cream = styled.div`
  color: white; 
  font-family: var(--font-family-modak);
  font-size: 100px;
  writing-mode: vertical-rl;
  @media (min-width: 390px) {
    font-size: 90px;
    height: 70px;
    letter-spacing: 10px;
    transform: translate(-20px,-25px);
    width: 85%;
    writing-mode: horizontal-tb;
  }
  @media (min-width: 425px) {
    font-size: 90px;
    width: 80%;
  }
  @media (min-width: 768px) {
    width: 40%;
  }
  @media (min-width: 1024px) {
    font-size: 105px;
    writing-mode: vertical-rl;
    text-orientation: upright;
    letter-spacing: -80px;
    transform: translate(70px, -200px);
  }
  @media (min-width: 2560px) {
    font-size: 200px;
    letter-spacing: -150px;
    transform: translateY(-400px);
  }
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
  @media (min-width: 390px) {
    font-size: 90px;
    height: 70px;
    letter-spacing: 10px;
    transform: translateY(-25px);
    writing-mode: horizontal-tb;
  }
  @media (min-width: 1024px) {
    font-size: 100px;
    letter-spacing: -60px;
    writing-mode: vertical-rl;
    text-orientation: upright;
    transform: translate(-65px, -190px) scaleY(1.09);
  }
  @media (min-width: 2560px) {
    font-size: 220px;
    letter-spacing: -150px;
    transform: translateY(-400px);
  }
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
