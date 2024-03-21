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
  margin-top: 15vh;
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
    padding: 5vw;
  }
  @media only screen and (min-width: 1024px) {
    padding: 5vw;
  }
`;

export default CartPage;
