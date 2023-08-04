import React, { useState } from 'react';
import styled from 'styled-components';

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const [isVisible, setVisibility] = useState(false);

  function handleDropClick () {
    if (!isVisible) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  };
 
  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  return (
    <Container>
      <Price>
        $15.99 
        <br />
        <PerOz>
          ($0.99 / Fl Oz)
        </PerOz>
      </Price>
      <InStock><b>In Stock</b></InStock>
      <QuantityButton onClick={()=>handleDropClick()}>
        Qty: 
        <Select value={quantity} onChange={handleQuantityChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </Select>

      </QuantityButton>
      <AddToCart>Add To Cart</AddToCart>
      <BuyNow>Buy Now</BuyNow>

      <PaymentInfo>
        <Info>
          <InfoLeft>Payment</InfoLeft>
          <InfoRight>Secure transaction</InfoRight>
        </Info>
        <Info>
          <InfoLeft>Ships from</InfoLeft>
          <InfoRight style={{color: 'black'}}>Stoned Cold Dreamery LLC</InfoRight>
        </Info>
        <Info>
          <InfoLeft>Sold by</InfoLeft>
          <InfoRight>Stoned Cold Dreamery Inc</InfoRight>
        </Info>
        <Info>
          <InfoLeft>Returns</InfoLeft>
          <InfoRight>Eligible for Refund or Replacement if damaged or defective</InfoRight>
        </Info>
      </PaymentInfo>
    </Container>
  );
};

const CartButton = styled.button`
  border-radius: 15px;
  border: none;
  height: 3vh;
  width: 20vw;
`;
const AddToCart = styled(CartButton)`
  background-color: #69e0f0;
`;
const BuyNow = styled(CartButton)`
  background-color: #05b8ff;
`;
const Container = styled.div`
  align-items: center;
  border: 1px solid grey;
  border-radius: 10px; 
  display: flex;
  font-family: 'Chakra Petra', sans-serif;
  flex-direction: column;
  gap: 10px;
  height: 45vh;
  padding: 25px;
`;
const Info = styled.div`
  display: flex;
  gap: 45px;
`;
const InfoLeft = styled.div`
  width: 5vw;
`;
const InfoRight = styled.div`
  color: blue;
  text-wrap: wrap;
  width: 12vw;
`;
const InStock = styled.div`
  align-self: flex-start;
  color: green;
  font-family: 'Chakra Petra', sans-serif;
`;
const PaymentInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  gap: 10px;
`;
const PerOz = styled.span`
  font-size: 11px;
`;
const Price = styled.span`
  align-self: flex-start;
  font-family: 'Chakra Petra', sans-serif;
  font-size: 20px;
`;
const QuantityButton = styled.button`
  align-self: flex-start;
  border: none;
  box-shadow: 2px 1px 10px grey;
  border-radius: 9px;
`;
const Select = styled.select`
  border: none;
  background: none;
`;

export default Cart;
