import React from 'react';
import styled from 'styled-components';
import { useCart } from './CartProvider';

const ShoppingCart = () => {
  const { cartItems, cartTotal, removeItemFromCart, clearCart } = useCart();

  return (
    <Container>
      <Header>Shopping Cart</Header>
      <div>
        {cartItems.map((item) => (
          <Item key={item.id}>
            <ItemPhoto src={item.photo} alt="" />
            <ItemInfo>
              <span>{item.name}</span>
              <span>${item.price}</span>
            </ItemInfo>
            <XButton onClick={()=> removeItemFromCart(item.id)}>❌</XButton>
          </Item>
        ))}
      </div>
      <Total>
        { cartItems.length !== 0
            ? <p>Subtotal (${cartItems.length} item/s): ${cartTotal}</p>
            : <Empty>Your cart is empty</Empty>
        }
      </Total>
      {cartItems.length > 0
        ? <ClearButton onClick={clearCart}>Clear Cart</ClearButton>
        : null
      }
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  justify-content: center;
  border: 1px solid grey;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  font-family: 'Chakra Petch', sans-serif;
  gap: 5vh;
  padding: 20px;
  width: 50vw;
`;
const ClearButton = styled.button`
  background: none;
  border: none;
  border-radius: 55px;
  box-shadow: 2px 1px 10px grey;
  font-family: 'Chakra Petch', sans-serif;
  font-size: 20px;
  margin-top: 1vh;
  width: 12vw;

  &:hover {
    box-shadow: 2px 1px 10px red;
    font-weight: bold;
    opacity: 0.8;
    transition: opacity 0.1s ease-in;
  }
`;
const Empty = styled.p`
  font-size: 50px;
`;
const Header = styled.h3`
  margin: 0;
  font-size: 35px;
`;
const Item = styled.div`
  display: flex;
  margin-bottom: 1vh;
  justify-content: space-between;
  width: 50vw;
`;
const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Permanent Marker;
  font-size: 40px;
`;
const ItemPhoto = styled.img`
  height: 15vh;
  width: 15vw;
`;
const Total = styled.div`
`;
const XButton = styled.button`
  background: none;
  border: none;
  padding: 2vw;
`;

export default ShoppingCart;