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

          <h4>Category</h4>
          <p>{props.category}</p>

          <h4>Alcoholic/Non-Alcoholic</h4>
          <p>{props.alcohol}</p>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <h6>Like what you see?</h6>
        <Button variant="outline-dark" as={Link} to={`/recipes/${props.id}`}>
          VIEW RECIPE PAGE
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CentredModal;
