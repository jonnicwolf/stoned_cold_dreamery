import React from 'react';
import styled from 'styled-components';
import Cloud from '../components/Cloud';
import {cloud, animation} from '../components/customizations';

const blue_dream = require( '../photo_assets/flavors/blue_dream.jpg' );
const birthday_cake = require( '../photo_assets/flavors/birthday_cake.jpg' );
const sherblato = require( '../photo_assets/flavors/sherblato.jpg' );

const Flavors = () => {
  const [
    motion_one,
    motion_two,
    motion_three,
    motion_four,
    motion_five,
    motion_six,
    motion_seven,
    motion_eight,
    motion_nine,
    motion_ten,
    motion_eleven,
    motion_twelve,
    motion_thirteen,
  ] = animation;

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
              <Cloud scale={0.5} animation={motion_thirteen} text={'CART+'} color={'black'} />
            </Button>
          </ImgInfo>
        </FrameInfo>
      </Frame>

      <Frame color={'#44c4f4'}>
        <Img src={blue_dream} alt="Blue Dream" />
        <FrameInfo>
          <ImgTitle>Blue Dream</ImgTitle>
          <ImgInfo>
            <Price>$15.99</Price>
            <Button>
              <Cloud scale={0.5} animation={motion_thirteen} text={'CART+'} color={'black'}/>
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
              <Cloud scale={0.5} animation={motion_thirteen} text={'CART+'} color={'black'}/>
            </Button>
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
`;
const FrameInfo = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  color: white;
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
  position: relative;
  z-index: 1;
  width: 50%;
  font-family: Modak;
  font-size: 2vw;
  line-height: 1.5vw;
  border: none;
  cursor: pointer;
  background-color: transparent;
`;
const SubTitle = styled.div`
  text-align: right;
  padding: 15px;
`;

export default Flavors;
