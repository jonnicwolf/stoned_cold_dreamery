import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import Cloud from './Cloud';
// import {cloud, animation} from './customizations';

// const {tiny} = cloud;
// const [motion1] = animation;

const logo_black = require('../photo_assets/carousel_home/scd-logo-transparent.png');
// const logo_white = require('../photo_assets/carousel_home/scd-logo-white-transparent.png');

const Logo = () => {
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
    <div>
      {/* <Cloud scale={tiny} animation={motion1}/> */}
      {/* <LogoContainer scrollPixel={scrollPixel} > */}
        {/* { scrollPixel > 100 */}
          {/* // ? <LogoImg src={logo_white} alt='scd logo' /> */}
          <LogoImg src={logo_black} alt='scd logo' />
        {/* } */}
      {/* </LogoContainer> */}
    </div>
  )
};

// const LogoContainer = styled.div`
//   align-items: center;
//   // background-color: ${ props => props.scrollPixel > 100 ? 'black' : '#7ae9ff' };
//   // display: flex;
//   height: 10vh;
//   justify-content: center;
//   position: fixed;
//   transition: background-color 0.5s ease;
//   // width: 100%;
//   z-index: 4;
//   // @media (min-width: 390px) {
//   //   height: 7vh;
//   //   width: 100vw;
//   // }
//   // @media (min-width: 426px) {
//   //   height: 10vh;
//   //   width: 100vw;
//   // }
//   // @media (min-width: 1024px) {
//   //   height: 16vh;
//   // }
//   // @media (min-width: 1440px) {
//   //   height: 12vh;
//   // }
// `;

const LogoImg = styled.img`
  
  height: 6vh;
  width: 20vw;
  // @media (min-width: 390px) {
  //   position: fixed;
  //   height: 6%;
  //   width: 70%;
  // }
  // @media (min-width: 426px) {
  //   height: 10vh;
  //   width: 70vw;
  // }
  // @media (min-width: 1024px) {
  //   height: 15vh;
  //   width: 40vw;
  // }
  // @media (min-width: 1440px) {
  //   height: 10vh;
  //   width: 30vw;
  // }
`;

export default Logo;
