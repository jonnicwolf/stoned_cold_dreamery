import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from './CartProvider';

import Logo from './Logo';

const cone = require('../photo_assets/logos_banners/cone_whiteBorder.png')
const cart = require('../photo_assets/icons/icons8-trolley-64.jpg');

const NavBar = ({ scrollPixel }) => {
  const [isMobile, setIsMobile] = useState(false);
  const { cartItems } = useCart();
  const location = useLocation();
  const background = location.pathname !== '/' ? 'black' : 'none';

  useEffect(()=> {
    setIsMobile(window.innerWidth < 700);
  },[])

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
  height:9vw;
  max-height: 50px;
`;
const CartItems = styled.div`
  color: white;
  font-size: 2rem;
`;
const Container = styled.div`
  display: flex;
  background-color: ${props => props.scrollPixel > 100 ? 'black' : props.background};
  height: 5vw;
  min-height: 60px;
  justify-content: space-between;
  position: fixed;
  text-decoration: none;
  width: 100vw;
  z-index: 2;
  overflow: hidden;
  @media screen and (min-width: 1500px) {
    height: 5vh;
  }
`;
const Cone = styled.img`
  width: 2.5vh;
  height: 15vw;
`
const LogoTray = styled.div`
  align-items: center;
  display: flex;
  align-self: flex-start;
  flex-wrap: wrap;
  border-radius: 0 50px 50px 0;
  position: relative;
  width: 40%;
  overflow: hidden;
  height: 100%;
  padding: 0 0 0 30px;
  @media only screen and (max-width: 767px) {
    width: 60%;
  }
`;
const LogoOrderDiv = styled.div`
  position: relative;
  z-index: 2;
`;
const RightSubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
  @media only screen and (max-width: 767px) {
    width: 15%;
  }
  @media screen and (min-width: 1500px) {
    width: 5%;
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
