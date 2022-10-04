import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import CentredModal from "./Modal";

function Drink() {
  
  const [drink, setDrink] = useState([]);
  const [drinkObject, setDrinkObject] = useState({});
  const [modalView, setModalView] = useState(false);

  // empty arrays for functions
  const ingredientsArray = [];
  const measurementsArray = [];

  let params = useParams();

  const getDrink = async (name) => {
    const data = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${name}`
    );
    const recipes = await data.json();
    setDrink(recipes.drinks);
    console.log(
      "link",
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${name}`
    );
    console.log("recipies", recipes);
  };

  useEffect(() => {
    console.log(params.type);
    getDrink(params.type);
  }, [params.type]);
  console.log("drink", drink);

  // sets the drink object based on the id of the drink, used in this context to open the modal with the proper drink details
  const singleDrinkId = (id) => {
    
    const properDrink = drink.find((drink) => drink.idDrink === id);

    setDrinkObject(properDrink);
  }

  // calls the API using ID fetched by above function by Mustafa
  const fetchDetailsForDrink = async (id) => {
    const data = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const drink = await data.json();
    setDrinkObject(drink.drinks[0]);
  };

  // Similar to home page, but calls the API for the specific drink
  const handleModal = (id) => {
    singleDrinkId(id);
    fetchDetailsForDrink(id);
    setModalView(true);
  }

  // Same as homepage
  const ingredientsForDrink = () => {
    for (let i = 1; i < 16; i++) {
      if (drinkObject[`strIngredient${i}`] !== null) {
        ingredientsArray.push(drinkObject[`strIngredient${i}`]);
      }
    }
    return ingredientsArray;
  };

  // Same as homepage
  const measurementsForDrink = () => {
    for (let i = 1; i < 16; i++) {
      if (drinkObject[`strMeasure${i}`] !== null) {
        measurementsArray.push(drinkObject[`strMeasure${i}`]);
      }
    }
    return measurementsArray;
  };

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {drink.map((item) => {
        return (
          <Card key={item.idDrink}>
              <img src={item.strDrinkThumb} alt={item.strDrink} />
              <h4> {item.strDrink}</h4>
              <Button variant="primary" onClick={() => handleModal(item.idDrink)} >View Recipe</Button>
          </Card>
        );
      })}

      <CentredModal
        show={modalView}
        onHide={() => setModalView(false)}
        title={drinkObject.strDrink}
        image={drinkObject.strDrinkThumb}
        instructions={drinkObject.strInstructions}
        ingredients={ingredientsForDrink()}
        measurements={measurementsForDrink()}
      />

    </Grid>
  );
}

const Grid = styled(motion.div)`
  margin-top: 3rem;
  margin-left: 3rem;
  margin-right: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  padding-bottom: 5rem;
`;
const Card = styled.div`
  border: 2px solid black;
  background-color: black;
  border-radius: 2rem;

  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 14px 6px 19px -1px rgba(0, 0, 0, 0.75);
    transform: scale(1.05);
  }

  img {
    width: 100%;
    /* border-radius: 2rem; */
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
  }

  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
    color: white;
  }
`;
export default Drink;
