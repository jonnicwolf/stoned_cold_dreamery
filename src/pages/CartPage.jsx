import React from 'react';
import styled from 'styled-components';
import CartList from '../components/CartList';
import CheckoutForm from '../components/CheckoutForm';

const CartPage = () => {
  return (
    <Container>
      <CartList />
      <CheckoutForm />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 4vw;
  margin-top: 10vh;
  @media (min-width: 320px) and (max-width: 425px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default CartPage;
