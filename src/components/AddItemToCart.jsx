import React, { useState } from 'react';
import styled from 'styled-components';
import { useCart } from './CartProvider';
import { Link } from 'react-router-dom';

const products = require('../data.json');

const AddToCart = ({ item, itemType }) => {
  const [quantity, setQuantity] = useState(1);
  const { addItemToCart } = useCart();
  const handleQuantityChange = (event) => { setQuantity(parseInt(event.target.value, 10)) };

  const matchingItem = products[itemType][item];
  const isInStock = products[itemType][item].quantity > 0;

  const handleAddToCart = (quantity, matchingItem) => {
    for (let i=0; i < quantity; i++) { addItemToCart(matchingItem) };
    return quantity;
  };
  console.log(matchingItem, 'matching item')

  return (
    <Container>
      <Price>
        <Name>{matchingItem.name}</Name>
        <div>
          <DollarSign>$</DollarSign>
          <b>{matchingItem.price}</b>
        </div>

        <PerOz>
          ${(matchingItem.price/matchingItem.size).toFixed(2)} / Oz
        </PerOz>
      </Price>

      <InStock>
        { isInStock ? <b>In Stock</b> : <b>Out of Stock</b> }
      </InStock>

      <QuantityButton>
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

      <CartButtonContainer>
        <AddToCartButton onClick={()=> handleAddToCart(quantity, matchingItem)}> Add To Cart </AddToCartButton>

        <ViewCartLink to='/cart'>
          <ViewCartButton> View Cart </ViewCartButton>
        </ViewCartLink>
      </CartButtonContainer>

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
  width: 100%;
`;
const CartButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
  width: 100%;
`;
const AddToCartButton = styled(CartButton)`
  background-color: #69e0f0;
  cursor: pointer;
  font-family: 'Chakra Petch', sans-serif;
  &:hover {
    box-shadow: 2px 1px 10px #69e0f0;
    font-weight: bold;
    opacity: 0.8;
    transition: opacity 0.1s ease-in;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 1rem;
  }
`;
const ViewCartButton = styled(CartButton)`
  background-color: #05b8ff;
  cursor: pointer;
  font-family: 'Chakra Petch', sans-serif;
  &:hover {
    box-shadow: 2px 1px 10px #05b8ff;
    font-weight: bold;
    opacity: 0.8;
    transition: opacity 0.1s ease-in;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 1rem;
  }
`;
const ViewCartLink = styled(Link)`
  width: 100%;
`;
const DollarSign = styled.span`
  font-size: 11px;
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
   font-size: 20px;
  }
`;
const Container = styled.div`
  align-items: center;
  border-radius: 10px;
  display: flex;
  font-family: 'Chakra Petch', sans-serif;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  width: 80%;
`;
const Info = styled.div`
  display: flex;
  gap: 45px;
  // border: 1px solid red;
  width: 80%;
  justify-content: space-between;
  @media only screen and (max-width: 1023px) {
    // justify-content: space-around;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    // justify-content: space-evenly;
    font-size: 15px;
  }
`;
const InfoLeft = styled.div`
  width: 5vw;
  // border: 1px solid green;
  @media only screen and (max-width: 767px) {
    width: 20vw;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
   text-wrap: nowrap;
  }
`;
const InfoRight = styled.div`
  color: blue;
  // border: 1px solid blue;
  text-wrap: wrap;
  width: 12vw;
  @media only screen and (max-width: 767px) {
    text-wrap: none;
    width: 50vw;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 30%;
  }
`;
const InStock = styled.div`
  align-self: flex-start;
  color: green;
  font-family: 'Chakra Petch', sans-serif;
`;
const Name = styled.div`
  display: none;
  font-family: Permanent Marker;
  font-size: 32px;
@media (min-width: 320px) and (max-width: 425px) {
  display: block;
}
`;
const PaymentInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  gap: 10px;
  width: 100%;
  align-items: center;
`;
const PerOz = styled.span`
  font-size: 11px;
`;
const Price = styled.span`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  font-family: 'Chakra Petch', sans-serif;
  font-size: 30px;
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 50px;
  }
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

export default AddToCart;
