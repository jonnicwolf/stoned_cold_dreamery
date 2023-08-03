import React from 'react';
import styled from 'styled-components';
import '../fonts/fonts.css';

const NutritionFacts = ({size}) => {
  return (
    <NutritionSummary>
      <h3>Nutrition Summary</h3>
      <p>4 servings per container | {size}</p>
      <StatContainer>
        <Stat>
          <div>260</div>
          <div>Calories</div>
        </Stat>
        <Stat>
          <div>55mg</div>
          <div>Sodium</div>
        </Stat>
        <Stat>
          <div>2g</div>
          <div>Dietary Fiber</div>
        </Stat>
        <Stat>
          <div>22g</div>
          <div>Sugars</div>
        </Stat>
        <Stat>
          <div>4g</div>
          <div>Protein</div>
        </Stat>
      </StatContainer>
      <span>underline break</span>
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
  gap: 5px;
`;
const Stat = styled.div`
  font-family: 'Chakra Petch', sans-serif;
  font-size: 16px;
  text-style: bold;
`;

export default NutritionFacts;
