import React, {useEffect, useState} from "react";
import Search from "./Search";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
              <Card style={{ width: '18rem', textAlign: 'left'}} > 
                <Card.Img variant="top" src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                <Card.Body>
                  <Card.Title>{cocktail.strDrink}</Card.Title>
                  <Card.Text>{cocktail.strCategory}</Card.Text>
                  <Button variant="dark" as={Link} to='/cocktails/:id'>More Details</Button>
                </Card.Body>
              </Card>

            // <Card>
            //   <p>{cocktail.strDrink}</p>
            //   <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            //   {/* <Link to ='/:id'>More Details</Link> */}
            //   <Button variant="light" as={Link} to='/cocktails/:id'>More Detials</Button>
            //   <FontAwesomeIcon icon="fa-thin fa-heart" />
            // </Card>
          )
        })}
      </Wrapper>
      
    </div>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px 50px;
  margin: 40px;
`;

// const Card = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: auto;  
//   margin: 10px;
//   min-height: 25rem;
//   border-radius: 2rem;

//   img{
//     max-width: 100%; 
//     max-height: 100%;
//     border-radius: 2rem;
//   }
// `;



export default Homepage;
