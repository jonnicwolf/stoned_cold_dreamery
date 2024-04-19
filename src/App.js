import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import HomePage from './pages/HomePage';
import CreamPage from "./pages/CreamPage";
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import HerbPage from './pages/HerbPage';
import Sandbox from './pages/Sandbox';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  const location = useLocation();
  const [scrollPixel, setScrollPixel] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setScrollPixel(scrolled);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container className="App">
      <NavBar scrollPixel={scrollPixel} />

      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route path='/sandbox' element={<Sandbox />}/>
        <Route exact path='/herb' element={<HerbPage />} />
        <Route exact path='/cream' element={<CreamPage />} />
        <Route exact path='/cart' element={<CartPage />} />
        <Route exact path='/checkout' element={<CheckoutPage />} />
      </Routes>

      {location.pathname !== '/sandbox' && <Footer />}
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  overflow-x: hidden;
  background-color: #daf3f1;
`;

export default App;
