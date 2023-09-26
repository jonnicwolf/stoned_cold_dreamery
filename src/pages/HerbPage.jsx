import React, { useState } from 'react';
import styled from 'styled-components';
import NutritionSummary from '../components/NutritionSummary';
import NutritionFacts from '../components/NutritionFacts';
import Ingredients from '../components/Ingredients';
import AddItemToCart from '../components/AddItemToCart';
import AboutThisItem from '../components/AboutThisItem';

const HerbPage = () => {
  const [flavor,setFlavor] = useState('birthday_cake');
  const { cream } = require('../data.json');
  return (
    <Container>
      <ImgContainer>
        <Img />
      </ImgContainer>
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
const ImgContainer = styled(Segment)`
  overflow: hidden;
  width: 60vw;
`;
const Img = styled.img`
  width: 60vw;
  transform: translate(-125px, -80px);
`;

export default HerbPage;
