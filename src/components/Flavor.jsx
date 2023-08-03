import React from 'react';
import styled from 'styled-components';
import { birthday_cake } from '../photo_assets/flavours';

const Flavor = () => {
  return (
    <Container>
      <ImgContainer>
        <Img src={birthday_cake} />
      </ImgContainer>
      <ImgDiv>
        <ProductTitle>
          <h1>Birthday Cake</h1>
          <div>French vanilla ice cream and lemon cake chucks infused with our in house grown Birthday Cake cannabis</div>
        </ProductTitle>
        
        <div>nutrition facts <button>&#9660;</button></div>
        
        <div>ingredients <button>&#9660;</button></div>
        <div>nutrition facts <button>&#9660;</button></div>
        <br />
        <div>
        about this item <button>&#9660;</button>
        </div>
      </ImgDiv>
      <ImgDiv>
        add to cart
      </ImgDiv>
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 2vw;
`;
const ImgContainer = styled.div`
  height: 50vh;
  width: 50vw;
  overflow: hidden;
`;
const Img = styled.img`
  border: 1px solid red;
  height: 80vh;
  width: 60vw;
  transform: translate(-125px, -180px);
`;
const ImgDiv = styled.div`
  border: 1px solid red;
  height: 50vh;
  width: 30vw;
`;
const ProductTitle = styled.div`
  border: 1px solid red;
`
export default Flavor;