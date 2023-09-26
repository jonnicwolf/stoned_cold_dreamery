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
  }

  return (
    <Container>
      <Price>
        <div>
          <span style={{fontSize: '11px'}}>$</span>
          <b>{matchingItem.price}</b>
        </div>

        <PerOz>
          [$0.99 / Fl Oz]
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

      {/* <AddToCartButton onClick={()=> addItemToCart(matchingItem)}>Add To Cart</AddToCartButton> */}
      {/* <AddToCartButton onClick={()=> handleAddToCart(quantity, matchingItem)}>Add To Cart</AddToCartButton> */}
      <AddToCartButton onClick={()=> handleAddToCart(quantity, matchingItem)}>Add To Cart</AddToCartButton>
      <Link to='/cart'>
        <ViewCartButton> View Cart </ViewCartButton>
      </Link>

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
`;
const Container = styled.div`
  align-items: center;
  border: 1px solid grey;
  border-radius: 10px;
  display: flex;
  font-family: 'Chakra Petch', sans-serif;
  flex-direction: column;
  gap: 10px;
  height: 100%;
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
  font-family: 'Chakra Petch', sans-serif;
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
  display: flex;
  flex-direction: column;
  font-family: 'Chakra Petch', sans-serif;
  font-size: 30px;
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
