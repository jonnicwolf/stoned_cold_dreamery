import React, { useState } from 'react';
import styled from 'styled-components';

const Carousel = ({slides}) => {
  const [slideNum, setSlideNum] = useState(0);
  const carouselLength = slides.length;

  function slideLeft (slidePosition) {
    setSlideNum(slidePosition === 0 ? carouselLength-1 : slidePosition-1);
  };

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
  // @media (min-width: 390px) {
  //   height: 55vh;
  //   transform: translateX(-30px);
  //   width: 100vw;
  // }
  @media (min-width: 425px) {
    height: 60vh;
  }
  // @media (min-width: 1024px) {
  //   width: 40vw;
  //   height: 40vh;
  // }
  // @media (min-width: 2560px) {
  //   height: 100vh;
  // }
`;
const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  // @media (min-width: 390px) {
  //   height: 100%;
  //   width: 120vw;
  //   transform: translateX(-140px);
  // }
  // @media (min-width: 768px) {
  //   transform: translateX(-190px);
  //   width: 100vw;
  // }
  // @media (min-width: 1024px) {
  //   border: 3px solid red;
  //   height: 50vh;
  //   width: 40vw;
  //   // transform: translateY(5px);
  //   // z-index: 5;
  // }
  // @media (min-width: 2560px) {
  //   height: 100vh;
  //   width: 110%;
  // }
  @media (min-width: 425px) {
    width: 100%
  }
`;

export default Carousel;
