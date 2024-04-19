import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Accessibility from './pages/Accessibility';
import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs';
import CreamPage from "./pages/CreamPage";
import CartPage from './pages/CartPage';
import HerbPage from './pages/HerbPage';
import FAQS from './pages/FAQS';
import Privacy from './pages/Privacy';
import Refer from './pages/Refer';
import TOS from './pages/TOS';
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
        <Route exact path='/'        element={<HomePage/>}       />
        <Route path='/sandbox'       element={<Sandbox />}       />
        <Route path='/herb'          element={<HerbPage />}      />
        <Route path='/cream'         element={<CreamPage />}     />
        <Route path='/cart'          element={<CartPage />}      />
        <Route path='/contact'       element={<ContactUs />}     />
        <Route path='/refer'         element={<Refer />}         />
        <Route path='/accessibility' element={<Accessibility />} />
        <Route path='/faqs'          element={<FAQS />}          />
        <Route path='/privacy'       element={<Privacy />}       />
        {/* <Route path='/tos'           element={<TOS />}           /> */}
      </Routes>

      {location.pathname !== '/sandbox' && <Footer />}
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  overflow-x: hidden;
  background-color: #fffff6;
  display: flex;
  flex-direction: column;
`;

export default App;
