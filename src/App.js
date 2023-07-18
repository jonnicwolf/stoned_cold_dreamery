import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';

const logo_black = require('./photo_assets/carousel_home/scd-logo-transparent.png');
const logo_white = require('./photo_assets/carousel_home/scd-logo-white-transparent.png');

function App() {
  const [scrollPixel, setScrollPixel] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const screenWidth = document.documentElement.clientWidth;
      setScrollPixel(scrolled);
      setScreenWidth(screenWidth);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container className="App">
      <LogoContainer scrollPixel={scrollPixel} >
        { scrollPixel > 100
          ? <Logo src={logo_white} alt='scd logo' />
          : <Logo src={logo_black} alt='scd logo' />
        }
      </LogoContainer>

      <Routes>
        <Route exact path='/' element={<Home/>} />
      </Routes>

      { screenWidth <= 768
        ? null
        : <FooterLogoContainer>
            <FooterLogo src={logo_black} alt='scd logo' />
          </FooterLogoContainer>
      }
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  overflow-x: hidden;
`;
const LogoContainer = styled.div`
  align-items: center;
  background-color: ${props => props.scrollPixel > 100 ? 'black' : 'aqua'};
  display: flex;
  height: 90px;
  justify-content: center;
  position: fixed;
  transition: background-color 0.5s ease;
  width: 100%;
  z-index: 4;
  @media (min-width: 390px) {
    height: 7vh;
    width: 100vw;
  }
  @media (min-width: 426px) {
    height: 10vh;
    width: 100vw;
    
  }
`;
const Logo = styled.img`
  height: 80px;
  width: 250px;
  @media (min-width: 390px) {
    position: fixed;
    height: 6%;
    width: 70%;
  }
  @media (min-width: 426px) {
    height: 10vh;
    width: 70vw;
  }
`;
const FooterLogo = styled.img`
  height: 100px;
`;
const FooterLogoContainer = styled.footer`
  align-items: center;
  background-color: white;
  border: 5px solid red;
  display: flex;
  height: 150px;
  justify-content: center;
  width: 100%;
  position: sticky;
`;

export default App;
