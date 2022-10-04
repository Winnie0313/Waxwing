import React from "react";
import { Flex, CardFlex } from "../Search/CardStyles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Search from "./Search";
import Error from "../Error";
const axios = require("axios");

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
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
                  <Link to={"/recipe/" + item.idDrink}>
                    <img src={item.strDrinkThumb} alt={item.strDrink} />
                    <h4> {item.strDrink}</h4>
                  </Link>
                </CardFlex>
              );
            })}
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
