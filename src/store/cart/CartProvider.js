// react
import { useReducer } from "react";

// context
import CartContext from "./cart-context";

import { defaultCartState, cartReducer } from "./reducer";

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      item,
    });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE",
      id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
