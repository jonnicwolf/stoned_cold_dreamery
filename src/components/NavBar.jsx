import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { useCart } from './CartProvider';

const NavBar = () => {
  const { cartItems } = useCart();
  console.log(cartItems)
  return (
    <Container>
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
          <div style={{fontSize: '3vh', color: 'black'}}>{cartItems.length}</div>
          <div>🛒</div>
        </StyledLink>
      </RightSubContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #7ae9ff;
  text-decoration: none;
  height: 10vh;
  width: 100vw;
`;
const LeftSubContainer = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  gap: 50px;
  // margin-left: 20px;
  // width: 30vw;
  width: 70px;
  padding: 1vh;
`;
const LogoTray = styled.div`
  // margin-right: 200px;
  align-self: center;
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
