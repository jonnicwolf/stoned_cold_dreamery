import React, { useState } from 'react';
import styled from 'styled-components';

const Carousel = ({slides}) => {
  const [slideNum, setSlideNum] = useState(0);
  const carouselLength = slides.length;

  function slideLeft (slidePosition) {
    setSlideNum(slidePosition === 0 ? carouselLength-1 : slidePosition-1);
  };
  function slideRight (slidePosition) {
    setSlideNum(slidePosition === carouselLength-1 ? 0 : slidePosition+1);
  };

  return (
    <Container>
      <ButtonRight onClick={()=>slideLeft(slideNum)}>←</ButtonRight>
      <SlideImage src={slides[slideNum]} alt="" />
      <ButtonLeft onClick={()=>slideRight(slideNum)}>→</ButtonLeft>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 390px) {
    height: 40%;
    width: 50%;
  }
`;
const ButtonRight = styled.button`
  background: none;
  border: none;
  color: black;
  font-size: 60px;
  font-weight: bold;
  margin-right: -68px;
  opacity: 20%;
  z-index: 1;
`;
const ButtonLeft = styled.button`
  background: none;
  border: none;
  color: black;
  font-size: 60px;
  font-weight: bold;
  margin-left: -70px;
  opacity: 20%;
  z-index: 1;
`;
const SlideImage = styled.img`
  height: 450px;
  width: 38rem;
  object-fit: cover;
  @media (min-width: 390px) {
    height: 100%;
    width: 100vw;
  }
`;

export default Carousel;
