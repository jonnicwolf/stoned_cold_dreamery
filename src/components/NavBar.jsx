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
  color: white;
  font-size: 2vh;
  transform: translate(10px,0);
`;
const Container = styled.div`
  display: flex;
  // background-color: ${props => props.scrollPixel > 100 ? 'black' : '#7ae9ff'};
  background-color: ${props => props.scrollPixel > 100 ? 'black' : 'none'};
  height: 10vh;
  justify-content: space-between;
  position: fixed;
  text-decoration: none;
  transition: all 1s ease-out;
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
  width: 30vw;
  @media (max-width: 425px) {
    width: 120vw;
  }
  @media(max-width: 768px) {
    width: 40vw;
  }
`;
const RightSubContainer = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  gap: 5vw;
  width: 70px;
  transform: translateX(-15px);
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #FFFFFF;
  font-family: Modak;
  font-weight: normal;
  transition: 0.3s;
`;

export default NavBar;
