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
      <ImgContainer>
        <Img src={ cream[flavor].photo } alt={ cream[flavor].name } />
      </ImgContainer>

      <Segment>
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
      </Segment>

      <Segment>
        <AddItemToCart item={flavor} itemType={'cream'} />
      </Segment>
    </Container>
  );
};

const Container = styled.div`
  align-items: flex-start;
  display: flex;
  height: 100%;
  gap: 30px;
  padding: 2vw;
  margin-top: 10vh;
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

export default Flavor;
