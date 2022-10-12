import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import CentredModal from "../Modal";
import { Flex, CardFlex } from "../Search/CardStyles";

const Favourites = () => {
  // Have to add user context to this page once login is accessing the user
  const { user } = useContext(UserContext);

  const [db, setDb] = useState([]);
  const [modalView, setModalView] = useState(false);
  const [drinkObject, setDrinkObject] = useState({});

  useEffect(() => {
    if (!user.id) return;
    fetchFavourites();
  }, [user]);

  const fetchFavourites = async () => {
    try {
      const response = await fetch(`/api/favourites/${user.id}`);
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

    } catch(err){
      console.log(err);
    }
    
  };

  const singleDrinkId = (id) => {
    const properDrink = db.find((drink) => drink.idDrink === id);

    setDrinkObject(properDrink);
  };

  const handleModal = (id) => {
    singleDrinkId(id);
    setModalView(true);
  };

  return (
    <>
      <div>
        <h1>Favourites</h1>
      </div>
      <>
        <Flex
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {db.map((item) => {
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
        </Flex>
      </>
    </>
  );
};

export default Favourites;
