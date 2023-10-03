import React from 'react';
import styled from 'styled-components';
// import Cloud from './Cloud';
// import {cloud, animation} from './customizations';

// const {tiny} = cloud;
// const [motion1] = animation;

const logo_white = require('../photo_assets/carousel_home/scd-logo-white-transparent.png');

const Logo = () => {
  return (
    <LogoImg src={logo_white} alt='scd logo' />
  );
};

const LogoImg = styled.img`
  height: 6vh;
  width: 20vw;
  @media (min-width: 390px) {
    position: fixed;
    height: 6%;
    width: 70%;
  }
  @media (min-width: 425px) {
    height: 10vh;
    width: 70vw;
  }
  @media (max-width: 768px) {
    width: 40vw;
  }
  @media (min-width: 1024px) {
    height: 10vh;
    width: 40vw;
  }
  @media (min-width: 1440px) {
    height: 10vh;
    width: 30vw;
  }
`;

export default Logo;
