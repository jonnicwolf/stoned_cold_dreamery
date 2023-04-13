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
      <button onClick={()=>slideLeft(slide)}>←</button>
      <div>
        <SlideImage src={slides[slide]} alt="" />
      </div>
      <button onClick={()=>slideRight(slide)}>→</button>
    </Container>
  );
};


const Container = styled.div`
  display: flex;
`;
const SlideImage = styled.img`
  width: 700px;
  height: 400px;
`;

export default Carousel;
