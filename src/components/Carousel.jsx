import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const Carousel = ({ slides, cover, time, activationMode }) => {
  const [slideNum, setSlideNum] = useState(0);
  const [hover, setHover] = useState(false);
  const carouselLength = slides.length;

  function slideLeft (slidePosition) {
    setSlideNum(slidePosition === 0 ? carouselLength-1 : slidePosition-1);
  }; 

  useEffect(() => {
    let interval;

    if (activationMode === 'hover' && hover) interval = setInterval( ()=> slideLeft(slideNum), time );
    else if (activationMode !== 'hover' && hover === false) interval = setInterval( ()=> slideLeft(slideNum), time );
    
    return () => clearInterval(interval);
  }, [slideNum, hover, carouselLength, activationMode, time]);

  return (
    <SlideButton onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <SlideImage cover={cover} src={slides[slideNum]} alt=""/>
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
  }
  @media (min-width: 1025px) {
    height: 74vh;
  }
`;
const SlideImage = styled.img`
  width: 100%;
  height: 100%;  
  transition: all 2s ease-in-out;
  ${({ cover }) =>
    cover &&
    css`
      object-fit: fill;
  `}
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;

export default Carousel;
