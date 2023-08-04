import React, { useState } from 'react';
import styled from 'styled-components';

const NutritionFacts = () => {
  const [isVisible, setVisibility] = useState(false);

  function handleDropClick () {
    if (!isVisible) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  };

  return (
    <Container>
      <Title>
        <TitleDropButton>
          <b>Nutrition Facts</b> 
          <DropButton onClick={()=>handleDropClick()}>&#9660;</DropButton>
        </TitleDropButton>
      </Title>

      { isVisible ?
      <>
        <ServingSize>
          <div style={{width: '100%'}}>4 servings per container</div>
          <div>Serving Size</div>
          <div>1Pt</div>
        </ServingSize>
        <UnderlineBreak />
        <Calories>
          <CalorieTitle>
            <div><b>Calories</b></div>
            <div><b>260</b></div>
            <UnderlineBreak />
          </CalorieTitle>
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
                <tbody>
                  <tr>
                    <TdA><b>26%</b></TdA>
                    <TdB><b>Total Fat</b> 17g</TdB>
                  </tr>
                  <tr>
                    <TdA><b>45%</b></TdA>
                    <TdB style={{paddingLeft: '30px'}}>Saturated fat 9g</TdB>
                  </tr>
                  <tr>
                    <TdA><b></b></TdA>
                    <TdB style={{paddingLeft: '30px'}}>Trans Fat 0g</TdB>
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
                    <TdB style={{paddingLeft: '30px'}}>Dietary Fiber 2g</TdB>
                  </tr>
                  <tr>
                    <TdA></TdA>
                    <TdB style={{paddingLeft: '30px'}}>Sugars 22g</TdB>
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
                </tbody>
              </CalorieBreakdown>
            </tr>
          </tbody>
          <Disclaimer>
            *The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
          </Disclaimer>
        </Calories>
      </>
      : null
      }
      <UnderlineBreak />
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
  padding-top: 5px;
  font-size: 12px;
`;
const DropButton = styled.button`
  background: none;
  border: none;
`;
const ServingSize = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 3px;
  padding-bottom: 0;
`;
const Calories = styled.table`
`;
const CalorieTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 5px;
`;
const CalorieBreakdown = styled.table`
  border-spacing: 0;
`;
const TdA = styled.td`
  border: 1px solid grey;
  border-left: 0;
  border-bottom: 0;
  font-size: 14px;
`;
const TdB = styled.td`
  border: 1px solid grey;
  border-right: 0;
  border-bottom: 0;
  font-size: 14px;
  width: 100%
`;
const Title = styled.div`
  padding: 3px;
`;
const TitleDropButton = styled.div`
  display: flex;
  justify-content: space-between;
`;
const UnderlineBreak = styled.span`
  padding-top: .05vh;
  border-bottom: 1px solid black;
  width: 100%;
`;

export default NutritionFacts;
