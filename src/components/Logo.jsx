import React from 'react';
import styled from 'styled-components';

const logo_white = require('../photo_assets/carousel_home/scd-logo-white-transparent.png');

const Logo = ({ size }) => {
  const options = {
    small: '2.5rem',
    medium: '3rem',
    large: '14vw'
  }
  return (
    <LogoImg src={logo_white} alt='scd logo' size={options[size]} />
  );
};

const LogoImg = styled.img`
  height: ${props => props.size ? props.size : '2rem'};
  width: auto;
  box-shadow:
`;

export default Logo;
