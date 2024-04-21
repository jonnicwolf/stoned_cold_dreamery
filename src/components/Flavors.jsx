import React, { useState } from 'react';
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
  const [hoveredFrame, setHoveredFrame] = useState(null);

  return (
    <Container>
      <TitleContainer color={'#fffff6'}>
        <Title>FLAVORS</Title>
        <SubTitle>The <br />Stoned Cold Dreamery's <br /> finest treats</SubTitle>
      </TitleContainer>

      <Frame
        color={'#ecd484'}
        onMouseEnter={()=>setHoveredFrame('birthday_cake')}
        onMouseLeave={()=>setHoveredFrame(null)}>
        <Link to='/cream'>
          <Img src={birthday_cake} alt='Birthday Cake'/>
        </Link>
        <FrameInfo>
          <ImgTitle>Birthday Cake</ImgTitle>
          <ImgInfo>
              <Price>$15.99</Price>
              <Button onClick={()=> addItemToCart(products.cream.birthday_cake)}>
                <Cloud src={cloud} alt="" hover={hoveredFrame === 'birthday_cake'}/>
                <CartPlus hover={hoveredFrame === 'birthday_cake'}>CART+</CartPlus>
              </Button>
          </ImgInfo>
        </FrameInfo>
      </Frame>

      <Frame
        color={'#44c4f4'}
        onMouseEnter={()=>setHoveredFrame('blue_dream')}
        onMouseLeave={()=>setHoveredFrame(null)}>
        <Link to='/cream'>
          <Img src={blue_dream} alt="Blue Dream" />
        </Link>
        <FrameInfo>
          <ImgTitle>Blue Dream</ImgTitle>
          <ImgInfo>
            <Price>$15.99</Price>
            <Button onClick={()=> addItemToCart(products.cream.blue_dream)}>
              <Cloud src={cloud} alt="" hover={hoveredFrame === 'blue_dream'}/>
              <CartPlus hover={hoveredFrame === 'blue_dream'}>CART+</CartPlus>
            </Button>
          </ImgInfo>
        </FrameInfo>
      </Frame>

      <Frame
        color={'#942c4c'}
        onMouseEnter={()=>setHoveredFrame('sherblato')}
        onMouseLeave={()=>setHoveredFrame(null)}>
        <Link to='/cream'>
          <Img src={sherblato} alt="Sherblato" />
        </Link>
        <FrameInfo>
          <ImgTitle>Sherblato</ImgTitle>
          <ImgInfo>
            <Price>$15.99</Price>
            <Button onClick={()=> addItemToCart(products.cream.sherblato)}>
              <Cloud src={cloud} alt="" hover={hoveredFrame === 'sherblato'}/>
              <CartPlus hover={hoveredFrame === 'sherblato'}>CART+</CartPlus>
            </Button>
          </ImgInfo>
        </FrameInfo>
      </Frame>
    </Container>
  );
};

const Container = styled.div`
  border-bottom: 1px solid #ebbf9e;
  display: flex;
  width: 100vw;
  height: 30vw;
  @media screen and (max-width: 690px) {
    justify-content: center;
    flex-wrap: wrap;
    width: 102%;
    height: 120vw;
  }
  @media screen and (min-width: 691px) and (max-width: 1064px) {
    justify-content: center;
    flex-wrap: wrap;
    height: 90vh;
  }
`;
const Frame = styled.div`
  width: 25%;
  height: 100%
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ebbf9e;
  background-color: ${props => props.color};
  @media screen and (max-width: 1064px) {
    height: 50%;
    width: 49.7vw;
    border: 1px solid #ebbf9e;
  }
`;
const FrameInfo = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  color: #d18755;
  @media screen and (max-width: 700px) {
    height: 20%;
  }
`;
const TitleContainer = styled(Frame)`
  font-family: 'Bebas Neue';
  font-size: 3vw;
  letter-spacing: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Title = styled.div`
  font-size: 5vw;
  padding: 15px;
  font-family: Modak;
  color: #104e65;
  @media screen and (max-width: 1064px) {
    font-size: 7vw;
  }
`;
const Img = styled.img`
  object-fit: cover;
  height: 70%;
  width: 100%;
  max-width: 100%;
  position: relative;
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
  height: 70%;
  overflow: hidden;
  align-items: center;
`;
const Price = styled.p`
  display: flex;
  height: 100%;
  align-items: center;
  height: 100%;
  width: 50%;
  font-family: 'Chakra Petch';
  font-weight: bold;
  font-size: 2vw;
  padding-left: 1vw;
  @media screen and (max-width: 1064px) {
    font-size: 4vw;
  }
`;
const Button = styled.button`
  display: flex;
  align-items: center;
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
  height: 100%;
`;
const SubTitle = styled.div`
  text-align: right;
  padding: 15px;
  color: #104e65;
  @media screen and (max-width: 1064px) {
    font-size: 5vw;
  }
`;
const Cloud = styled.img`
  height: 150%;
  width: 100%;
  // transform: translateY(-2vw);
  opacity: ${props => props.hover ? 1 : 0};
  transition: opacity 0.1s linear;
`;
const CartPlus = styled.span`
  position: absolute;
  top: 42%;
  left: 25%;
  font-size: 2vw;
  color: ${props => props.hover ? '#104e65' : 'white'};
  @media screen and (max-width: 1064px) {
    font-size: 5vw;
    top: 50%;
    left: 35%;
  }
`;

export default Flavors;
