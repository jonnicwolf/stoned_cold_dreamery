import React from 'react';
import styled from 'styled-components';

const NutritionFacts = () => {
  return (
    <Container>
      <Title>
        <div><b>Nutrition Facts</b></div>
        <div>4 servings per container</div>
      </Title>
      <ServingSize>
        <div>Serving Size</div>
        <div>1Pt</div>
      </ServingSize>
      <UnderlineBreak />
      <Calories>
        <tbody>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <TdB style={{borderTop: '0', borderLeft: '0'}}>
              % Daily Value*
            </TdB>
          </tr>
          <tr>
            <CalorieBreakdown>
              <tr>
                <TdA><b>26%</b></TdA>
                <TdB><b>Total Fat</b> 17g</TdB>
              </tr>
              <tr>
                <TdA><b>45%</b></TdA>
                <TdB>Saturated fat 9g</TdB>
              </tr>
              <tr>
                <TdA><b></b></TdA>
                <TdB>        Trans Fat 0g</TdB>
              </tr>
              <tr>
                <TdA><b>17%</b></TdA>
                <TdB><b>Cholesterol</b> 50mg</TdB>
              </tr>
              <tr>
                <TdA><b>2%</b></TdA>
                <TdB><b>Sodium</b> 55mg</TdB>
              </tr>
              <tr>
                <TdA><b>8%</b></TdA>
                <TdB><b>Total Carbohydrate</b> 25g</TdB>
              </tr>
              <tr>
                <TdA><b>8%</b></TdA>
                <TdB><span></span>Dietary Fiber 2g</TdB>
              </tr>
              <tr>
                <TdA></TdA>
                <TdB>Sugars 22g</TdB>
              </tr>
              <tr>
                <TdA></TdA>
                <TdB><b>Protein</b> 4g</TdB>
              </tr>
              <tr>
                <TdA>10%</TdA>
                <TdB>Vitamin A</TdB>
              </tr>
              <tr>
                <TdA>0%</TdA>
                <TdB>Vitamin C</TdB>
              </tr>
              <tr>
                <TdA>10%</TdA>
                <TdB>Calcium</TdB>
              </tr>
              <tr>
                <TdA style={{borderBottom: '1px solid grey'}}>6%</TdA>
                <TdB style={{borderBottom: '1px solid grey'}}>Iron</TdB>
              </tr>
            </CalorieBreakdown>
          </tr>
        </tbody>
      </Calories>

      <Disclaimer>
        *The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
      </Disclaimer>

    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Chakra Petra', sans-serif;
  margin-top: 1vh;
`;
const Disclaimer = styled.div`

`;
const UnderlineBreak = styled.span`
  padding-top: .05vh;
  border-bottom: 1px solid black;
  width: 100%;
`;
const ServingSize = styled.div`
  // border: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 3px;
  padding-bottom: 0;
`;
const Calories = styled.table`
`;
const CalorieBreakdown = styled.table`
  border-spacing: 0;
`;
const TdA = styled.td`
  border: 1px solid grey;
  border-left: 0;
  border-bottom: 0;
`;
const TdB = styled.td`
  border: 1px solid grey;
  border-right: 0;
  border-bottom: 0;
  width: 100%
`;
const Title = styled.div`
  padding: 3px;
`;

export default NutritionFacts;
