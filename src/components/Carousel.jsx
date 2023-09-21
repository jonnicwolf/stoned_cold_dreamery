import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Carousel = ({slides}) => {
  const [slideNum, setSlideNum] = useState(0);
  const [hover, setHover] = useState(false);
  const carouselLength = slides.length;

  console.log('hover', hover)

  function slideLeft (slidePosition) {
    setSlideNum(slidePosition === 0 ? carouselLength-1 : slidePosition-1);
  };

  useEffect(() => {
    let interval;
    if (hover) interval = setInterval(() => slideLeft(slideNum), 500);
    return () => clearInterval(interval);
  }, [slideNum, hover]);

  return (
    <SlideButton
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={()=>slideLeft(slideNum)}
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
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`;

export default Carousel;
