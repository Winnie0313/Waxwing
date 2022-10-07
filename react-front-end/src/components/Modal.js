import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./styles/Modal.css";

function CentredModal(props) {
  return (
    <Modal {...props} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>
          <div className="modal-title">
            <h1>{props.title}</h1>
          </div>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="modal-body">
          <img src={props.image} alt={props.title} className="modal-image" />

          <h4 className="modal-ingredient">Main Ingredient</h4>
          <p>{props.ingredient}</p>

          <h4 className="modal-category">Category</h4>
          <p>{props.category}</p>

          <h4 className="modal-alcohol">Alcoholic/Non-Alcoholic</h4>
          <p>{props.alcohol}</p>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <h6><b>Like what you see?</b></h6>
        <Button variant="outline-dark" as={Link} to={`/recipes/${props.id}`}>
          <b>View The Recipe</b>
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CentredModal;
