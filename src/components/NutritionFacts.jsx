import React from 'react';
import styled from 'styled-components';
const NutritionFacts = ({size}) => {
  return (
    <Container>
      <NutritionSummary>
        <h3>Nutrition Summary</h3>
        <p>3.5 servings per container | {size}</p>
        <NutritionSummaryNumbers>
          <div>
            <Number>260</Number>
            <Stat>Calories</Stat>
          </div>
          <div>
            <Number>55mg</Number>
            <Stat>Sodium</Stat>
          </div>
          <div>
            <Number>2g</Number>
            <Stat>Dietary Fiber</Stat>
          </div>
          <div>
            <Number>22g</Number>
            <Stat>Sugars</Stat>
          </div>
          <div>
            <Number>4g</Number>
            <Stat>Protein</Stat>
          </div>
        </NutritionSummaryNumbers>
        <span>underline break</span>
      </NutritionSummary>
      

      <table>
        
      </table>
    
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
const NutritionSummary = styled.div`
  display: flex;
`;
const NutritionSummaryNumbers = styled.div`

`;
const Number = styled.div`
  //font-family
  //font-size
`;
const Stat = styled.div`
  //font-family
  //font-size
`
export default NutritionFacts