import React from 'react';
import styled from 'styled-components';

const logo_white = require('../photo_assets/carousel_home/scd-logo-white-transparent.png');

const Logo = () => {
  return (
    <LogoImg src={logo_white} alt='scd logo' />
  );
};

const LogoImg = styled.img`
  height: 1.5rem;
`;

export default Logo;
