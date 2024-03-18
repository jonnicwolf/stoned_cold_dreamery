import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { useCart } from './CartProvider';
import Cloud from './Cloud';
import {cloud, animation} from '../components/customizations';

const cart = require('../photo_assets/icons/icons8-trolley-64.jpg');
const {
  // tiny,
  // small,
  normal,
  // large
} = cloud;
const [
  // motion_one,
  // motion_two,
  motion_three,
  // motion_four,
  // motion_five,
  // motion_six,
  // motion_seven,
  // motion_eight,
  // motion_nine,
  // motion_ten,
  // motion_eleven,
  // motion_twelve
] = animation;


const NavBar = ({ scrollPixel }) => {
  const { cartItems } = useCart();
  const location = useLocation();
  const background = location.pathname !== '/' ? 'black' : 'none';

  return (
    <Container scrollPixel={ scrollPixel } background={ background }>
      <LogoTray>
        <StyledLink to='/'>
          <LogoOrderDiv>
            <Logo />
          </LogoOrderDiv>
        </StyledLink>
        <CloudContainer1>
          <Cloud scale={normal} animation={motion_three}/>
        </CloudContainer1>
        
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
  width: 100vw;
  z-index: 2;
  @media (min-width: 320px) and (max-width: 425px) {
    background-color: black;
    height: 7.5vh;
  }
`;
const CloudContainer = styled.div`
  display: flex;
  height: 10px;
`;
const CloudContainer1 = styled(CloudContainer)`
  flex-direction: column;
  transform: translate(-50px, -16px);
  z-index: 1;
  width: 4vw;
`;
const LogoTray = styled.div`
  align-items: center;
  display:flex;
  padding-left: 25px;
  align-self: flex-start;
  flex-wrap: wrap;
  border-radius: 0 50px 50px 0;
  position: relative;
  width: 19vw;
  overflow: hidden;
`;
const LogoOrderDiv = styled.div`
  position: relative;
  z-index: 2;
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
