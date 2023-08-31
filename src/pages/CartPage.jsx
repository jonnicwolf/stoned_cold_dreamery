import React from 'react';
import styled from 'styled-components';
import Cart from '../components/Cart';

const CartPage = () => {
  return (
    <Container>
      <Cart />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20vh;
`;

export default CartPage;