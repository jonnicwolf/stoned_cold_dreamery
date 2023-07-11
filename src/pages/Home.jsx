import React, { useEffect } from 'react';
import styled from 'styled-components';
import Carousel from '../components/Carousel';

import {
  Dudes,
  LogoPlainEstd,
  LogoDudeEstd,
  LogoTransparentBlack,
  ShirtMerch,
  TubBluedream
} from '../photo_assets/carousel_home';

import {
  indica_jar,
  hybrid_jar,
  sativa_jar
} from '../photo_assets/signature_flower';

const banner = require("../photo_assets/advertising possibility 2.1.jpg");

const Home = () => {
  const carousel_home = [
    Dudes,
    LogoPlainEstd,
    LogoDudeEstd,
    LogoTransparentBlack,
    ShirtMerch,
    TubBluedream
  ];

  const signature_flower = [
    indica_jar,
    hybrid_jar,
    sativa_jar
  ];

  return (
    <Container>
      <WebBannerBackground src={banner} alt='banner background'/>
      <CarouselContainer>
        <Flavours>CREAM</Flavours>
        <Carousel slides={carousel_home} />
        <Carousel slides={signature_flower} />
        <Herb>HERB</Herb>
      </CarouselContainer>
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  background-color: black;
  display: flex;
  flex-direction: column;
`;
const Flavours = styled.h1`
  align-self: center;
  color: white;
  font-size: 80px;
  //throw Modak Regular as font in here
  margin: 0;
  
  text-orientation: upright;
  writing-mode: vertical-rl;
  width: 100px;
`;
const Herb = styled.h1`
  color: white;
  font-size: 100px;
  //throw Modak Regular as font in here
  margin: 0;
  writing-mode: vertical-rl;
  text-orientation: upright;
  align-self: center;
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