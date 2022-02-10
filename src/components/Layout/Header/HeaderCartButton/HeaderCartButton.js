// react
import { useContext } from "react";

// context
import CartContext from "../../../../store/cart/cart-context";

// components
import CartIcon from "../../../Cart/CartIcon/CartIcon";

// styles
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <button onClick={props.onClick} className={classes.button}>
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
