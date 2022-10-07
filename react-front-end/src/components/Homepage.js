import React, { useEffect, useState } from "react";
import { Flex, CardFlex } from "./Search/CardStyles";
import Search from "./Search/Search";
import CentredModal from "./Modal";
import BrandBar from "./Brand/BrandBar";
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

  return (
    <div>
      <BrandBar
        title="Welcome to Waxwing"
        description="The cedar waxwing is a bird native to North America, a natural work of art known to feast on fermented berries and get a little tipsy. Their habits and their beauty inspired the creation of a space where people can share their own unique and beautiful cocktail creations."
      />
      <Search />
      <h1> Popular Picks</h1>
      <Flex>
        {popular.map((cocktail) => {
          return (
            <>
              <CardFlex
                key={cocktail.idDrink}
                onClick={() => handleModal(cocktail.idDrink)}
              >
                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                <h4> {cocktail.strDrink}</h4>
              </CardFlex>
            </>
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
      </Flex>
    </div>
  );
}

export default Homepage;
