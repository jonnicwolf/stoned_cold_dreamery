import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCart } from './CartProvider';

import Logo from './Logo';
const cart = require('../photo_assets/icons/icons8-trolley-64.jpg');

const NavBar = ({ scrollPixel }) => {
  const [isMobile, setIsMobile] = useState(false);
  const { cartItems } = useCart();
  const background_gradient = 'radial-gradient(circle 30vw, #72bac9, #104e65)'

  useEffect(()=> {
    setIsMobile(window.innerWidth < 700);
  },[]);

  return (
    <Container
      scrollPixel={ scrollPixel }
      background_gradient={ background_gradient }
      isMobile={isMobile}>
      <LogoTray>
        <StyledLink to='/'>
          <Logo size='xsmall'/>
        </StyledLink>
      </LogoTray>

      <RightSubContainer scrollPixel={ scrollPixel } isMobile={ isMobile }>
        <StyledLink to='/cart'>
          <CartItems>{cartItems.length >= 1 ? cartItems.length : null}</CartItems>
          <CartIcon src={cart} isMobile={isMobile} />
        </StyledLink>
      </RightSubContainer>

    </Container>
  );
};

const CartIcon = styled.img`
  height: 8vw;
  max-height: 40px;
`;
const CartItems = styled.div`
  color: white;
  font-size: 2rem;
`;
const Container = styled.div`
  display: flex;
  background-image: ${props =>  props.background_gradient};
  height: 5vw;
  min-height: 60px;
  justify-content: space-between};
  position: fixed;
  text-decoration: none;
  width: 100vw;
  z-index: 99;
  overflow: hidden;
  transition: all 0.3s linear;
  @media screen and (min-width: 1500px) {
    height: 5vh;
  }
`;
const LogoTray = styled.div`
  display: flex;
  align-self: flex-start;
  flex-wrap: wrap;
  position: relative;
  width: 40%;
  padding-left: 15px;
  height: 100%;
  @media only screen and (max-width: 1200px) {
    width: 60%;
  }
`;

const RightSubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
  margin-right: 15px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #FFFFFF;
  font-family: Modak;
  font-weight: normal;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export default NavBar;
