import React from 'react';
import styled from 'styled-components';
import NutritionSummary from './NutritionSummary';
import NutritionFacts from './NutritionFacts';
import Ingredients from './Ingredients';
import Cart from './Cart';

import { birthday_cake } from '../photo_assets/flavours';
import AboutThisItem from './AboutThisItem';

const Flavor = ({title, description}) => {
  return (
    <Container>
      <ImgContainer>
        <Img src={birthday_cake} />
      </ImgContainer>

      <Segment>
        <ProductTitle>
          <Title>
            Birthday Cake
            <FlavorDropList>
              <option value="Neutral">--</option>
              <option value="Birthday Cake">Birthday Cake</option>
              <option value="Sherblato">Sherblato</option>
              <option value="Blue Dream">Blue Dream</option>
            </FlavorDropList>
          </Title>
          <P>French Vanilla ice cream and lemon cake chucks infused with our in house grown Birthday Cake cannabis</P>
          <UnderlineBreak />
        </ProductTitle>
        <NutritionSummary size='1Pt / 1500mg'/>
        <NutritionFacts />
        <Ingredients />
        <AboutThisItem />
      </Segment>

      <Segment>
        <Cart />
      </Segment>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 30px;
  padding: 2vw;
`;
const Img = styled.img`
  width: 60vw;
  transform: translate(-125px, -80px);
`;
const FlavorDropList = styled.select`
  border: none;
`;
const Segment = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 100%;
`;
const ImgContainer = styled(Segment)`
  overflow: hidden;
  position: sticky;
  width: 60vw;
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
