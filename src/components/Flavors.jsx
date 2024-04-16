import React from 'react';
import styled from 'styled-components';

const blue_dream = require( '../photo_assets/flavors/blue_dream.jpg' );
const birthday_cake = require( '../photo_assets/flavors/birthday_cake.jpg' );
const sherblato = require( '../photo_assets/flavors/sherblato.jpg' );



const Flavors = () => {
  return (
    <Container>
      <Title color={'#c5e7fa'}>A collection of the Stoned Cold Dreamery's finest flavors</Title>

      <Frame color={'#ecd484'}>
        <Img src={birthday_cake} alt='Birthday Cake'/>
        <div>Our collection of house flavors</div>
      </Frame>

      <Frame color={'#44c4f4'}>
        <Img src={blue_dream} alt="Blue Dream" />
        <div>Our collection of house flavors</div>
      </Frame>

      <Frame color={'#942c4c'}>
        <Img src={sherblato} alt="Sherblato" />
        <div>Our collection of house flavors</div>
      </Frame>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 20vh;
  border: 1px solid red;
  display: flex;
  width: 100vw;
  height: 30vw;
`;
const Frame = styled.div`
  width: 25%;
  max-width: 25%;
  height: 100%
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  background-color: ${props => props.color}
`;  
const Title = styled(Frame)`
  font-family: 'Bebas Neue';
  font-size: 3vw;
  letter-spacing: 5px;
  text-align: center;
  height: 100%;
`;
const Img = styled.img`
  object-fit: cover;
  height: 70%;
`;

export default Flavors;
