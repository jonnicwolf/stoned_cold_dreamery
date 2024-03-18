import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Carousel from '../components/Carousel';
import NewsLetterSignUp from '../components/NewsLetterSignUp';
import { indica_jar, hybrid_jar, sativa_jar } from '../photo_assets/signature_flower/index.js';
import { birthday_cake,blue_dream,sherblato } from '../photo_assets/flavors/index.js';

const signature_flower = [ indica_jar, hybrid_jar, sativa_jar ];
const flavors = [ birthday_cake, blue_dream , sherblato ];
const banner = require('../photo_assets/carousel_home/scd-logo-estd.jpg');

const Home = () => {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const backgroundColors = ['#debf60','#376c88','#812323'];

  return (
    <Container>
      <WebBannerBackground src={banner} alt='banner background'/>

      <CarouselContainer>
        <CarouselItem1
          style={{backgroundColor: hover1 ? 'white' : 'black'}}
          onMouseEnter={()=>setHover1(true)}
          onMouseLeave={()=>setHover1(false)}
          to='/cream'>
          <Cream style={{color: hover1 ? 'black' : 'white'}}>CREAM</Cream>
          <Carousel slides={flavors} backgroundColors={backgroundColors} />
        </CarouselItem1>

        <CarouselItem2
          style={{backgroundColor: hover2 ? 'white' : 'black'}}
          onMouseEnter={()=>setHover2(true)}
          onMouseLeave={()=>setHover2(false)}
          to='/herb'>
          <Carousel slides={signature_flower} backgroundColors={backgroundColors} />
          <Herb style={{color: hover2 ? 'black' : 'white'}}>HERB</Herb>
        </CarouselItem2>
      </CarouselContainer>

      <NewsLetterSignUp />
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  background-color: black;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
`;
const WebBannerBackground = styled.img`
  width: 100vw;
  height: 100%;
  @media (max-width: 600px) {
    height: 80vh;
  }
`;
const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  @media (max-width: 600px) {
    flex-direction: column;
    height: auto;
  }
  @media(min-width: 601px) and (max-width: 768px) {
    height: 100%;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    height: 100%;
  }
  @media (min-width: 1025px) {
    height: 75vh;
    height: 100%;
  }
`;
const CarouselItem = styled(Link)`
  display: flex;
  width: 50vw;
  text-decoration: none;
  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;
const CarouselItem1 = styled(CarouselItem)`
  background-color: white;
`;
const CarouselItem2 = styled(CarouselItem)`
  background-color: white;
`;
const Cream = styled.div`
  align-items: center;
  color: white;
  display: flex;
  font-family: Modak;
  font-size: 100px;
  letter-spacing: -10vh;
  width: 6vw;
  writing-mode: vertical-rl;
  text-orientation: upright;
  @media (max-width: 600px) {
    width: auto;
    writing-mode: horizontal-tb;
    align-self: center;
    justify-content: center;
    font-size: 3.5em;
    letter-spacing: 1vh;
  }
  @media(min-width: 601px) and (max-width: 768px) {
    justify-content: space-around;
    font-size: 3rem;
    letter-spacing: -2.5vh;
  } 
  @media (min-width: 769px) and (max-width: 1024px) {
    justify-content: space-around;
    font-size: 4rem;
    letter-spacing: -3.5vh;
  }
  @media (min-width: 1025px) {
    width: 18%;
    justify-content: space-around;
    font-size: 7rem;
    letter-spacing: -6vh;
  }
`;
const Herb = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: 110px;
  font-family: Modak;
  font-weight: normal;
  letter-spacing: -87px;
  margin: 0;
  width: 7vw;
  writing-mode: vertical-rl;
  text-orientation: upright;
  @media (max-width: 600px) {
    writing-mode: horizontal-tb;
    align-self: center;
    justify-content: center;
    font-size: 3.5em;
    letter-spacing: 1vh;
  }
  @media (min-width: 601px) and (max-width: 769px) {
    justify-content: space-around;
    font-size: 3.2rem;
    letter-spacing: -3vh;
  }
  @media (min-width: 770px) and (max-width: 1024px) {
    text-orientation: upright;
    justify-content: space-around;
    font-size: 3rem;
    letter-spacing: 1%:
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    justify-content: space-around;
    font-size: 4rem;
    letter-spacing: -3vh;
  }
  @media (min-width: 1025px) {
    justify-content: space-around;
    font-size: 7rem;
    letter-spacing: -6vh;
    width: 18%
  }
`;

export default Home;
