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

      <h3>Ingredients</h3>
      
      <ul>
        {props.ingredients.map((ingredient, index) => {
          return (
            <li key={index}>
              {ingredient} - {props.measurements[index]}
            </li>
          );
        })}
      </ul>


      <h3>Instructions</h3>
      <p>{props.instructions}</p>

    </Modal.Body>

    <Modal.Footer>
      <Button variant="outline-dark" as={Link} to={`/recipes/${props.id}`}>VIEW RECIPE PAGE</Button>
      <h6>Like what you see?</h6>
    </Modal.Footer>

    </Modal>
  )
}

export default CentredModal;