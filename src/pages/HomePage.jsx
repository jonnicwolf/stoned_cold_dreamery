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

  console.log('screenWidth: ', document.documentElement.clientWidth);

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
          to='/herb'>
          <Carousel slides={signature_flower} style={{border: hover2 ? '50px solid blue' : '50px solid red'}} />
          <Herb style={{color: hover2 ? 'black' : 'white'}}>HERB</Herb>
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
  @media (min-width: 750px) and (max-width: 1149px) {
    height: 50vh;
  }
  @media (min-width: 600px) and (max-width: 749px) {
    height: 35vh;
  }
  @media (max-width: 599px) {
    height: 20vh;
  }
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
  align-items: center;
  color: white;
  display: flex;
  font-family: Modak;
  font-size: 100px;
  letter-spacing: -10vh;
  width: 6vw;
  writing-mode: vertical-rl;
  text-orientation: upright;
  @media (min-width: 1716px) and (max-width: 2560px) {
    font-size: 130px;
    letter-spacing: -10vh;
  }
  @media (min-width: 1620px) and (max-width: 1715px) {
    align-items: center;
    font-size: 120px;
    letter-spacing: -8vh;
  }
  @media (min-width: 1320px) and (max-width: 1619px) {
    align-items: center;
    font-size: 110px;
    justify-content: center;
    letter-spacing: -8vh;
  }
  @media (min-width: 1145px) and (max-width: 1319px) {
    font-size: 95px;
    justify-content: center;
    letter-spacing: -7.5vh;
    padding-bottom: 50px;
  }
  @media (min-width: 1025px) and (max-width: 1144px) {
    font-size: 90px;
    justify-content: center;
    letter-spacing: -6.5vh;
    padding: 5px;
    padding-bottom: 45px;
  }
  @media (min-width: 966px) and (max-width: 1024px) {
    font-size: 80px;
    letter-spacing: -6vh;
    justify-content: center;
    padding: 5px;
    padding-bottom: 40px;
  }
  @media (min-width: 769px) and (max-width: 965px) {
    font-size: 65px;
    letter-spacing: -4vh;
    justify-content: center;
    padding-bottom: 40px;
  }
  @media (max-width: 768px) and (min-width: 600px) {
    font-size: 55px;
    letter-spacing: -3.5vh;
    justify-content: center;
  }
  @media(max-width: 599px) {
    font-size: 40px;
    letter-spacing: -3vh;
    justify-content: center;
    padding: 5px;
    padding-bottom: 10px;
  }
  @media (max-width: 425px) {
    font-size: 70px;
    writing-mode: unset;
    letter-spacing: 1vw;
    width: 100%;
    margin: 0;
    height: 11.5vh;
    z-index: 1;
  }
`;
const Herb = styled.p`
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
  @media (max-width: 2560px) {
    font-size: 145px;
    letter-spacing: -10vh;
  }
  @media (min-width: 2420px) and (max-width: 2560px) {
    display: flex;
    
  }
  @media (min-width: 2020px) and (max-width: 2419px) {
    align-items: center;
    display: flex;
    
  }
  @media (min-width: 1320px) and (max-width: 2019px) {
    align-items: center;
    font-size: 130px;
    justify-content: center;
  }
  @media (min-width: 1145px) and (max-width: 1319px) {
    font-size: 110px;
    justify-content: center;
    letter-spacing: -8.5vh;
    padding-bottom: 50px;
    transform: none;
  }
  @media (min-width: 1025px) and (max-width: 1144px) {
    font-size: 100px;
    justify-content: center;
    letter-spacing: -6.5vh;
    padding-bottom: 45px;
    transform: none;
  }
  @media (min-width: 966px) and (max-width: 1024px) {
    font-size: 90px;
    border: 1px solid red;
    letter-spacing: -6vh;
    justify-content: center;
    padding-bottom: 40px;
    transform: none;
  }
  @media (min-width: 769px) and (max-width: 965px) {
    transform: none;
    font-size: 65px;
    letter-spacing: -4vh;
    justify-content: center;
    padding-bottom: 40px;
  }
  @media (max-width: 768px) {
    transform: none;
    font-size: 60px;
    letter-spacing: -3.5vh;
    justify-content: center;
    padding: 5px;
    padding-right: 0;
  }
  @media(max-width: 599px) {
    font-size: 45px;
    letter-spacing: -3.5vh;
    justify-content: center;
    padding: 5px;
    transform: none;
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
  margin-top: -100px;
  width: 100vw;
  height: 80vh;
  @media (max-width: 2560px) {
    height: 180vh;
  }
  @media (max-width: 1950px) {
    height: 150vh
  }
  @media (max-width: 1440px) {
    height: 110vh;
  }
`;

export default Home;
