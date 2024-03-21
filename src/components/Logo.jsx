import React from 'react';
import styled from 'styled-components';

const logo_white = require('../photo_assets/carousel_home/scd-logo-white-transparent.png');

const Logo = () => {
  return (
    <LogoImg src={logo_white} alt='scd logo' />
  );
};

const LogoImg = styled.img`
  @media (max-width: 600px) {
    height: 5vh;
    width: 35vw;
  }
  @media (min-width: 601px) and (max-width: 1699px) {
    height: 3vh;
    width: 15vw;
  }
  @media (min-width: 1700px) {
    height: 4vh;
    width: 15vw;
  }
`;

export default Logo;
