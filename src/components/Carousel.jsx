import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Carousel = ({slides}) => {
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
    <SlideButton
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <SlideImage
        alt=""
        src={slides[slideNum]}
      />
    </SlideButton>
  );
};

const SlideButton = styled.div`
  height: 60vh;
  width: 100%;
  z-index: 1;
  @media (min-width: 750px) and (max-width: 1149px) {
    height: 50vh;
  }
  @media (min-width: 650px) and (max-width: 749px) {
    height: 35vh;
  }
  @media (max-width: 649px) {
    height: 20vh;
  }
`;
const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  transition: opacity 1.5s ease-in-out;
  opacity: 0.7;
  border-right: 5px solid black;
  &:hover {
    opacity: 1;
    border-right: 5px solid black;
  }
`;

export default Carousel;
