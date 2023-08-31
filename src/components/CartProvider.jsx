import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  function addItemToCart (item) { setCartItems(prev => [...prev, item]) };
  function removeItemFromCart (itemId) { setCartItems(prev => prev.filter((item)=> item.id !== itemId)); };
  function clearCart () { setCartItems([]); };

  const total = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, clearCart, total }}>
      { children }
    </CartContext.Provider>
  );
};