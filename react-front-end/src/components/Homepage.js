import React, { useEffect, useState } from "react";
import { Flex, CardFlex } from "./Search/CardStyles";
import Search from "./Search/Search";
import Button from "react-bootstrap/Button";
// import Card from 'react-bootstrap/Card';
import CentredModal from "./Modal";
// import useModal from "../hooks/useModal";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-regular-svg-icons"
const axios = require("axios");

function Homepage() {
  const [popular, setPopular] = useState([]);
  const [drinkObject, setDrinkObject] = useState({});
  const [modalView, setModalView] = useState(false);

  // empty arrays for functions

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = () => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/popular.php`
      )
      .then((response) => {
        setPopular(response.data.drinks);
      })
      .catch((err) => console.log(err));
  };

  // sets the drink object based on the id of the drink
  const singleDrinkId = (id) => {
    const drink = popular.find((drink) => drink.idDrink === id);

    setDrinkObject(drink);
  };

  // Opens modal and fetches details for drink
  const handleModal = (id) => {
    singleDrinkId(id);
    setModalView(true);
  };

  // Dynamically gets ingredients for each drink
  const ingredientsForDrink = () => {
    const ingredientsArray = [];

    for (let i = 1; i < 16; i++) {
      if (drinkObject[`strIngredient${i}`] !== null) {
        ingredientsArray.push(drinkObject[`strIngredient${i}`]);
      }
    }
    return ingredientsArray;
  };

  // dynamically gets measurements for drink
  const measurementsForDrink = () => {
    const measurementsArray = [];

    for (let i = 1; i < 16; i++) {
      if (drinkObject[`strMeasure${i}`] !== null) {
        measurementsArray.push(drinkObject[`strMeasure${i}`]);
      }
    }
    return measurementsArray;
  };

  return (
    <div>
      <Search />
      <h1> Popular Picks</h1>
      <Flex>
        {popular.map((cocktail) => {
          return (
            <>
              <CardFlex key={cocktail.idDrink}>
                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                {/* <h6> {cocktail.strCategory} </h6> */}
                <h4> {cocktail.strDrink}</h4>
                <Button onClick={() => handleModal(cocktail.idDrink)}>
                  View
                </Button>
              </CardFlex>
            </>
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
    </div>
  );
}

export default Homepage;
