// styles
import classes from "./FormControl.module.css";

// components
import Input from "./Input";
import Label from "./Label";

const FormControl = (props) => {
  return (
    <div className={classes.input}>
      <Label htmlFor={props.input.id}>{props.label}</Label>
      <Input {...props.input} />
    </div>
  );
};

export default FormControl;
