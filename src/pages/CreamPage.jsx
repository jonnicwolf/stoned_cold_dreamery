import React, { useState } from 'react';
import styled from 'styled-components';
import NutritionSummary from '../components/NutritionSummary';
import NutritionFacts from '../components/NutritionFacts';
import Ingredients from '../components/Ingredients';
import AddItemToCart from '../components/AddItemToCart';
import AboutThisItem from '../components/AboutThisItem';

const Flavor = () => {
  const [flavor, setFlavor] = useState('birthday_cake');
  const { cream } = require('../data.json');

  function handleFlavor (flavor) {
    setFlavor(flavor);
  };

  return (
    <Container>
      <ImageContainer>
        <Img src={ cream[flavor].photo } alt={ cream[flavor].name } />
      </ImageContainer>

      <Info>
        <Segment2>
          <ProductTitle>
            {/* Gonna leave this here in case I change my mind later */}
            {/* <FlavorButtonContainer>
              <FlavorTitle>{cream[flavor].name}</FlavorTitle>
              <FlavorButton color={'#ecd484'} onClick={() => handleFlavor('birthday_cake')}/>
              <FlavorButton color={'#44c4f4'} onClick={() => handleFlavor('blue_dream')}/>
              <FlavorButton color={'#942c4c'} onClick={() => handleFlavor('sherblato')}/>
            </FlavorButtonContainer> */}
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
      </Info>

    </Container>
  );
};

const Info = styled.div`
  display: flex;
  gap: 3vh;
  justify-content: center;
  width: 80vw;
  @media only screen and (max-width: 1023px) {
    flex-direction: column;
  }
`;
const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  gap: 2vh;
  padding: 2vw;
  margin-top: 10vh;
  flex-direction: column;
`;
const Img = styled.img`
  border-radius: 30px;
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
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 45px;
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
  width: 80vw;
  height: 100%;
  border-radius: 30px;
  align-self: center;
`;
const Segment2 = styled(Segment)`
  order: 3;
  border-radius: 10px;
  width: 40vw;
  @media only screen and (max-width: 767px) {
    width: 100%;
    padding: 5px;
    border: none;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    padding: 5px;
    border: none;
    padding-bottom: 50px;
  }
  @media only screen and (min-width: 1024px) {
    padding: 15px;
  }
`;
const Segment3 = styled(Segment)`
  order: 2;
  width: 40vw;
  @media only screen and (max-width: 1024px) {
    width: 100vw;
    border: none;
  }
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
  @media screen and (max-width: 1024px) {
    padding: 10px;
  }
`;
// const FlavorButtonContainer = styled.div`
//   display: flex;
//   gap: 10px;
//   align-items: center;
// `;
// const FlavorButton = styled.button`
//   border-radius: 20px;
//   border: none;
//   height: 2vw;
//   width: 2vw;
//   background-color: ${props => props.color};
// `;
// const FlavorTitle = styled.h1`
//   font-family: Permanent  Marker, cursive;
//   padding: 0;
//   margin: 0;
// ;`

export default Flavor;
