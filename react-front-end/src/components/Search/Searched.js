import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
  return (
    <div>
      <Search />
      <Grid
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {searchedRecipes ? (
          <>
            {searchedRecipes.map((item) => {
              return (
                <Card key={item.idDrink}>
                  <Link to={"/recipe/" + item.idDrink}>
                    <img src={item.strDrinkThumb} alt={item.strDrink} />
                    <h4> {item.strDrink}</h4>
                  </Link>
                </Card>
              );
            })}
          </>
        ) : (
          <>
            <Error message={erroMsg} />
          </>
        )}
      </Grid>
    </div>
  );
}

const Grid = styled(motion.div)`
  margin-top: 3rem;
  margin-left: 3rem;
  margin-right: 3rem;

  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem; */
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 3rem;
`;
const Card = styled.div`
  border: 2px solid black;
  background-color: black;
  border-radius: 2rem;
  /* flex  */
  width: 25rem;
  margin-bottom: 3rem;

  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 14px 6px 19px -1px rgba(0, 0, 0, 0.75);
    transform: scale(1.05);
  }

  img {
    width: 100%;
    /* height: 20rem; */
    /* border-radius: 2rem; */
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    /* flex   */
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
export default Searched;
