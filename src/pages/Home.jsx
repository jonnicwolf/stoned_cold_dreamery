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

  // const signature_flower = [
  //   indica_jar,
  //   hybrid_jar,
  //   sativa_jar
  // ]

  return (
    <Container>
      <WebBannerBackground src={banner} alt='banner background'/>

      <Carousel slides={carousel_home} />
      {/* <Carousel slides={signature_flower} /> */}
      
      <div>alkjaaslkjasldj</div>
      <div>alkjaaslkjasldj</div>
      <div>alkjaaslkjasldj</div>
      <div>alkjaaslkjasldj</div>
      <div>alkjaaslkjasldj</div>
      <div>alkjaaslkjasldj</div>
      <div>alkjaaslkjasldj</div>
      <div>alkjaaslkjasldj</div>
      <div>alkjaaslkjasldj</div>
      <div>alkjaaslkjasldj</div>
      <div>alkjaaslkjasldj</div>
      <h1>laksjdlfkjasdfl</h1>
      <h1>laksjdlfkjasdfl</h1>
      <h1>laksjdlfkjasdfl</h1>
      <h1>laksjdlfkjasdfl</h1>
      <h1>laksjdlfkjasdfl</h1>
      <h1>laksjdlfkjasdfl</h1>
      <h1>laksjdlfkjasdfl</h1>
      <h1>laksjdlfkjasdfl</h1>
      <h1>laksjdlfkjasdfl</h1>
    </Container>
  )
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
`;
const WebBannerBackground = styled.img`
  margin-top: 50px;
  width: 1440px;
  height: 185vh;
`;

export default Home;