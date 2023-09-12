import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './pages/HomePage';
import CreamPage from "./pages/CreamPage";
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import NavBar from './components/NavBar';

function App() {
  
  

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrolled = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  //     const screenWidth = document.documentElement.clientWidth;
  //     setScrollPixel(scrolled);
  //     setScreenWidth(screenWidth);
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <Container className="App">
      <NavBar />
      {/* <LogoContainer scrollPixel={scrollPixel} >
        { scrollPixel > 100
          ? <Logo src={logo_white} alt='scd logo' />
          : <Logo src={logo_black} alt='scd logo' />
        }
      </LogoContainer> */}

      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/cream' element={<CreamPage />} />
        <Route exact path='/cart' element={<CartPage />} />
        <Route exact path='/checkout' element={<CheckoutPage />} />
      </Routes>

      {/* { screenWidth <= 768
        ? null
        : <FooterLogoContainer>
            <FooterLogo src={logo_black} alt='scd logo' />
          </FooterLogoContainer>
      } */}
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  overflow-x: hidden;
`;
// const LogoContainer = styled.div`
//   align-items: center;
//   background-color: ${props => props.scrollPixel > 100 ? 'black' : '#7ae9ff'};
//   display: flex;
//   height: 10vh;
//   justify-content: center;
//   position: fixed;
//   transition: background-color 0.5s ease;
//   width: 100%;
//   z-index: 4;
//   @media (min-width: 390px) {
//     height: 7vh;
//     width: 100vw;
//   }
//   @media (min-width: 426px) {
//     height: 10vh;
//     width: 100vw;
//   }
//   @media (min-width: 1024px) {
//     height: 16vh;
//   }
//   @media (min-width: 1440px) {
//     height: 12vh;
//   }
// `;
// const Logo = styled.img`
//   height: 80px;
//   width: 250px;
//   @media (min-width: 390px) {
//     position: fixed;
//     height: 6%;
//     width: 70%;
//   }
//   @media (min-width: 426px) {
//     height: 10vh;
//     width: 70vw;
//   }
//   @media (min-width: 1024px) {
//     height: 15vh;
//     width: 40vw;
//   }
//   @media (min-width: 1440px) {
//     height: 10vh;
//     width: 30vw;
//   }
// `;
// const FooterLogo = styled.img`
//   height: 100px;
// `;
// const FooterLogoContainer = styled.footer`
//   align-items: center;
//   background-color: white;
//   display: flex;
//   height: 150px;
//   justify-content: center;
//   width: 100%;
//   position: sticky;
// `;

export default App;
