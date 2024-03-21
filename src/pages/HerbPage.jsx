import React, { useState } from 'react';
import styled from 'styled-components';
import AddItemToCart from '../components/AddItemToCart';

const HerbPage = () => {
  const [flavor,setFlavor] = useState('indica');
  const { smokable } = require('../data.json');

  function handleFlavor (event) {
    setFlavor(event.target.value);
  };

  return (
    <Container>
      <ImgContainer>
        <Img src={ smokable[flavor].photo } alt={ smokable[flavor].name }/>
      </ImgContainer>

      <Segment1>
        <ProductTitle>
          <FlavorDropList value={flavor} onChange={handleFlavor}>
            <Option value="indica">King Louis</Option>
            <Option value="sativa">Blue Dream</Option>
            <Option value="hybrid">Ovan</Option>
          </FlavorDropList>
          <P>{smokable[flavor].description}</P>
        </ProductTitle>
      </Segment1>

      <Segment2>
        <AddItemToCart item={flavor} itemType={'smokable'} />
      </Segment2>
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  gap: 30px;
  padding: 2vw;
  margin-top: 10vh;
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
const FlavorDropList = styled.select`
  border: none;
  font-family: 'Permanent Marker', cursive;
  font-weight: normal;
  font-size: 36px;
  margin: 0;
  outline: none;
  &:active {
    border: none;
  }
`;
const Segment = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 100%;
  @media (min-width: 320px) and (max-width: 425px) {
    width: 90vw;
  }
`;
const Segment1 = styled(Segment)`
  order: 3;
  transform: translateY(-20vh);
  @media only screen and (max-width: 767px) {
    transform: none;
    width: 90%;
  }
`;
const Segment2 = styled(Segment)`
  order: 2;
  transform: translateY(-20vh);
  @media only screen and (max-width: 767px) {
    transform: none;
    width: 100%;
  }
`;
const ImgContainer = styled(Segment)`
  overflow: hidden;
  width: 60vw;
  margin-top: -10vh;
  @media only screen and (max-width: 767px) {
    margin-top: 0;
    width: 100%;
  }
`;
const Img = styled.img`
  width: 60vw;
  height: 120vh;
  transform: translate(-125px, -80px);
  @media only screen and (max-width: 767px) {
    transform: none;
    width: 100%;
    height: auto;
  }
`;
const Option = styled.option`
  font-size: 10px;
`;
const P = styled.p`
  font-family: 'Chakra Petch', sans-serif;
  margin: 0;
`;
const ProductTitle = styled.div`
  margin-bottom: 2vh;
  @media (min-width: 320px) and (max-width: 425px) {
    width: 93vw;
  }
`;

export default HerbPage;
