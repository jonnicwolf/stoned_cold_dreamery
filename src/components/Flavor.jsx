import React from 'react';
import styled from 'styled-components';
import NutritionSummary from './NutritionSummary';
import NutritionFacts from './NutritionFacts';
import Ingredients from './Ingredients';

import { birthday_cake } from '../photo_assets/flavours';

const Flavor = () => {
  return (
    <Container>
      <ImgContainer>
        <Img src={birthday_cake} />
      </ImgContainer>

      <Segment>
        <ProductTitle>
          <Title>Birthday Cake</Title>
          <P>French vanilla ice cream and lemon cake chucks infused with our in house grown Birthday Cake cannabis</P>
          <UnderlineBreak />
        </ProductTitle>

        <NutritionSummary size='1Pt / 1500mg'/>

        <NutritionFacts />

        <Ingredients />

        <div>nutrition facts <button>&#9660;</button></div>
        <div>about this item <button>&#9660;</button>
        </div>
      </Segment>

      <Segment>
        add to cart
      </Segment>
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 2vw;
`;
const ImgContainer = styled.div`
  height: 50vh;
  width: 50vw;
  overflow: hidden;
`;
const Img = styled.img`
  border: 1px solid red;
  height: 80vh;
  width: 60vw;
  transform: translate(-125px, -180px);
`;
const Segment = styled.div`
  border: 1px solid red;
  height: 150vh;
  width: 30vw;
`;
const ProductTitle = styled.div`
  margin-bottom: 2vh;
`;
const Title = styled.h1`
  font-family: 'Permanent Marker', cursive;
  font-weight: normal;
  font-size: 36px;
  margin: 0;
`;
const P = styled.p`
  font-family: 'Chakra Petch', sans-serif;
  margin: 0;
`;
const UnderlineBreak = styled.span`
  border-bottom: 1px solid black;
  width: 100%;
  padding-top: 1vh;
`;

export default Flavor;
