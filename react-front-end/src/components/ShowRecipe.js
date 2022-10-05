import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";


const axios = require("axios");


function ShowRecipe() {
  const [drink, setDrink] = useState({});
  const [ingredients, setIngredients] = useState([])
  const [measurements, setMeasurements] = useState([])
  // get drink id from the endpoint
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

  return (
    <div>
      <GridContainer>
        <TopLeft>
          <div>
            <h1>{drink.strDrink}</h1>
            <p>{drink.strCategory}</p>
          </div>
        </TopLeft>
        <TopRight>
          <img src={drink.strDrinkThumb} alt={drink.strDrink} />
        </TopRight> 
      
    
        <BottomLeft>
          <h3>Ingredients</h3>
          <div>
            <ul>
              {ingredients.map((ingredient, index) => {
                return (
                  <li key={index}>
                    {ingredient} - {measurements[index]}
                  </li>
                );
              })}
            </ul>
          </div>
        </BottomLeft>
        <BottomRight>
          <h3>Instructions</h3>
          <p>{drink.strInstructions}</p>
        </BottomRight>
      </GridContainer>
    </div>


  );

}


const GridContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  width: 100vw;
  height: 100vh;
`

// const Top = styled.div`
//   display: flex;
// `
const TopLeft = styled.div`
  display: grid;
  align-items: center;
  flex: 50%;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  
  h1 {
    font-size: 50px;
  }
`
const TopRight = styled.div`
  flex: 50%;
  img {
    width: 100%;
  };
`
const BottomLeft = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  li {
    text-align: left;
  }
`
const BottomRight = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  
`


export default ShowRecipe;