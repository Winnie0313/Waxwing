import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

function SearchByFirst() {
  const [input, setInput] = useState("");

  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searchedFirst/" + input);
  };
  // example of search :
  //  a
  //  b
  //  c
  //  d
  return (
    <div>
      <FormStyle onSubmit={submitHandler}>
        <div>
          <FaSearch></FaSearch>
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            value={input}
            placeholder="search by first letter"
          />
        </div>
      </FormStyle>
    </div>
  );
}

const FormStyle = styled.form`
  margin: 0rem 5rem;

  width: 100%auto;
  div {
    width: 100%auto;
    position: relative;
  }
  input {
    border: none;
    background-color: black;
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

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
export default SearchByFirst;
