import React from "react";

function Modal() {

// make sure to add state to this component, related to each of the cards on pages

  return (
    
      <div className="modal">
        <button className="close-button">X</button>
        <div className="title">
          <h1><b>Recipe Title</b></h1>
        </div>
        <div className="modal-image">
          <img src="https://preview.redd.it/b7zpw9mk84c51.jpg?auto=webp&s=2d64e494a8ba795d35d8cd4b4afd9faf7e6bc4e9" alt="cocktail"/>
        </div>
        <div className="modal-ingredients">
          <h3><b>Ingredients</b></h3>
          <p>There will be an ordered list here using the 'ul' tag</p>
        </div>
        <div className="modal-instructions">
          <h3><b>Instructions</b></h3>
          <p>There will be instructions here, taken from the API</p>
        </div>
      </div>
  );
}

export default Modal;