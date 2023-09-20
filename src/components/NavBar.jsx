import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { useCart } from './CartProvider';

const NavBar = ({ scrollPixel }) => {
  const { cartItems } = useCart();

  return (
    <Container scrollPixel={ scrollPixel }>
      <LeftSubContainer>
        <StyledLink><></></StyledLink>
      </LeftSubContainer>

      <LogoTray>
        <StyledLink to='/'>
          <Logo />
        </StyledLink>
      </LogoTray>

      <RightSubContainer>
        <StyledLink
          style={{fontSize: '5vh', display: 'flex'}}
          to='/cart'
        >
          <CartItems scrollPixel={scrollPixel}>{cartItems.length}</CartItems>
          <div>🛒</div>
        </StyledLink>
      </RightSubContainer>
    </Container>
  );
};

const CartItems = styled.div`
  color: ${props => props.scrollPixel > 100 ? 'white' : 'black'};
  font-size: 3vh;
`;
const Container = styled.div`
  display: flex;
  background-color: ${props => props.scrollPixel > 100 ? 'black' : '#7ae9ff'};
  height: 10vh;
  justify-content: space-between;
  position: fixed;
  text-decoration: none;
  width: 100vw;
  z-index: 2;
`;
const LeftSubContainer = styled.div`
  align-self: center;
  display: flex;
  gap: 50px;
  justify-content: center;
  width: 70px;
  padding: 1vh;
`;
const LogoTray = styled.div`
  align-self: center;
  height: 100%;
  width: 120vw;
`;
const RightSubContainer = styled.div`
  // margin-right: 50px;
  // margin-right: 170px;
  display: flex;
  align-self: center;
  justify-content: center;
  // gap: 170px;
  gap: 5vw;
  width: 70px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #FFFFFF;
  font-family: Modak;
  font-weight: normal;
  transition: 0.3s;
`;

export default NavBar;
