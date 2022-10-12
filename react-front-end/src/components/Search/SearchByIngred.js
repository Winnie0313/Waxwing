import React, { useState } from "react";
import { FormStyle } from "../Search/CardStyles";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SearchByIngred() {
  const [input, setInput] = useState("");

  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searchedIng/" + input);
  };
  /// Search exemples:
  //  anis,gin
  // Lime,vodka
  // Tequila,Lime
  // Vodka,Tomato juice,Lime

  return (
    <div className="searchBar">
      <FormStyle onSubmit={submitHandler}>
        <div>
          <FaSearch></FaSearch>
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            value={input}
            placeholder="search by ingredients: anis,gin"
          />
        </div>
      </FormStyle>
    </div>
  );
}

export default SearchByIngred;
