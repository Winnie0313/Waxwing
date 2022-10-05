import React, { useState, useEffect } from "react";
import { Flex, CardFlex } from "./Search/CardStyles";
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
    fetchDetailsForDrink(id);
    setModalView(true);
  };

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
    <Flex
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {drink.map((item) => {
        return (
          <CardFlex key={item.idDrink}>
            <img src={item.strDrinkThumb} alt={item.strDrink} />
            <h4> {item.strDrink}</h4>
            <Button variant="primary" onClick={() => handleModal(item.idDrink)}>
              View Recipe
            </Button>
          </CardFlex>
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
    </Flex>
  );
}

export default Drink;
