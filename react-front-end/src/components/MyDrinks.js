import { useContext, useEffect, useState } from "react";
import { MyContext } from "./MyContext";
import { Flex, CardFlex } from "./Search/CardStyles";
import Error from "./Error";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function MyDrinks() {
  const erroMsg = "your list is empty ...";
  const { data, setData } = useContext(MyContext);

  /// to delet new cocktail
  const handleRemoveItem = (id) => {
    const dataAfterDelet = data.filter((item) => item.id !== id);
    localStorage.setItem("myDrinks", JSON.stringify(dataAfterDelet));
    setData(dataAfterDelet);
  };
  console.log("newData", data);

  useEffect(() => {
    const check = localStorage.getItem("myDrinks");
    console.log("check", check);
    if (check) {
      const localData = JSON.parse(check);
      setData(localData);
    }
  }, [setData]);

  return (
    <div>
      <h2> My Drinks</h2>
      <Button as={Link} to="/NewCocktail">
        {" "}
        Add New cocktail{" "}
      </Button>

      <Flex
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {data.length !== 0 ? (
          <>
            {data.map((item) => {
              return (
                <CardFlex key={item.id}>
                  <Link to={"/recipe/" + item.id}>
                    <img src={item.image} alt={item.cocktailName} />
                    <h4> {item.cocktailName}</h4>
                  </Link>
                  <button
                    id={item.id}
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    X
                  </button>
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

export default MyDrinks;
