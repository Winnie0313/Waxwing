import React, {useEffect, useState} from "react";
import Search from "./Search";
import styled from "styled-components";
const axios = require('axios');

// `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/popular.php`

function Homepage() {
  const [popular, setPopular] = useState([]);
  

  useEffect(() => {
    getPopular();
  },[]);

  const getPopular = () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check))
    } else {
      axios.get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/popular.php`)
        .then((response) => {
          setPopular(response.data.drinks)
        })
        .catch((err) => console.log(err))
    }



    
  }
  return (
    <div>
      <h1> Popular Picks</h1>
      {popular.map( cocktail => {
        return(
          <Card>
            <p>{cocktail.strDrink}</p>
            <img src={cocktail.strImageSource} alt={cocktail.strDrink} />
          </Card>
        )
      })}
      <Search />
    </div>
  );
}

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
`
export default Homepage;
