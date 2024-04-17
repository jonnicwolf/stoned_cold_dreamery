import React from 'react';
import styled from 'styled-components';

const blue_dream = require( '../photo_assets/flavors/blue_dream.jpg' );
const birthday_cake = require( '../photo_assets/flavors/birthday_cake.jpg' );
const sherblato = require( '../photo_assets/flavors/sherblato.jpg' );
const cloud = require('../photo_assets/cloud/—Pngtree—white cartoon clouds clipart_5568114.png');

const Flavors = () => {
  return (
    <Container>
      <TitleContainer color={'#c5e7fa'}>
        <Title>FLAVORS</Title>
        <SubTitle>The <br />Stoned Cold Dreamery's <br /> finest treats</SubTitle>
      </TitleContainer>

      <Frame color={'#ecd484'}>

        <Img src={birthday_cake} alt='Birthday Cake'/>
        <FrameInfo>

          <ImgTitle>Birthday Cake</ImgTitle>
          <ImgInfo>
              <Price>$15.99</Price>
              <Button>
                <Cloud src={cloud} alt="" />
                <CartPlus>CART+</CartPlus>
              </Button>
          </ImgInfo>

        </FrameInfo>

      </Frame>

      {/* <Frame color={'#44c4f4'}>
        <Img src={blue_dream} alt="Blue Dream" />
        <FrameInfo>
          <ImgTitle>Blue Dream</ImgTitle>
          <ImgInfo>
            <Price>$15.99</Price>
            <Button>
              <Cloud src={cloud} alt="" />
              <CartPlus>CART+</CartPlus>
            </Button>
          </ImgInfo>
        </FrameInfo>
      </Frame>

      <Frame color={'#942c4c'}>
        <Img src={sherblato} alt="Sherblato" />
        <FrameInfo>
          <ImgTitle>Sherblato</ImgTitle>
          <ImgInfo>
            <Price>$15.99</Price>
            <Button>
              <Cloud src={cloud} alt="" />
              <CartPlus>CART+</CartPlus>
            </Button>
          </ImgInfo>
        </FrameInfo>
      </Frame> */}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 20vh;
  display: flex;
  width: 100vw;
  height: 30vw;
  @media screen and (max-width: 1064px) {
    flex-wrap: wrap;
    border: 1px solid red;
    height: 60vh;
  }
`;
const Frame = styled.div`
  width: 25%;
  // max-width: 25%;
  height: 100%
  display: flex;
  flex-direction: column;
  background-color: ${props => props.color};
  @media screen and (max-width: 1064px) {
    width: 50%;
    height: 100%;
  }
`;
const FrameInfo = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  color: white;
  @media screen and (max-width: 1064px) {
    height: 35%;
    border: 1px solid red;
  }
`;
const TitleContainer = styled(Frame)`
  font-family: 'Bebas Neue';
  font-size: 3vw;
  letter-spacing: 5px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Title = styled.div`
  font-size: 5vw;
  padding: 15px;
  font-family: Modak

`;
const Img = styled.img`
  object-fit: cover;
  height: 70%;
  position: relative;
  @media screen and (max-width: 1064px) {
    height: 65%;
  }
`;
const ImgTitle = styled.div`
  padding-left: 15px;
  font-family: Permanent Marker;
  font-weight: bold;
  font-size: 2.5vw;
  z-index: 1;
  @media screen and (max-width: 1064px) {
    font-size: 5vw;
  }
`;
const ImgInfo = styled.div`
  display: flex;
  height: 100%;
  overflow: hidden;
  // border: 1px solid red;
`;
const Price = styled.p`
  height: 100%;
  width: 50%;
  font-family: 'Chakra Petch';
  font-weight: bold;
  font-size: 2vw;
  padding-left: 1vw;
  transform: translateY(-10px);
  @media screen and (max-width: 1064px) {
    font-size: 5vw;
  }
`;
const Button = styled.button`
  display: flex;
  position: relative;
  z-index: 1;
  width: 50%;
  font-family: Modak;
  font-size: 2vw;
  line-height: 1.5vw;
  border: none;
  cursor: pointer;
  background-color: transparent;
  text-align: center;
`;
const SubTitle = styled.div`
  text-align: right;
  padding: 15px;
`;
const Cloud = styled.img`
  height: 150%;
  width: 100%;
  transform: translateY(-1vh);
`;
const CartPlus = styled.span`
  position: absolute;
  top: 42%;
  left: 25%;
  font-size: 2w;
  @media screen and (max-width: 599px) {
    top: 25%
  }
  @media screen and (min-width: 600px) and (max-width: 1064px) {
    top: 30%;
  }
`

export default Flavors;
