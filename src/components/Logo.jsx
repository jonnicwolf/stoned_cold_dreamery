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
  height: 10vh;
  width: 20vw;
  @media (min-width: 1700px) and (max-width: 2000px) {
    height: 10vh;
    width: 30vw;
  }
  @media (min-width: 650px) and (max-width: 1699px) {
    height: 10vh;
    width: 40vw;
  }
  @media (min-width: 426px) and (max-width: 649px) {
    height: 7vh;
    width: 50vw;
  }
  @media (min-width: 320px) and (max-width: 425px) {
    height: 5vh;
    width: 50vw;
  }
`;

export default Logo;
