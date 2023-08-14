import React from 'react';
import styled from 'styled-components';
import { useCart } from './CartProvider';

const ShoppingCart = () => {
  const { cartItems, cartTotal, removeItemFromCart, clearCart } = useCart();
  // const { cartTotal, removeItemFromCart, clearCart } = useCart();

  // const cartItems = [
  //   { id:'mug', name: 'Birthday Cake', price: 15.99 },
  //   { id:'mug1', name: 'Sherblato', price: 15.99 },
  // ]

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <h2>Shopping Cart</h2>
        {cartItems.map((item) => (
          <Item key={item.id}>
            <ItemInfo>
              <span>{item.name}</span>
              <span>${item.price}</span>
            </ItemInfo>
            <button onClick={()=>removeItemFromCart(item.id)}>❌</button>
          </Item>
        ))}
        <p>Total: ${cartTotal}</p>
        <button onClick={clearCart}>Clear Cart</button>
      </Container>
    </>
  );
};

const Container = styled.div`
  border: 1px solid grey;
  border-radius: 15px;
  padding: 40px;
  width: 50vw;
`;
const Item = styled.div`
  border: 1px solid green;
  display: flex;
  margin-bottom: 1vh;
  justify-content: space-between;
  width: 50%;
`;
const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ShoppingCart;
