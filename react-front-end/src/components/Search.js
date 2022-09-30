import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

function Search() {
  const [input, setInput] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("input", input);
  };
  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </div>
    </FormStyle>
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

export default Search;
