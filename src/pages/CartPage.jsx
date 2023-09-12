import React from 'react';
import styled from 'styled-components';
import ShoppingCart from '../components/ShoppingCart';

const CartPage = () => {
  return (
    <Container>
      <ShoppingCart />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 18vh;
`;

export default CartPage;
