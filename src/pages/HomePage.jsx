import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Carousel from '../components/Carousel';
import NewsLetterSignUp from '../components/NewsLetterSignUp';
import {indica_jar, hybrid_jar, sativa_jar} from '../photo_assets/signature_flower/index.js';
import {birthday_cake,blue_dream,sherblato} from '../photo_assets/flavors/index.js';

const signature_flower = [ indica_jar, hybrid_jar, sativa_jar ];
const flavors = [ birthday_cake, blue_dream , sherblato ];
const banner = require('../photo_assets/carousel_home/scd-logo-estd.jpg');

const Home = () => {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);

  return (
    <Container>
      <WebBannerBackground src={banner} alt='banner background'/>

      <CarouselContainer>
        <CarouselItem1
          style={{backgroundColor: hover1 ? 'white' : 'black'}}
          onMouseEnter={()=>setHover1(true)}
          onMouseLeave={()=>setHover1(false)}
          to='/cream'
        >
          <Cream style={{color: hover1 ? 'black' : 'white'}}>
            CREAM
          </Cream>
          <Carousel slides={flavors} />
        </CarouselItem1>

        <CarouselItem2
          style={{backgroundColor: hover2 ? 'white' : 'black'}}
          onMouseEnter={()=>setHover2(true)}
          onMouseLeave={()=>setHover2(false)}
          to='/herb'
        >
          <Carousel
            slides={signature_flower}
            style={{border: hover2 ? '50px solid blue' : '50px solid red'}}
            />
          <Herb style={{color: hover2 ? 'black' : 'white'}}>
            HERB
          </Herb>
        </CarouselItem2>
      </CarouselContainer>

      <NewsLetterSignUp />
    </Container>
  );
};

const CarouselItem = styled(Link)`
  display: flex;
  width: 50vw;
  text-decoration: none;
  @media (max-width: 425px) {
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
const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  height: 60vh;
  width: 100vw;
  @media (max-width: 425px) {
    flex-direction: column;
    height: auto;
  }
`;
const Container = styled.div`
  align-items: center;
  background-color: black;
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
`;
const Cream = styled.div`
  align-self: center;
  color: white;
  font-family: Modak;
  font-size: 100px;
  letter-spacing: -10vh;
  justify-content: center;
  width: 6vw;
  writing-mode: vertical-rl;
  text-orientation: upright;
  text-align: center;
  transform: translate(32px,-25px);
  @media (max-width: 1024px) {
    font-size: 80px;
    letter-spacing: -9vh;
  }
  @media (max-width: 768px) {
    font-size: 70px;
    letter-spacing: -8vh;
    width: 7vw;
  }
  @media (max-width: 425px) {
    writing-mode: unset;
    font-size: 65px;
    width: 100%;
    letter-spacing: 0.5vh;
    transform: none;
  }
`;
const Herb = styled.p`
  align-self: center;
  color: white;
  font-size: 110px;
  font-family: Modak;
  font-weight: normal;
  letter-spacing: -87px;
  margin: 0;
  width: 7vw;
  writing-mode: vertical-rl;
  text-orientation: upright;
  text-align: center;
  transform: translate(36px, -30px);
  @media (max-width: 1024px) {
    font-size: 90px;
    letter-spacing: -10vh;
  }
  @media (max-width: 768px) {
    font-size: 70px;
    letter-spacing: -8vh;
    transform: translate(25px);
  }
  @media (max-width: 425px) {
    font-size: 70px;
    writing-mode: unset;
    letter-spacing: 1vw;
    transform: none;
    width: 100%;
    margin: 0;
    z-index: 1;
    height: 11.5vh;
  }
`;
const WebBannerBackground = styled.img`
  margin-top: 50px;
  width: 1440px;
  height: 185vh;
  @media (max-width: 390px) {
    height: 40%;
    width: 100%;
  }
  @media (max-width: 424px) {
    height: 170vh;
    width: 100vw;
  }
  @media (max-width: 768px) {
    height: 110vh;
    width: 100vw;
  }
  @media (max-width: 1024px) {
    height: 200vh;
    width: 100%;
  }
  @media (max-width: 1440px) {
    height: 250vh;
    width: 100%;
  }
  @media (max-width: 2560px) {
    height: 200vh;
    width: 100%;
  }
`;

export default Home;
