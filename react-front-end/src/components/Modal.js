import React from "react";
import Modal from "react-bootstrap/Modal";

function CentredModal(props) {

  return (
    <Modal 
      {...props}
      centered
      size= "lg">

    <Modal.Header closeButton>
      <Modal.Title>{props.title}</Modal.Title>
    </Modal.Header>

    <Modal.Body>

      <img src={props.image} alt={props.title} />

      <h3>Ingredients</h3>
      placeholder for ingredients

      <h3>Instructions</h3>
      <p>{props.instructions}</p>

    </Modal.Body>

    <Modal.Footer>
      <h6>Like what you see?</h6>
    </Modal.Footer>

    </Modal>
  )
}

export default CentredModal;