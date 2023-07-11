import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';

const logo_black = require('./photo_assets/carousel_home/scd-logo-transparent.png');
const logo_white = require('./photo_assets/carousel_home/scd-logo-white-transparent.png');

function App() {
  const [scrollPixel, setScrollPixel] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setScrollPixel(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container className="App">
      <LogoContainer scrollPixel={scrollPixel} >
        {scrollPixel > 100
          ? <Logo src={logo_white} alt='scd logo' />
          : <Logo src={logo_black} alt='scd logo' />
        }
      </LogoContainer>

      <Routes>
        <Route exact path='/' element={<Home/>} />
      </Routes>

      <FooterLogo src={logo_black} alt='scd logo' />
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
`
const LogoContainer = styled.div`
  position: fixed;
  height: 10vh;
  width: 90rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.scrollPixel > 100 ? 'black' : 'white'};
  transition: background-color 0.5s ease;
`;
const Logo = styled.img`
  position: fixed;
  width: 250px;
  height: 50px;
`;
const FooterLogo = styled.img`
  width: 1400px;
  height: 350px;
  transform: translate(25px)
`;

export default App;
