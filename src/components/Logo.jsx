import React from 'react';
import styled from 'styled-components';

const logo_white = require('../photo_assets/carousel_home/scd-logo-white-transparent.png');

const Logo = ({ size }) => {
  const options = {
    small: '1.5rem',
    medium: '3rem',
    large: '10rem'
  }
  return (
    <LogoImg src={logo_white} alt='scd logo' size={options[size]} />
  );
};

const LogoImg = styled.img`
  height: 1.5rem;
  height: ${props => props.size ? props.size : '1.5rem'}
`;

export default Logo;
