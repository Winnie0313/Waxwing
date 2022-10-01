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
    // const check = localStorage.getItem("popular");

    // if (check) {
    //   setPopular(JSON.parse(check))
    // } else {
      axios.get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/popular.php`)
        .then((response) => {
          console.log("I am here!")
          console.log(response.data.drinks)
          setPopular(response.data.drinks)
          // localStorage.getItem("popular", response.data.drinks)
        })
        .catch((err) => console.log(err))
    // }



    
  }
  return (
    <div>
      <Search />
      <h1> Popular Picks</h1>
      <Wrapper>
        {popular.map( cocktail => {
          return(
            <Card>
              <p>{cocktail.strDrink}</p>
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            </Card>
          )
        })}
      </Wrapper>
      
    </div>
  );
}

const Wrapper = styled.div`
  flex-direction: column;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;

  img{
    border-radius: 2rem
  }
`;



export default Homepage;
