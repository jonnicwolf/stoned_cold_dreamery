import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './pages/HomePage';
import CreamPage from "./pages/CreamPage";
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import HerbPage from './pages/HerbPage';
import NavBar from './components/NavBar';

const logo_black = require('./photo_assets/carousel_home/scd-logo-transparent.png');

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

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container className="App">
      <NavBar scrollPixel={scrollPixel} />

      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/herb' element={<HerbPage />} />
        <Route exact path='/cream' element={<CreamPage />} />
        <Route exact path='/cart' element={<CartPage />} />
        <Route exact path='/checkout' element={<CheckoutPage />} />
      </Routes>

      { screenWidth <= 768
        ? null
        : <FooterLogoContainer>
            <Copyright>&#9400; 2020 - 2040 The Stoned Cold Dreamery. All rights reserved. </Copyright>
          </FooterLogoContainer>
      }
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  overflow-x: hidden;
`;
const Copyright = styled.p`
  font-size: 1.5vh;
  font-family: Permanent Marker;
`
const FooterLogoContainer = styled.footer`
  align-items: center;
  background-color: white;
  display: flex;
  height: 5vh;
  justify-content: center;
  width: 100%;
  position: sticky;
`;

export default App;
