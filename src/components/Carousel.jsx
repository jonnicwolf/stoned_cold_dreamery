import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Carousel = ({slides}) => {
  const [slideNum, setSlideNum] = useState(0);
  const carouselLength = slides.length;

  function slideLeft (slidePosition) {
    setSlideNum(slidePosition === 0 ? carouselLength-1 : slidePosition-1);
  };

  useEffect(() => {
    const interval = setInterval(() => slideLeft(slideNum), 2500);
    return () => clearInterval(interval);
  }, [slideNum]);

  return (
    <SlideButton onClick={()=>slideLeft(slideNum)}>
      <SlideImage src={slides[slideNum]} alt="" />
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
`;

export default Carousel;
