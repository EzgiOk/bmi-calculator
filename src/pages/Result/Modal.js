import React from "react";
import {Modal} from "react-bootstrap";


function CenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        className="modal"
        //aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="model-body">
          <p>
            {props.message}
          </p>
        </Modal.Body>
      </Modal>
    );
  }
  
  export default CenteredModal;