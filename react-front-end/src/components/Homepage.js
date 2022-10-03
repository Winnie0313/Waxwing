import React, {useEffect, useState} from "react";
import Search from "./Search";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import CentredModal from "./Modal";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-regular-svg-icons"
const axios = require('axios');



function Homepage() {

  const [popular, setPopular] = useState([]);
  const [modalView, setModalView] = useState(false);
  const [drinkId, setDrinkId] = useState(0);
  const [drinkObject, setDrinkObject] = useState({});
  

  useEffect(() => {
    getPopular();
    singleDrinkId();
    singleDrink();
  },[]);

  const getPopular = () => {
      axios.get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/popular.php`)
        .then((response) => { 
          setPopular(response.data.drinks);
          
        })
        .catch((err) => console.log(err))
  }

  const handleModal = (id) => {
    setModalView(true);
    setDrinkId(id);
  }

  const singleDrinkId = () => {
    popular.find((drink) => drink.idDrink === drinkId);
  }

  const singleDrink = () => {
    axios.get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/lookup.php?i=${drinkId}`)
      .then((response) => {
        setDrinkObject(response.data.drinks[0]);
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <Search />
      <h1> Popular Picks</h1>
      <Wrapper>
        {console.log(popular)}
        
        {popular.map( cocktail => {
          return(
            <>
              <Card key={cocktail.idDrink}>
                {/* <Link to={`/drinks/${cocktail.idDrink}`}> */}
                  <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                  <h6> {cocktail.strCategory} </h6>
                  <h4> {cocktail.strDrink}</h4>
                {/* </Link> */}
              <Button onClick={() => handleModal(cocktail.idDrink)}>View</Button>

              
              </Card>




            </>

            )
          }
        )}

{/* <CentredModal 
  show={modalView}
  onHide={() => setModalView(false)}
  title={singleDrink.strDrink}
  image={singleDrink.strDrinkThumb}
  instructions={singleDrink.strInstructions}
/> */}
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
