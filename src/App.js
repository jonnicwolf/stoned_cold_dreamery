import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Home from './pages/Home';

const logo_black = require('./photo_assets/carousel_home/scd-logo-transparent.png');
const logo_white = require('./photo_assets/carousel_home/scd-logo-white-transparent.png');

function App() {
  const [scrollPixel, setScrollPixel] = useState(0);
  console.log(scrollPixel)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setScrollPixel(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <LogoContainer scrollPixel={scrollPixel} >
        {scrollPixel > 100
          ? <Logo src={logo_black} scrollPixel={scrollPixel} alt='scd logo' />
          : <Logo src={logo_white} scrollPixel={scrollPixel} alt='scd logo' />
        }
      </LogoContainer>

      <Routes>
        <Route exact path='/' element={<Home/>} />
      </Routes>
    </div>
  );
};

const LogoContainer = styled.div`
  position: sticky;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.scrollPixel > 100 ? 'white' : 'black'};
`;
const Logo = styled.img`
  position: fixed;
  width: 200px;
  height: 70px;
`;

export default App;
