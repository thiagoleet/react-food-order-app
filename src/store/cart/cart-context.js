// react
import React from "react";

const initialState = {
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clear: () => {},
};

const CartContext = React.createContext(initialState);

export default CartContext;
