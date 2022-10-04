import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import Button from "react-bootstrap/Button";
import CentredModal from "../Modal";
import styled from "styled-components";
import { motion } from "framer-motion";

const Favourites = () => {

    // Have to add user context to this page once login is accessing the user database
  const { user } = useContext(UserContext);

  const [db, setDb] = useState([]);
  const [modalView, setModalView] = useState(false);
  const [drinkObject, setDrinkObject] = useState({});

  useEffect(() => {
    fetchFavourites();
  }, []);

  const fetchFavourites = async () => {
    const response = await fetch("/api/favourites/1");
    const data = await response.json();

    const drinkArray = await Promise.all(
      data.map(async (drink) => {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${drink.api_cocktail_id}`
        );
        const drinkData = await response.json();
        return drinkData.drinks[0];
      })
    );

    setDb(drinkArray);
  };

  const singleDrinkId = (id) => {
    const properDrink = db.find((drink) => drink.idDrink === id);

    setDrinkObject(properDrink);
  };

  const handleModal = (id) => {
    singleDrinkId(id);
    setModalView(true);
  };

  const ingredientsForDrink = () => {
    const ingredientsArray = [];

    for (let i = 1; i < 16; i++) {
      if (drinkObject[`strIngredient${i}`] !== null) {
        ingredientsArray.push(drinkObject[`strIngredient${i}`]);
      }
    }
    return ingredientsArray;
  };

  // Same as homepage
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
    <>
      <div>
        <h1>Favourites</h1>
      </div>
      <>
        <Grid
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {db.map((item) => {
            return (
              <Card key={item.idDrink}>
                <img src={item.strDrinkThumb} alt={item.strDrink} />
                <h4> {item.strDrink}</h4>
                <Button
                  variant="primary"
                  onClick={() => handleModal(item.idDrink)}
                >
                  View Recipe
                </Button>
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
      </>
    </>
  );
};

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

export default Favourites;
