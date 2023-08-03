import React from 'react';
import styled from 'styled-components';
import '../fonts/fonts.css';

const NutritionFacts = ({size}) => {
  return (
    <NutritionSummary>
      <Title>
        <p><b>Nutrition Summary</b></p>
        <p>4 servings per container | {size}</p>
      </Title>

      <StatContainer>
        <Stat>
          <strong>260</strong>
          <StatName>Calories</StatName>
        </Stat>
        <Stat>
          <strong>55mg</strong>
          <StatName>Sodium</StatName>
        </Stat>
        <Stat>
          <strong>2g</strong>
          <StatName>Dietary Fiber</StatName>
        </Stat>
        <Stat>
          <strong>22g</strong>
          <StatName>Sugars</StatName>
        </Stat>
        <Stat>
          <strong>4g</strong>
          <StatName>Protein</StatName>
        </Stat>
      </StatContainer>
      <UnderlineBreak></UnderlineBreak>

    </NutritionSummary>
  );
};


const NutritionSummary = styled.div`
  display: flex;
  flex-direction: column;
`;
const StatContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
const Stat = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: 'Chakra Petch', sans-serif;
  font-size: 16px;
  text-style: bold;
`;
const StatName = styled.div`
  font-size: 12px;
`;
const Title = styled.div`
  font-family: 'Chakra Petch', sans-serif;
`;
const UnderlineBreak = styled.span`
  padding-top: 1vh;
  border-bottom: 1px solid black;
  width: 100%;

`;
export default NutritionFacts;
