import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


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

      <h4>Category</h4>
      <p>{props.category}</p>

      <h4>Alcoholic/Non-Alcoholic</h4>
      <p>{props.alcohol}</p>

    </Modal.Body>

    <Modal.Footer>
      <h6>Like what you see?</h6>
      <Button variant="outline-dark" as={Link} to={`/recipes/${props.id}`}>VIEW RECIPE PAGE</Button>
    </Modal.Footer>

    </Modal>
  )
}

export default CentredModal;