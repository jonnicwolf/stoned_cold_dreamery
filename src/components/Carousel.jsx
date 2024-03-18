import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ChangeImgBackgroundColor from './ChangeImgBackgroundColor.jsx';

const Carousel = ({slides, backgroundColors }) => {
  const [slideNum, setSlideNum] = useState(0);
  const [hover, setHover] = useState(false);
  const carouselLength = slides.length;

  useEffect(() => {
    function slideLeft (slidePosition) {
      setSlideNum(slidePosition === 0 ? carouselLength-1 : slidePosition-1);
    }; 
    let interval;
    if (hover) interval = setInterval(() => slideLeft(slideNum), 500);
    return () => clearInterval(interval);
  }, [slideNum, hover, carouselLength]);

  return (
    <SlideButton onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <SlideImage  src={slides[slideNum]} alt=""/>
      {/* <ChangeImgBackgroundColor path={slides[slideNum]} fillStyleColor={backgroundColors[slideNum]} /> */}
    </SlideButton>
  );
};

const SlideButton = styled.div`
  height: 100%;
  width: 100%;
  z-index: 1;
  @media(min-width: 601px) and (max-width: 768px) {
    height: 30vh;
  } 
  @media (min-width: 769px) and (max-width: 1024px) {
    height: 46vh;
    // width: 40wh;
  }
  @media (min-width: 1025px) {
    height: 74vh;
  }
  // @media (min-width: 750px) and (max-width: 1149px) {
  //   height: 50vh;
  // }
  // @media (min-width: 600px) and (max-width: 749px) { 
  // @media (max-width: 599px) {
  //   height: 20vh;
  // }
  // @media (min-width: 320px) and (max-width: 425px) {
  //   height: 40vh;
  // }
`;
const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  transition: opacity 1.5s ease-in-out;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;

export default Carousel;
