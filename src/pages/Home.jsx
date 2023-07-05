import React from 'react';
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

const banner = require("../photo_assets/advertising possibility 2.1.jpg")
const logo = require("../photo_assets/SCD_name_white.jpg")

const Home = () => {
  const carousel_home = [
  Dudes,
  LogoPlainEstd,
  LogoDudeEstd,
  LogoTransparentBlack,
  ShirtMerch,
  TubBluedream
  ];

  const signiture_flower = [

  ]



  return (
    <Container>
      <Logo src={logo} alt="" />
      <WebBannerBackground src={banner} alt='banner background'/>

      {/* <Carousel slides={carousel_home} /> */}
      {/* <Carousel slides={si} /> */}
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
  width: 1440px;
  color: white;
`;
const Logo = styled.img`
  position: fixed
  ;
  width: 200px;
  height: 70px;
  
  
`


export default Home;