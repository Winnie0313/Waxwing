import React from "react";
import { Flex, CardFlex } from "../Search/CardStyles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CentredModal from "../Modal";
import Search from "./Search";
import Error from "../Error";
import BrandBar from "../Brand/BrandBar";
const axios = require("axios");

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [drinkObject, setDrinkObject] = useState({});
  const [modalView, setModalView] = useState(false);

  let params = useParams();

  const erroMsg = "Oops , couldn't find that cocktail, please try again";

  /////
  const getSearched = (name) => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
      .then((response) => {
        setSearchedRecipes(response.data.drinks);
      })
      .catch((err) => console.log("++++++", err));
  };

  // sets drink object to the drink that was clicked on
  const searchedDrinkId = (id) => {
    const properDrink = searchedRecipes.find((drink) => drink.idDrink === id);

    setDrinkObject(properDrink);
  };

  const handleModal = (id) => {
    searchedDrinkId(id);
    setModalView(true);
  };

  /////

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <div>
      <BrandBar
        title="Welcome to Waxwing"
        description="The cedar waxwing is a bird native to North America, a natural work of art known to feast on fermented berries and get a little tipsy. Their habits and their beauty inspired the creation of a space where people can share their own unique and beautiful cocktail creations."
      />
      <Search />

      <Flex
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        // results={results}
      >
        {searchedRecipes ? (
          <>
            {searchedRecipes.map((item) => {
              return (
                <CardFlex
                  key={item.idDrink}
                  onClick={() => handleModal(item.idDrink)}
                >
                  <img src={item.strDrinkThumb} alt={item.strDrink} />
                  <h4> {item.strDrink}</h4>
                </CardFlex>
              );
            })}

            <CentredModal
              show={modalView}
              onHide={() => setModalView(false)}
              id={drinkObject.idDrink}
              title={drinkObject.strDrink}
              image={drinkObject.strDrinkThumb}
              ingredient={drinkObject.strIngredient1}
              category={drinkObject.strCategory}
              alcohol={drinkObject.strAlcoholic}
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
