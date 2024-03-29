import React from 'react';
import styled from 'styled-components';
import '../fonts/fonts.css';

const NutritionFacts = ({size}) => {
  return (
    <NutritionSummary>
      <Title>
        <P><b>Nutrition Summary</b></P>
        <P>4 servings per container | {size}</P>
      </Title>
      <br />
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
      <UnderlineBreak />
    </NutritionSummary>
  );
};


const NutritionSummary = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1vh;
`;
const P = styled.p`
  margin: 0;
`;
const StatContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  @media only screen and (min-width: 1024px) {
    gap: 10px;
  }
`;
const Stat = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: 'Chakra Petch', sans-serif;
  font-size: 2vh;
  text-style: bold;
  @media only screen and (min-width: 1024px) {
    font-size: 15px;
  }
`;
const StatName = styled.div`
  font-size: 1.257vh;
  font-size: 1.7vh;
  text-wrap: nowrap;
  @media only screen and (min-width: 1024px) {
    font-size: 15px;
  }

`;
const Title = styled.div`
  font-family: 'Chakra Petch', sans-serif;
  padding-left: 3px;
`;
const UnderlineBreak = styled.span`
  padding-top: 1vh;
  border-bottom: 1px solid black;
  width: 100%;
`;

export default NutritionFacts;
