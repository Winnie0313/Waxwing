import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "./MyContext";
import Form from "react-bootstrap/Form";

function NewCocktail() {
  const navigate = useNavigate();
  const { data, setData } = useContext(MyContext);

  function getRandomInt() {
    return Math.floor(Math.random() * 1000);
  }

  let defaultCocktail = {
    id: getRandomInt(),
    cocktailName: "",
    ingredient1: "",
    ingredient2: "",
    ingredient3: "",
    ingredient4: "",
    measurement1: "",
    measurement2: "",
    measurement3: "",
    measurement4: "",
    category: "",
    instructions: "",
    image: "",
    video: "",
    alcoholic: "",
  };

  const [cocktailInfo, setCocktailInfo] = useState(defaultCocktail);
  console.log("cocktailInfoFirst", cocktailInfo);

  const handelChange = (event) => {
    const updatedCocktail = {
      ...cocktailInfo,
      [event.target.name]: event.target.value,
    };

    setCocktailInfo(updatedCocktail);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("cocktailInfo", cocktailInfo);
    setCocktailInfo({
      cocktailName: "",
      ingredient1: "",
      ingredient2: "",
      ingredient3: "",
      ingredient4: "",
      measurement1: "",
      measurement2: "",
      measurement3: "",
      measurement4: "",
      category: "",
      instructions: "",
      image: "",
      video: "",
      alcoholic: "",
    });
    const newData = [
      ...data,
      {
        id: cocktailInfo.id,
        cocktailName: cocktailInfo.cocktailName,
        ingredient1: cocktailInfo.ingredient1,
        ingredient2: cocktailInfo.ingredient2,
        ingredient3: cocktailInfo.ingredient3,
        ingredient4: cocktailInfo.ingredient4,
        measurement1: cocktailInfo.measurement1,
        measurement2: cocktailInfo.measurement2,
        measurement3: cocktailInfo.measurement3,
        measurement4: cocktailInfo.measurement4,
        category: cocktailInfo.category,
        instructions: cocktailInfo.instructions,
        image: cocktailInfo.image,
        video: cocktailInfo.video,
        alcoholic: cocktailInfo.alcoholic,
      },
    ];
    localStorage.setItem("myDrinks", JSON.stringify(newData));
    setData(newData);

    navigate("/myDrinks");
  };

  return (
    <div className="auth-form-container newCockt form-bg">
      <h2>Add new cocktail</h2>
      <Form className="register-form" onSubmit={handleSubmit}>
        <label>Name of your cocktail</label>
        <input
          value={cocktailInfo.name}
          type="text"
          name="cocktailName"
          onChange={handelChange}
        />
        <label>Ingredient 1</label>
        <input
          value={cocktailInfo.ingredient1}
          type="text"
          name="ingredient1"
          onChange={handelChange}
        />
        <label>Ingredient 2</label>
        <input
          value={cocktailInfo.ingredient2}
          name="ingredient2"
          type="text"
          onChange={handelChange}
        />
        <label>Ingredient 3</label>
        <input
          value={cocktailInfo.ingredient3}
          name="ingredient3"
          type="text"
          onChange={handelChange}
        />
        <label>Ingredient 4</label>
        <input
          value={cocktailInfo.ingredient4}
          name="ingredient4"
          type="text"
          onChange={handelChange}
        />
        <label>Measurement 1</label>
        <input
          value={cocktailInfo.measurement1}
          name="measurement1"
          type="text"
          // placeholder="Ingredients"
          onChange={handelChange}
        />
        <label>Measurement 2</label>
        <input
          value={cocktailInfo.measurement2}
          name="measurement2"
          type="text"
          onChange={handelChange}
        />
        <label>Measurement 3</label>
        <input
          value={cocktailInfo.measurement3}
          name="measurement3"
          type="text"
          onChange={handelChange}
        />
        <label>Measurement 4</label>
        <input
          value={cocktailInfo.measurement4}
          name="measurement4"
          type="text"
          onChange={handelChange}
        />

        <label>Is this an alcoholic drink ?</label>
        <Form.Select
          value={cocktailInfo.alcoholic}
          name="alcoholic"
          type="text"
          onChange={handelChange}
          className="options"
        >
          <option value=""> Chose an option</option>
          <option value="Alcoholic">Yes</option>
          <option value="Non-Alcoholic">No</option>
        </Form.Select>
        <label>Category</label>
        <Form.Select
          value={cocktailInfo.category}
          name="category"
          type="text"
          onChange={handelChange}
          className="options"
        >
          <option value=""> Chose category</option>
          <option value="Cocktail">Cocktail</option>
          <option value="Ordinary Drink">Ordinary Drink</option>
          <option value="Shot">Shot</option>
          <option value="Beer">Beer</option>
          <option value="Milk / Shake">Milk / Shake</option>
        </Form.Select>
        <label>Instructions</label>
        <input
          value={cocktailInfo.instructions}
          name="instructions"
          type="text"
          onChange={handelChange}
        />
        <label>Image link</label>
        <input
          value={cocktailInfo.image}
          name="image"
          type="text"
          onChange={handelChange}
        />
        <label>Video link</label>
        <input
          value={cocktailInfo.video}
          name="video"
          type="text"
          onChange={handelChange}
          className="videoFiled"
        />

        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}

export default NewCocktail;
