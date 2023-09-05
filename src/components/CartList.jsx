import React from 'react';
import styled from 'styled-components';
import { useCart } from './CartProvider';

const CartList = () => {
  const { cartItems, total, removeItemFromCart, clearCart } = useCart();
  const NYCTax = 8.875;
  return (
    <Container>
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
      <div>
        { cartItems.length !== 0
            ? <Total>
                <div>Subtotal ({cartItems.length} item/s): ${total}</div>
                <div>Tax ${(total/100*NYCTax).toFixed(2)}</div>
                <div>Total ${(total/100 * NYCTax + total).toFixed(2)}</div>
              </Total>
            : <Empty>Your cart is empty</Empty>
        }
      </div>
      {cartItems.length > 0
        ? <ClearButton onClick={clearCart}>Clear Cart</ClearButton>
        : null
      }
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  background-color: rgba(122, 233, 255, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  font-family: 'Chakra Petch', sans-serif;
  gap: 2vh;
  justify-content: center;
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
  justify-content: space-evenly;
  width: 50vw;
`;
const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Permanent Marker;
  font-size: 30px;
`;
const ItemPhoto = styled.img`
  height: 15vh;
  width: 15vw;
`;
const Total = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  gap: 0.5vh;
`;
const XButton = styled.button`
  background: none;
  border: none;
  border-radius: 50px;
  padding: 2vw;

  &:hover {
    box-shadow: 2px 1px 10px red;
    font-weight: bold;
    opacity: 0.8;
    transition: opacity 0.1s ease-in;
  }
`;

export default CartList;
