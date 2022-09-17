import React from "react";
import ReactDOM from "react-dom";

//Add this on html file
// <div id="modal"></div>

const Modal = (props) => {
  return ReactDOM.createPortal(
    props.children,
    document.getElementById("modal")
  );
};

const ModalContent = () => {
  return (
    <div>
      <h1>I am modal</h1>
    </div>
  );
};

export { Modal, ModalContent };
