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
        $15.99 ($0.99 / Fl Oz)
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
      
      {/* qty button
      <button>add to cart </button>
      <button>buy now</button>
      <div>Payment Secure transaction in blue</div>
      <div>Ships from Stoned Cold Dreamery LLC</div>
      <div>Sold by Stoned Cold Dreamery Inc</div>
      <div>Returns | Eligible for Refund or Replacement if damaged or defective</div> */}
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  border: 1px solid grey;
  border-radius: 10px; 
  display: flex;
  flex-direction: column;
  height: 80vh;
`;
const InStock = styled.div`
  color: green;
  font-family: 'Chakra Petra', sans-serif;
`;
const PerOz = styled.div`
  font-size: 10px;
`;
const Price = styled.span`
  font-family: 'Chakra Petra', sans-serif;
  font-size: 20px;
`;
const QuantityButton = styled.button`
  border: 1px solid red;
  box-shadow: 2px 1px 10px grey;
  border-radius: 9px;
`;
const Select = styled.select`
  border: none;
  background: none;
`;

export default Cart;
