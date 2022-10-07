import React from "react";
import { Flex, CardFlex, FormStyle } from "../Search/CardStyles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Error from "../Error";
import CentredModal from "../Modal";
const axios = require("axios");

function SearchedFirst() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [drinkObject, setDrinkObject] = useState({});
  const [modalView, setModalView] = useState(false);

  let params = useParams();

  const erroMsg = "Oops , couldn't find that cocktail, please try again";
  // console.log("params", params);

  ////
  const getSearched = (name) => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${name}`)
      .then((response) => {
        setSearchedRecipes(response.data.drinks);
        // console.log("====", response.data.drinks);
      })
      .catch((err) => console.log(err));
  };

  /////

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  /// search bar parameters
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searchedFirst/" + input);

    // console.log("input", input);
  };

  // sets the drink object based on the id of the drink
  const firstDrinkId = (id) => {
    const properDrink = searchedRecipes.find((drink) => drink.idDrink === id);

    setDrinkObject(properDrink);
  };

  // Opens modal and fetches details for drink
  const handleModal = (id) => {
    firstDrinkId(id);
    setModalView(true);
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
            placeholder="Search by first letter"
          />
        </div>
      </FormStyle>

      <Flex
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
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
          <Error message={erroMsg} />
        )}
      </Flex>
    </div>
  );
}

export default SearchedFirst;
