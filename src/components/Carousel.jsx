import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const Carousel = ({ slides, cover, time, activationMode, size }) => {
  const [slideNum, setSlideNum] = useState(0);
  const [hover, setHover] = useState(false);
  const [fade, setFade ] = useState(false);
  const carouselLength = slides.length;

  let size_prop
  switch (size) {
    case "large": 
      size_prop = '100%';
      break;
    case "medium":
      size_prop = '85vh';
      break;
    default:
      size_prop = '40vh';
  };

  useEffect(() => {
    function slideLeft (slidePosition) {
      setFade(true);
      setTimeout(()=>{
        setSlideNum(slidePosition === 0 ? carouselLength-1 : slidePosition-1);
        setFade(false);
      }, (time/2));
    }; 

    let interval;

    if (activationMode === 'hover' && hover) interval = setInterval( ()=> slideLeft(slideNum), time );
    else if (activationMode !== 'hover' && hover === false) interval = setInterval( ()=> slideLeft(slideNum), time );
    
    return () => clearInterval(interval);
  }, [slideNum, hover, carouselLength, activationMode, time]);

  return (
    <SlideButton
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      size={size_prop}
    >
      <SlideImage
        cover={cover}
        src={slides[slideNum]}
        alt=""
        fade={fade} />
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
    height: ${prop => prop.size};
  }
`;
const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  transition: opacity 0.5s ease-in-out;
  ${({ cover }) => cover && css` object-fit: fill; `}
  opacity: 0.7;
  opacity: ${({ fade }) => (fade ? 0 : 1)}; // Control opacity based on fade state
  pointer-events: ${({ fade }) => (fade ? 'none' : 'auto')}; // Disable pointer events during fade
  &:hover {
    opacity: 1;
  }
`;

export default Carousel;
