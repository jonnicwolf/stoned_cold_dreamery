import React from 'react';
import styled from 'styled-components';
import CartList from './CartList';
import CheckoutForm from './CheckoutForm';

const ShoppingCart = () => {
  return (
    <Container>
      <CartList />
      <CheckoutForm />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 5vw;
`;

export default ShoppingCart;
