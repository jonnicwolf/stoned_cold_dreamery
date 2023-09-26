import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Carousel = ({slides}) => {
  const [slideNum, setSlideNum] = useState(0);
  const [hover, setHover] = useState(false);
  const carouselLength = slides.length;
 
  useEffect(() => {
    let interval;
    if (hover) interval = setInterval(() => slideLeft(slideNum), 500);
    return () => clearInterval(interval);
  }, [slideNum, hover]);

  function slideLeft (slidePosition) {
    setSlideNum(slidePosition === 0 ? carouselLength-1 : slidePosition-1);
  };

  return (
    <SlideButton
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => slideLeft(slideNum)}
    >
      <SlideImage
        alt=""
        src={slides[slideNum]}
      />
    </SlideButton>
  );
};

const SlideButton = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  @media (min-width: 425px) {
    height: 60vh;
  }
`;
const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  transition: opacity 1.5s ease-in-out;
  opacity: 0.7;
  &:hover {
    opacity: 1;
    border-right: 5px solid black;
  }
`;

export default Carousel;
