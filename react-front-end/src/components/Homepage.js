import React, {useEffect, useState} from "react";
import Search from "./Search";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
const axios = require('axios');


function Homepage() {
  const [popular, setPopular] = useState([]);
  

  useEffect(() => {
    getPopular();
  },[]);

  const getPopular = () => {
      axios.get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/popular.php`)
        .then((response) => { 
          setPopular(response.data.drinks)
          
        })
        .catch((err) => console.log(err))
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
              <Button variant="light">More Detials</Button>

            </Card>
          )
        })}
      </Wrapper>
      
    </div>
  );
}

const Wrapper = styled.div`
  font-size: 25px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 100px 50px;
`;

const Card = styled.div`
  width: auto;  
  margin: 10px;
  min-height: 25rem;
  border-radius: 2rem;

  img{
    max-width: 100%; 
    max-height: 100%;
    border-radius: 2rem;
  }
`;



export default Homepage;
