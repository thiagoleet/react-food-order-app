// react
import { Fragment } from "react/cjs/react.production.min";
import ReactDOM from "react-dom";

// styles
import classes from "./Modal.module.css";

// components
import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>
          <div className={classes.content}>{props.children}</div>
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
