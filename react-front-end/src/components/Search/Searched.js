import React from "react";
import { Flex, CardFlex } from "../Search/CardStyles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CentredModal from "../Modal";
import Button from "react-bootstrap/Button";
import Search from "./Search";
import Error from "../Error";
const axios = require("axios");

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [drinkObject, setDrinkObject] = useState({});
  const [modalView, setModalView] = useState(false);

  let params = useParams();

  const erroMsg = "Oops , couldn't find that cocktail, please try again";
  console.log("params", params);

  /////
  const getSearched = (name) => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
      .then((response) => {
        setSearchedRecipes(response.data.drinks);
        // console.log("====", response.data.drinks);
      })
      .catch((err) => console.log("++++++", err));
  };

  const searchedDrinkId = (id) => {
    const properDrink = searchedRecipes.find((drink) => drink.idDrink === id);

    setDrinkObject(properDrink);
  };

  // fetches ingredient details for drink
  const ingredientsForDrink = () => {
    const ingredientsArray = [];

    for (let i = 1; i < 16; i++) {
      if (drinkObject[`strIngredient${i}`] !== null) {
        ingredientsArray.push(drinkObject[`strIngredient${i}`]);
      }
    }
    return ingredientsArray;
  };

  // fetches measurements for drink
  const measurementsForDrink = () => {
    const measurementsArray = [];

    for (let i = 1; i < 16; i++) {
      if (drinkObject[`strMeasure${i}`] !== null) {
        measurementsArray.push(drinkObject[`strMeasure${i}`]);
      }
    }
    return measurementsArray;
  };

  const handleModal = (id) => {
    searchedDrinkId(id);
    setModalView(true);
  };

  /////

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  let results = searchedRecipes.length;
  console.log("lenghtof", searchedRecipes.length);
  //// styling

  return (
    <div>
      <Search />

      <Flex
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        results={results}
      >
        {searchedRecipes !== null ? (
          <>
            {searchedRecipes.map((item) => {
              return (
                <CardFlex key={item.idDrink}>
                  
                    <img src={item.strDrinkThumb} alt={item.strDrink} />
                    <h4> {item.strDrink}</h4>
                    <Button onClick={() => handleModal(item.idDrink)}>
                      View
                    </Button>
                  
                </CardFlex>
              );
            })}

            <CentredModal
              show={modalView}
              onHide={() => setModalView(false)}
              id={drinkObject.idDrink}
              title={drinkObject.strDrink}
              image={drinkObject.strDrinkThumb}
              instructions={drinkObject.strInstructions}
              ingredients={ingredientsForDrink()}
              measurements={measurementsForDrink()}
            />
          </>
        ) : (
          <>
            <Error message={erroMsg} />
          </>
        )}
      </Flex>
    </div>
  );
}

export default Searched;
