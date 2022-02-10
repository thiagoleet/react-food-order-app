// react
import React from "react";

// styles
import classes from "./FormControl.module.css";

// components
import Input from "./Input";
import Label from "./Label";

const FormControl = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <Label htmlFor={props.input.id}>{props.label}</Label>
      <Input ref={ref} {...props.input} />
    </div>
  );
});

export default FormControl;
