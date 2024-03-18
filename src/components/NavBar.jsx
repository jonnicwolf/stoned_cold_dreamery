import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { useCart } from './CartProvider';

const cart = require('../photo_assets/icons/icons8-trolley-64.jpg');

const NavBar = ({ scrollPixel }) => {
  const { cartItems } = useCart();
  const location = useLocation();
  const background = location.pathname !== '/' ? 'black' : 'none';

  return (
    <Container scrollPixel={ scrollPixel } background={ background }>
      <LogoTray>
        <StyledLink to='/'>
          <Logo />
        </StyledLink>
      </LogoTray>

      <RightSubContainer>
        <StyledLink style={{fontSize: '5vh', display: 'flex'}} to='/cart'>
          <CartItems>{cartItems.length}</CartItems>
          <CartIcon src={cart} />
        </StyledLink>
      </RightSubContainer>
    </Container>
  );
};

const CartIcon = styled.img`
  height: 3vh;
`;
const CartItems = styled.div`
  color: white;
  font-size: 1.5vh;
  
  @media (min-width: 320px) and (max-width: 768px){
    transform: translate(3px, -5px);
    font-size: 2.5vh;
  }
`;
const Container = styled.div`
  display: flex;
  background-color: ${props => props.scrollPixel > 100 ? 'black' : props.background};
  height: 5vh;
  justify-content: space-between;
  position: fixed;
  text-decoration: none;
  transition: all 1s ease-out;
  width: 100vw;
  z-index: 2;
  @media (min-width: 320px) and (max-width: 425px) {
    background-color: black;
    height: 7.5vh;
  }
`;
const LogoTray = styled.div`
  align-items: center;
  display:flex;
  padding-left: 25px;
  height: 100%;
  width: 20vw;
  @media (min-width: 1700px) and (max-width: 2000px) {
    width: 30vw;
  }
  @media (min-width: 650px) and (max-width: 1699px) {
    width: 40vw;
  }
  @media (min-width: 400px) and (max-width: 649px) {
    width: 50vw;
  }
  @media (min-width: 320px) and (max-width: 425px) {
    padding-top: 15px;
    width: 50vw;
  }
`;
const RightSubContainer = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  gap: 5vw;
  width: 70px;
  transform: translateX(-15px);
  @media (min-width: 320px) and (max-width: 425px) {
    transform: none;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #FFFFFF;
  font-family: Modak;
  font-weight: normal;
  transition: 0.3s;
`;

export default NavBar;
