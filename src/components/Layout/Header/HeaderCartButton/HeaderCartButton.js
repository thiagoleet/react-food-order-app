// components
import CartIcon from "../../../Cart/CartIcon/CartIcon";

// styles
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button onClick={props.onClick} className={classes.button}>
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
