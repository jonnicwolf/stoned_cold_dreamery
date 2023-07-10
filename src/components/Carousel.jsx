import React, { useState } from 'react';
import styled from 'styled-components';

const Carousel = ({slides}) => {
  const [slide, setSlide] = useState(0);
  const carouselLength = slides.length;

  function slideLeft (slidePosition) {
    setSlide(slidePosition === 0 ? carouselLength-1 : slidePosition-1);
  };
  function slideRight (slidePosition) {
    setSlide(slidePosition === carouselLength-1 ? 0 : slidePosition+1);
  };

  return (
    <Container>
      <Flavours>Flavours</Flavours>
      <ButtonRight onClick={()=>slideLeft(slide)}>←</ButtonRight>
      <SlideImage src={slides[slide]} alt="" />
      <ButtonLeft onClick={()=>slideRight(slide)}>→</ButtonLeft>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonRight = styled.button`
  background: none;
  border: none;
  color: gold;
  font-size: 60px;
  font-weight: bold;
  margin-right: -68px;
  z-index: 2;
`;
const ButtonLeft = styled.button`
  background: none;
  border: none;
  color: gold;
  font-size: 60px;
  font-weight: bold;
  margin-left: -70px;
  z-index: 2;
`;
const Flavours = styled.h1`
  font-size: 100px;
  font-color: white;
`
const SlideImage = styled.img`
  height: 450px;
  width: 38rem;
  object-fit: cover;
  z-index: 1;
`;

export default Carousel;
