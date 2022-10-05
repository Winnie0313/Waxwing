import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const axios = require("axios");


function ShowRecipe() {
  const [drink, setDrink] = useState({});
  const [ingredients, setIngredients] = useState([])
  const [measurements, setMeasurements] = useState([])
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    getDrinkById();
    getIngredientsForDrink();
    getMeasurementsForDrink();
  }, []);

  // get drink by id
  const getDrinkById = () => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      )
      .then((response) => {
        setDrink(response.data.drinks[0])
        console.log(response.data.drinks[0])
      })
      .catch((err) => console.log(err));
  }

  // get ingredients for the drink
  const getIngredientsForDrink = () => {
    const ingredientsArray = [];
    for (let i = 1; i < 16; i++) {
      if (drink[`strIngredient${i}`] !== null) {
        ingredientsArray.push(drink[`strIngredient${i}`]);
      }
    }
    setIngredients(ingredientsArray);
  };

  // get measurements for ingredients
  const getMeasurementsForDrink = () => {
    const measurementsArray = [];

    for (let i = 1; i < 16; i++) {
      if (drink[`strMeasure${i}`] !== null) {
        measurementsArray.push(drink[`strMeasure${i}`]);
      }
    }
    setMeasurements(measurementsArray);
  };

  // const ingredients = ingredientsForDrink();
  // const measurements = measurementsForDrink();
  // console.log("Ingredients are: ", ingredients);
  // console.log("measurements are: ", measurements);



  return (
    <p>Recipe</p>

  );

}

export default ShowRecipe;