import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useCart } from './CartProvider';

const blue_dream = require( '../photo_assets/flavors/blue_dream.jpg' );
const birthday_cake = require( '../photo_assets/flavors/birthday_cake.jpg' );
const sherblato = require( '../photo_assets/flavors/sherblato.jpg' );
const cloud = require('../photo_assets/cloud/—Pngtree—white cartoon clouds clipart_5568114.png');
const products = require('../data.json');

const Flavors = () => {
  const { addItemToCart } = useCart();
 
  return (
    <Container>
      <TitleContainer color={'#c5e7fa'}>
        <Title>FLAVORS</Title>
        <SubTitle>The <br />Stoned Cold Dreamery's <br /> finest treats</SubTitle>
      </TitleContainer>

      <Frame color={'#ecd484'}>
        <Link to='/cream'>
          <Img src={birthday_cake} alt='Birthday Cake'/>
        </Link>
        <FrameInfo>
          <ImgTitle>Birthday Cake</ImgTitle>
          <ImgInfo>
              <Price>$15.99</Price>
              <Button onClick={()=> addItemToCart(products.cream.birthday_cake)}>
                <Cloud src={cloud} alt="" />
                <CartPlus>CART+</CartPlus>
              </Button>
          </ImgInfo>
        </FrameInfo>
      </Frame>

      <Frame color={'#44c4f4'}>
        <Link to='/cream'>
          <Img src={blue_dream} alt="Blue Dream" />
        </Link>
        <FrameInfo>
          <ImgTitle>Blue Dream</ImgTitle>
          <ImgInfo>
            <Price>$15.99</Price>
            <Button onClick={()=> addItemToCart(products.cream.blue_dream)}>
              <Cloud src={cloud} alt="" />
              <CartPlus>CART+</CartPlus>
            </Button>
          </ImgInfo>
        </FrameInfo>
      </Frame>

      <Frame color={'#942c4c'}>
        <Link to='/cream'>
          <Img src={sherblato} alt="Sherblato" />
        </Link>
        <FrameInfo>
          <ImgTitle>Sherblato</ImgTitle>
          <ImgInfo>
            <Price>$15.99</Price>
            <Button onClick={()=> addItemToCart(products.cream.sherblato)}>
              <Cloud src={cloud} alt="" />
              <CartPlus>CART+</CartPlus>
            </Button>
          </ImgInfo>
        </FrameInfo>
      </Frame>
    </Container>
  );
};

const Container = styled.div`
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
  overflow: hidden;
  background-color: ${props => props.color};
`;
const FrameInfo = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  color: white;
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
  font-family: Modak;
  @media screen and (max-width: 1064px) {
    font-size: 2vw;
  }
`;
const Img = styled.img`
  object-fit: cover;
  height: 70%;
  position: relative;
`;
const ImgTitle = styled.div`
  padding-left: 15px;
  font-family: Permanent Marker;
  font-weight: bold;
  font-size: 2.5vw;
  z-index: 1;
`;
const ImgInfo = styled.div`
  display: flex;
  height: 100%;
  overflow: hidden; red;
`;
const Price = styled.p`
  height: 100%;
  width: 50%;
  font-family: 'Chakra Petch';
  font-weight: bold;
  font-size: 2vw;
  padding-left: 1vw;
  transform: translateY(-10px);
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
  @media screen and (max-width: 1064px) {
    font-size: 2vw;
  }
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
  font-size: 2vw;
  @media screen and (max-width: 1064px) {
    transform: translateY(-80%);
  }
`;

export default Flavors;
