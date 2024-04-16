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
        <FrameInfo>
          <ImgTitle>Birthday Cake</ImgTitle>
          <ImgInfo>
            <Price>$15.99</Price>
            <Button>CART+</Button>
          </ImgInfo>
        </FrameInfo>
      </Frame>

      <Frame color={'#44c4f4'}>
        <Img src={blue_dream} alt="Blue Dream" />
        <FrameInfo>
          <ImgTitle>Blue Dream</ImgTitle>
          <ImgInfo>
            <Price>$15.99</Price>
            <Button>CART+</Button>
          </ImgInfo>
        </FrameInfo>
      </Frame>

      <Frame color={'#942c4c'}>
        <Img src={sherblato} alt="Sherblato" />
        <FrameInfo>
          <ImgTitle>Sherblato</ImgTitle>
          <ImgInfo>
            <Price>$15.99</Price>
            <Button>CART+</Button>
          </ImgInfo>
        </FrameInfo>
      </Frame>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 20vh;
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
  background-color: ${props => props.color}
`;
const Title = styled(Frame)`
  font-family: 'Bebas Neue';
  font-size: 3vw;
  letter-spacing: 5px;
  height: 100%;
`;
const Img = styled.img`
  object-fit: cover;
  height: 70%;
`;
const FrameInfo = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  color: #faf1e6;
`;
const ImgTitle = styled.div`
  padding-left: 15px;
  font-family: Permanent Marker;
  font-weight: bold;
  font-size: 2.5vw;
`;
const ImgInfo = styled.div`
  display: flex;
  height: 100%;
`;
const Price = styled.p`
  height: 100%;
  width: 50%;
  font-family: 'Chakra Petch';
  font-weight: bold;
  font-size: 2vw;
  padding-left: 1vw;
`;
const Button = styled.button`
  width: 50%;
  font-family: Modak;
  font-size: 2vw;
  line-height: 1.5vw;
`;



export default Flavors;
