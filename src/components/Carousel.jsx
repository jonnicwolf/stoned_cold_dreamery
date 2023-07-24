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
      <ButtonRight onClick={()=>slideLeft(slideNum)}>
        <SlideImage src={slides[slideNum]} alt="" />
      </ButtonRight>
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
  opacity: 100%;
  z-index: 1;
  @media (min-width: 390px) {
    height: 55vh;
    transform: translateX(-30px);
    width: 100vw;
  }
  @media (min-width: 1024px) {
    width: 30vw;
    margin: 0;
    height: 50vh;
  }
  @media (min-width: 2560px) {
    height: 100vh;
  }
`;
const SlideImage = styled.img`
  object-fit: cover;
  @media (min-width: 390px) {
    height: 100%;
    width: 120vw;
    transform: translateX(-140px);
  }
  @media (min-width: 768px) {
    transform: translateX(-190px);
    width: 100vw;
  }
  @media (min-width: 1024px) {
    height: 400px;
    width: 370px;
    width: 400px;
    transform: translateY(5px);
  }
  @media (min-width: 2560px) {
    height: 100vh;
    width: 110%;
  }
`;

export default Carousel;
