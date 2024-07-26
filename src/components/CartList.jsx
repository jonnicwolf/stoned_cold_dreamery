import React from 'react';
import styled from 'styled-components';
import { useCart } from './CartProvider';

const CartList = () => {
  const { cartItems, total, removeItemFromCart, clearCart } = useCart();
  const NYCTax = 8.875;
  return (
    <Container>
      <CartItems>
        { cartItems.map((item) => (
          <Item key={item.id}>
            <ItemPhoto src={item.photo} alt="" />
            <ItemInfo>
              <span>{item.name}</span>
              <span>${item.price}</span>
            </ItemInfo>
            <XButton onClick={()=> removeItemFromCart(item.id)}>❌</XButton>
          </Item>
        ))}
      </CartItems>

      { cartItems.length !== 0
          ? <Total>
              <div>
                <div>Subtotal [{cartItems.length} {cartItems.length > 1 ? 'items' : 'item'}]</div>
                <div>Tax</div>
                <div>Total</div>
              </div>
              <div>
                <div>${total}</div>
                <div>${(total/100*NYCTax).toFixed(2)}</div>
                <div>${(total/100 * NYCTax + total).toFixed(2)}</div>
              </div>
            </Total>
          : <Empty>[EMPTY]</Empty>
      }
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
  @media only screen and (max-width: 767px) {
    width: 90vw;
    padding: 0;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 90vw;
    padding: 0;
  }
  @media only screen and (min-width: 1024px) {
    width: 90vw;
    padding: 0;
  }
`;
const CartItems = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  margin: 15px;
`;
const ClearButton = styled.button`
  background: none;
  border: none;
  border-radius: 55px;
  box-shadow: 2px 1px 10px grey;
  font-family: 'Chakra Petch', sans-serif;
  font-size: 20px;
  margin-top: 1vh;
  padding: 5px;
  margin: 15px;
  &:hover {
    box-shadow: 2px 1px 10px red;
    font-weight: bold;
    opacity: 0.8;
    transition: opacity 0.1s ease-in;
  }
`;
const Empty = styled.p`
  font-size: 50px;
  opacity: 30%;
  @media (min-width: 320px) and (max-width: 425px) {
    font-size: 34px;
  }
  @media (min-width: 426px) and (max-width: 768px) {
    font-size: 40px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 45px;
  }
`;
const Item = styled.div`
  display: flex;
  margin-bottom: 1vh;
  justify-content: space-between;
  width: 100%;
  gap: 5px;
`;
const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Permanent Marker;
  font-size: 1rem;
`;
const ItemPhoto = styled.img`
  height: 100%;
  width: 50%;
  border-radius: 10px;
`;
const Total = styled.div`
  display: flex;
  font-size: 1rem;
  gap: 20vw
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
