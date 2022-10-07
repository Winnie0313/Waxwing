import React, { useState, useEffect } from "react";
import { Flex, CardFlex } from "./Search/CardStyles";
import { useParams } from "react-router-dom";
import CentredModal from "./Modal";

function Drink() {
  const [drink, setDrink] = useState([]);
  const [drinkObject, setDrinkObject] = useState({});
  const [modalView, setModalView] = useState(false);

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

  return (
    <Flex
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {drink.map((item) => {
        return (
          <CardFlex key={item.idDrink} onClick={() => handleModal(item.idDrink)}>
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
        category={drinkObject.strCategory}
        alcohol={drinkObject.strAlcoholic}
      />
    </Flex>
  );
}

export default Drink;
