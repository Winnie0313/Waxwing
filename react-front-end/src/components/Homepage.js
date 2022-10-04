import React, {useEffect, useState} from "react";
import Search from "./Search";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import CentredModal from "./Modal";
// import useModal from "../hooks/useModal";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-regular-svg-icons"
const axios = require('axios');



function Homepage() {

  const [popular, setPopular] = useState([]);
  const [drinkObject, setDrinkObject] = useState({});
  const [modalView, setModalView] = useState(false);

  useEffect(() => {
    getPopular();
  },[]);

  const getPopular = () => {
      axios.get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/popular.php`)
        .then((response) => { 
          setPopular(response.data.drinks);
          
        })
        .catch((err) => console.log(err))
  }

  const singleDrinkId = (id) => {
    
    const drink = popular.find((drink) => drink.idDrink === id);

    setDrinkObject(drink)
  }

const handleModal = (id) => {
  singleDrinkId(id);
  setModalView(true);
}

  return (
    <div>
      <Search />
      <h1> Popular Picks</h1>
      <Wrapper>
        
        {popular.map( cocktail => {
          return(
            <>
              <Card key={cocktail.idDrink}>
                
                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                <h6> {cocktail.strCategory} </h6>
                <h4> {cocktail.strDrink}</h4>
                <Button onClick={() => handleModal(cocktail.idDrink)}>View</Button>
                
              </Card>
            </>

            )
          }
        )}

      <CentredModal 
        show={modalView}
        onHide={() => setModalView(false)}
        title={drinkObject.strDrink}
        image={drinkObject.strDrinkThumb}
        instructions={drinkObject.strInstructions}
      />
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

  h6 {
    text-align: center;
    padding-top: 1rem;
    color: white;
  }
`;



export default Homepage;
