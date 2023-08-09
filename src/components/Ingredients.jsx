import React, { useState } from 'react';
import styled from 'styled-components';

const Ingredients = () => {
  const [dropStatus, setDropStatus] = useState('none');
  const [isVisible, setVisibility] = useState(false);

  function handleDropClick () {
    if (dropStatus === 'none') {
      setDropStatus('block');
      setVisibility(true);
    } else {
      setDropStatus('none');
      setVisibility(false);
    }
  };
  return (
    <Container>
      <Title>
        <TitleDropButton>
          <b>Ingredients</b> 
          <DropButton onClick={()=>handleDropClick()}>
            {isVisible
              ? <>&#9650;</>
              : <>&#9660;</>
            }
          </DropButton>
        </TitleDropButton>
      </Title>
      {isVisible ?
        <IngredientsList>
          Cream, Sugar, Skim Milk, Alkalized Cocoa, Coconut Oil, Cinnamon, Almond Extract, Guar Gum, Locust Bean Gum, Non-gmo Soy Lecithin, Vanilla Extract, Flavors.
        </IngredientsList>
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
const DropButton = styled.button`
  background: none;
  border: none;
`;
const IngredientsList = styled.div`
  font-family: 'Chakra Petra', sans-serif;
  font-size: 12px;
  padding: 3px;
`;
const Title = styled.div`
  padding: 3px;
`;
const TitleDropButton = styled.div`
  display: flex;
  justify-content: space-between;
`;
const UnderlineBreak = styled.span`
  padding-top: 1vh;
  border-bottom: 1px solid black;
  width: 100%;
`;
export default Ingredients;
