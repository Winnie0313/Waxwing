import React, { useState } from "react";
import { FormStyle } from "../Search/CardStyles";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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

export default SearchByFirst;
