import React from "react";
import { useContext } from "react";
import { MyContext } from "../MyContext";
import {
  GridContainer,
  TopLeft,
  TopRight,
  BottomLeft,
  BottomRight,
} from "../ShowRecipe/ShowRecipeStyles";
import { useParams } from "react-router-dom";

function MyRecipe() {
  const { data } = useContext(MyContext);

  let params = useParams();
  let idDrink = params.id;

  return (
    <div>
      <div>
        {data.map((item) => {
          if (item.id == idDrink) {
            return (
              <div key={item.id}>
                <GridContainer>
                  <TopLeft>
                    <h1>{item.cocktailName}</h1>
                    <p>{item.category}</p>
                  </TopLeft>
                  <TopRight>
                    <img src={item.image} alt={item.cocktailName} />
                  </TopRight>

                  <BottomLeft>
                    <h3> Ingredients</h3>

                    <ul>
                      {item.ingredient1 && (
                        <>
                          <li>
                            {item.ingredient1} - {item.measurement1}
                          </li>
                        </>
                      )}
                      {item.ingredient2 && (
                        <>
                          <li>
                            {item.ingredient2} - {item.measurement2}
                          </li>
                        </>
                      )}
                      {item.ingredient3 && (
                        <>
                          <li>
                            {item.ingredient3} - {item.measurement3}
                          </li>
                        </>
                      )}
                      {item.ingredient4 && (
                        <>
                          <li>
                            {item.ingredient4} - {item.measurement4}
                          </li>
                        </>
                      )}
                    </ul>
                  </BottomLeft>
                  <BottomRight>
                    <h3>Instructions</h3>
                    <p>{item.instructions}</p>
                  </BottomRight>
                </GridContainer>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default MyRecipe;
