import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NewCoktailCSS from "./NewCocktail.module.css";
import "./style.scss";

function NewCocktail() {
  const navigate = useNavigate();
  const [cocktailName, setCocktailName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(cocktailName, ingredients, instructions, image);
    setCocktailName("");
    setIngredients("");
    setInstructions("");
    setImage("");
    /// to redirect to home page
    navigate("/");
  };
  return (
    <div
      className="auth-form-container newCockt "
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80")`,
      }}
    >
      <h2>Add new cocktail</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name of your cocktail</label>
        <input
          value={cocktailName}
          name="name"
          id="name"
          // placeholder="Enter name "
          onChange={(e) => setCocktailName(e.target.value)}
        />
        <label htmlFor="name">Ingredients</label>
        <input
          value={ingredients}
          name="name"
          id="name"
          // placeholder="Ingredients"
          onChange={(e) => setIngredients(e.target.value)}
        />
        <label htmlFor="name">Instructions</label>
        <input
          value={instructions}
          name="name"
          id="name"
          // placeholder="Instructions"
          onChange={(e) => setInstructions(e.target.value)}
        />
        <label htmlFor="name">Image link</label>
        <input
          value={image}
          name="name"
          id="name"
          // placeholder=""
          onChange={(e) => setImage(e.target.value)}
        />

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default NewCocktail;
