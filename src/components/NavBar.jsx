import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Container>
      <LeftSubContainer>
        <StyledLink>Shop</StyledLink>
        <StyledLink>Partners</StyledLink>
        <StyledLink>Boricanna</StyledLink>
      </LeftSubContainer>
      <LogoTray>
        <StyledLink to='/'>
          Cold Stoned Dreamery
        </StyledLink>
      </LogoTray>
      <RightSubContainer>
        <StyledLink>Account</StyledLink>
        <StyledLink>🛒</StyledLink>
      </RightSubContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #3ED6FE;
  text-decoration: none;
`;
const LeftSubContainer = styled.div`
  display: flex;
  align-self: flex-start;
  gap: 50px;
  margin-left: 20px;
`;
const LogoTray = styled.div`
  margin-right: 200px;
  align-self: center;
`;
const RightSubContainer = styled.div`
  margin-right: 50px;
  display: flex;
  align-self: flex-end;
  gap: 40px;
  width: 100px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #FFFFFF;
  font-weight: bold;
  transition: 0.3s;
`;

export default NavBar;
