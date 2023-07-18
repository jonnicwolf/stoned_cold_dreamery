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
      console.log(screenWidth)
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
  background-color: white;
  height: 100%;
`;
const LogoContainer = styled.div`
  position: fixed;
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.scrollPixel > 100 ? 'black' : 'white'};
  transition: background-color 0.5s ease;
  z-index: 4;
  @media (min-width: 390px) {
    height: 2.1%;
    width: 100vw;
  }
`;
const Logo = styled.img`
  width: 250px;
  height: 80px;
  @media (min-width: 390px) {
    height: 80%;
    width: 100%;
  }
`;
const FooterLogo = styled.img`
  height: 100px;
`;
const FooterLogoContainer = styled.footer`
  position: sticky;
  align-items: center;
  background-color: white;
  border: 5px solid red;
  display: flex;
  height: 150px;
  justify-content: center;
  width: 100%;
`;

export default App;
