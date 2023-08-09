import React, { useState } from 'react';
import styled from 'styled-components';
import NutritionSummary from './NutritionSummary';
import NutritionFacts from './NutritionFacts';
import Ingredients from './Ingredients';
import Cart from './Cart';
import AboutThisItem from './AboutThisItem';

import { birthday_cake, blue_dream, sherblato } from '../photo_assets/flavours';

const Flavor = () => {
  const [flavor,setFlavor] = useState('birthdayCake');
  const flavors = {
    birthdayCake: {
      description: 'French Vanilla ice cream and lemon cake chucks infused with our in house grown Birthday Cake cannabis',
      name:'Birthday Cake',
      photo: birthday_cake
    },
    sherblato: {
      description: 'Strawberry ice cream with dark chocolate syrup, infused with our in house grown Sherblato cannabis',
      name: 'Sherblato',
      photo: sherblato
    },
    blueDream: {
      description: 'Blueberry ice cream with a blackberry syrup, infused with our in house grown Blue Dream cannabis.',
      name: 'Blue Dream',
      photo: blue_dream
    },
  }
  function handleFlavor (event) {
    setFlavor(event.target.value);
  };

  return (
    <Container>
      <ImgContainer>
        <Img src={flavors[flavor].photo} />
      </ImgContainer>

      <Segment>
        <ProductTitle>
          <FlavorDropList value={flavor} onChange={handleFlavor}>
            <Option value="birthdayCake">Birthday Cake</Option>
            <Option value="sherblato">Sherblato</Option>
            <Option value="blueDream">Blue Dream</Option>
          </FlavorDropList>
          <P>{flavors[flavor].description}</P>
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
`;
const ImgContainer = styled(Segment)`
  overflow: hidden;
  position: sticky;
  width: 60vw;
`;
const ProductTitle = styled.div`
  margin-bottom: 2vh;
`;
const Option = styled.option`
  font-size: 10px;
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
