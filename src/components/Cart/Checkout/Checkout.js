import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;
const addClasses = (valid) =>
  `${classes.control} ${valid ? "" : classes.invalid}`;

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInput = useRef();
  const streetInput = useRef();
  const postalCodeInput = useRef();
  const cityInput = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const name = nameInput.current.value;
    const street = streetInput.current.value;
    const postalCode = postalCodeInput.current.value;
    const city = cityInput.current.value;

    const nameIsValid = !isEmpty(name);
    const streetIsValid = !isEmpty(street);
    const cityIsValid = !isEmpty(city);
    const postalCodeIsValid = isFiveChars(postalCode);

    setFormInputValidity({
      name: nameIsValid,
      street: streetIsValid,
      city: cityIsValid,
      postalCode: postalCodeIsValid,
    });

    const formIsValid =
      nameIsValid && streetIsValid && cityIsValid && postalCodeIsValid;

    if (!formIsValid) {
      return;
    }

    // Submit cart data
    props.onConfirm({
      name,
      street,
      city,
      postalCode,
    });
  };

  const controlClasses = {
    name: addClasses(formInputValidity.name),
    street: addClasses(formInputValidity.street),
    postalCode: addClasses(formInputValidity.postalCode),
    city: addClasses(formInputValidity.city),
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={controlClasses.name}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInput} />
        {!formInputValidity.name && <p>Please enter a valid name</p>}
      </div>
      <div className={controlClasses.street}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInput} />
        {!formInputValidity.street && <p>Please enter a valid street</p>}
      </div>
      <div className={controlClasses.postalCode}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInput} />
        {!formInputValidity.postalCode && (
          <p>Please enter a valid postal code</p>
        )}
      </div>
      <div className={controlClasses.city}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInput} />
        {!formInputValidity.city && <p>Please enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
