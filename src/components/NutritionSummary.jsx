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
          <StatName>Fiber</StatName>
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
  align-self: center;
  justify-content: space-between;
  gap: 20px;
  width: 35vw;
  @media only screen and (max-width: 1024px) {
    width: 80vw;
    gap: 10px;
  }
`;
const Stat = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: 'Chakra Petch', sans-serif;
  font-size: 1.5em;
  text-style: bold;
  @media only screen and (max-width: 1024px) {
    font-size: 1.2em;
  }
`;
const StatName = styled.div`
  font-size: 50%;
  text-wrap: nowrap;
  @media only screen and (max-width: 1024px) {
    font-size: 75%;
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
