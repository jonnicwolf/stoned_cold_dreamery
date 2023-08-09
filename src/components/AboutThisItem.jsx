import React, { useState } from 'react';
import styled from 'styled-components';

const AboutThisItem = () => {
  const [isVisible, setVisibility] = useState(false);

  function handleDropClick () {
    if (!isVisible) {
      setVisibility(true);
    } else setVisibility(false);
    
  };
 
  return (
    <Container>
      <Title>
        <TitleDropButton>
          <b>About This Item</b> 
          <DropButton onClick={()=>handleDropClick()}>
            {isVisible
              ? <>&#9650;</>
              : <>&#9660;</>
            }
          </DropButton>
        </TitleDropButton>
      </Title>
      { isVisible ?
        <List>
          <li>
            <p>No artificial ingredients, antibiotics or corn syrup</p>
          </li>
          <li>
            <p>Non-GMO</p>
          </li>
          <li>
            <p>One 1Pt container of organic French Vanilla ice cream with lemon cake chunks</p>
          </li>
          <li>
            <p>Recyclable packaging</p>
          </li>
          <li>
            <p>USDA organic</p>
          </li>
        </List>
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
const List = styled.ul`
  font-size: 14px;
  line-height: 0.9rem;
  margin: 0;
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

export default AboutThisItem;
