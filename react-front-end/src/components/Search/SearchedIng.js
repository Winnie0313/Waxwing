import React from "react";
import { Flex, CardFlex, FormStyle } from "../Search/CardStyles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Error from "../Error";
const axios = require("axios");

function SearchedIng() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();
  const erroMsg =
    "Oops , couldn't find any drinks, please try other ingredients";

  /////
  const getSearched = (name) => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/filter.php?i=${name}`
      )
      .then((response) => {
        setSearchedRecipes(response.data.drinks);
      })
      .catch((err) => console.log(err));
  };

  /////

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  console.log("=+++===", searchedRecipes);
  /// searchBar parameters
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searchedIng/" + input);

    console.log("input", input);
  };

  return (
    <div>
      <FormStyle onSubmit={submitHandler}>
        <div>
          <FaSearch></FaSearch>
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            value={input}
            placeholder="Search by ingredient: anis,gin "
          />
        </div>
      </FormStyle>

      <Flex
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {searchedRecipes !== "None Found" ? (
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
          <Error message={erroMsg} />
        )}
      </Flex>
    </div>
  );
}

export default SearchedIng;
