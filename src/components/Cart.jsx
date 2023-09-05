import React from 'react';
import styled from 'styled-components';
import { useCart } from './CartProvider';
import SelectCountry from './SelectCountry';
import SelectState from './SelectState';

const ShoppingCart = () => {
  const { cartItems, total, removeItemFromCart, clearCart } = useCart();
  const NYCTax = 8.875;

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
      <div>
        <header>shipping info</header>
        <form action="">
          <label htmlFor="email">Email</label><br/>
          <input type="email" />

          <label htmlFor="cardInfo">Card information</label><br/>
          <input type="number" />
          <input type="month" />
          <input type="number" />

          <label htmlFor="email">Name on card</label><br/>
          <input type="text" />

          <label htmlFor="">Billing Address</label>
          <SelectCountry />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="number" />
          <SelectState />

          <label htmlFor="">Shipping Address</label>
          <SelectCountry />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="number" />
          <SelectState />

          <button>Pay</button>
        </form>
      </div>
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
  gap: 2vh;
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

export default ShoppingCart;
