import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { useCart } from './CartProvider';
import Cloud from './Cloud';
import {cloud, animation} from '../components/customizations';

const cone = require('../photo_assets/logos_banners/cone_whiteBorder.png')
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
  const isMobile = window.innerWidth < 767;
  console.log(isMobile)

  return (
    <Container scrollPixel={ scrollPixel } background={ background }>
      { isMobile ?
      <LogoTray>
        <Cone src={cone} alt="scd logo" />
      </LogoTray>
      : 
      <LogoTray>
      <StyledLink to='/'>
        <LogoOrderDiv>
          <Logo size='small'/>
        </LogoOrderDiv>
      </StyledLink>
      <CloudContainer1>
        <Cloud scale={normal} animation={motion_three}/>
      </CloudContainer1>
    </LogoTray>
    }

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
  height: 6vw;
  max-height: 50px;
`;
const CartItems = styled.div`
  color: white;
  font-size: 2rem;
  max-
`;
const Container = styled.div`
  display: flex;
  background-color: ${props => props.scrollPixel > 100 ? 'black' : props.background};
  height: 5vw;
  min-height: 60px;
  border: 1px solid red;
  justify-content: space-between;
  position: fixed;
  text-decoration: none;
  width: 100vw;
  z-index: 2;
  overflow: hidden;
  // @media (min-width: 320px) and (max-width: 425px) {
  //   background-color: black;
  //   height: 7.5vh;
  // }
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
  @media only screen and (max-width: 767px) {
    transform: translate(-50px, -20px);
  }
`;
const Cone = styled.img`
  width: 3vw;
  height: 2vh;
`
const LogoTray = styled.div`
  align-items: center;
  display:flex;
  // padding-top: 10px;
  align-self: flex-start;
  flex-wrap: wrap;
  border-radius: 0 50px 50px 0;
  position: relative;
  width: 40%;
  overflow: hidden;
  height: 100%;
  border: 1px solid red;
  @media only screen and (max-width: 767px) {
    width: 80%;
  }
`;
const LogoOrderDiv = styled.div`
  position: relative;
  z-index: 2;
`;
const RightSubContainer = styled.div`
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  @media only screen and (max-width: 767px) {
    width: 15%;
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
