import React, { useState } from 'react';
import styled from 'styled-components';
import NutritionSummary from '../components/NutritionSummary';
import NutritionFacts from '../components/NutritionFacts';
import Ingredients from '../components/Ingredients';
import AddItemToCart from '../components/AddItemToCart';
import AboutThisItem from '../components/AboutThisItem';

const Flavor = () => {
  const [flavor,setFlavor] = useState('birthday_cake');
  const { cream } = require('../data.json');

  function handleFlavor (event) {
    setFlavor(event.target.value);
  };

  return (
    <Container>
      <ImageContainer>
        <Img src={ cream[flavor].photo } alt={ cream[flavor].name } />
      </ImageContainer>

      <Segment2>
        <ProductTitle>
          <FlavorDropList value={flavor} onChange={handleFlavor}>
            <Option value="birthday_cake">Birthday Cake</Option>
            <Option value="sherblato">Sherblato</Option>
            <Option value="blue_dream">Blue Dream</Option>
          </FlavorDropList>
          <P>{cream[flavor].description}</P>
        </ProductTitle>
        <NutritionSummary size='1Pt / 1500mg'/>
        <NutritionFacts />
        <Ingredients />
        <AboutThisItem />
      </Segment2>

      <Segment3>
        <AddItemToCart item={flavor} itemType={'cream'} />
      </Segment3>
    </Container>
  );
};

const Container = styled.div`
  align-items: flex-start;
  border: 1px solid red;
  display: flex;
  height: 100%;
  gap: 30px;
  padding: 2vw;
  margin-top: 10vh;
  @media (min-width: 320px) and (max-width: 425px) {
    align-items: center;
    flex-direction: column;
  }
`;
const Img = styled.img`
  width: 50vw;
  object-fit: scale-down;
  transform: translateX(-17%);
  @media (min-width: 320px) and (max-width: 425px) {
    transform: none;
    width: 100%;
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
    width: 100%;
  }
`;
const ImageContainer = styled(Segment)`
  overflow: hidden;
  width: 60vw;
  height: 100%;
  border-radius: 30px;
  border: 1px solid red;
  @media (min-width: 320px) and (max-width: 425px) {
    width: 90vw;
  }
`;
const Segment2 = styled(Segment)`
  order: 3;
  border: 1px solid red;
`;
const Segment3 = styled(Segment)`
  order: 2;
  border: 1px solid red;
`;
const ProductTitle = styled.div`
  margin-bottom: 2vh;
  @media (min-width: 320px) and (max-width: 425px) {
    width: 93vw;
  }
`;
const Option = styled.option`
  font-size: 10px;
`;
const P = styled.p`
  font-family: 'Chakra Petch', sans-serif;
  margin: 0;
`;

export default Flavor;
