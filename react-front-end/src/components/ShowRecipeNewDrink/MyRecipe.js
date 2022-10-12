import React from "react";
import { useContext } from "react";
import { MyContext } from "../MyContext";
import {
  GridContainer,
  TopLeft,
  TopRight,
  BottomLeft,
  BottomRight,
  Iframe,
  Video,
} from "../ShowRecipe/ShowRecipeStyles";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare, faHeart } from "@fortawesome/fontawesome-free-solid";
import toast, { Toaster } from "react-hot-toast";
import Tooltip from "@mui/material/Tooltip";

function MyRecipe() {
  const { data } = useContext(MyContext);

  let params = useParams();
  let idDrink = params.id;

  //// youtube video

  function getUrl(url) {
    let embeded = url.replace("/watch?v=", "/embed/");
    return embeded;
  }

  // copy url to clipboard after click the share button
  const CopyToClipboard = async () => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(window.location.href);
    } else {
      return Document.execCommand("copy", true, window.location.href);
    }
  };

  // show noticication after click on the share button
  const handleShare = () => {
    CopyToClipboard()
      .then((res) => toast.success("Successfully copied URL to clipboard!"))
      .catch((err) => toast.error("Faild to copy URL!"));
  };

  return (
    <div>
      <div>
        {data.map((item) => {
          if (item.id == idDrink) {
            return (
              <div key={item.id}>
                <GridContainer>
                  <TopLeft>
                    <div>
                      <h1>{item.cocktailName}</h1>
                      <p>{item.category}</p>
                      <Tooltip title="Add to favourite">
                        <FontAwesomeIcon
                          icon={faHeart}
                          size="2x"
                          className="fa-icon-heart"
                        />
                      </Tooltip>

                      <Tooltip title="Share URL">
                        <FontAwesomeIcon
                          icon={faShare}
                          size="2x"
                          className="fa-icon-share"
                          onClick={handleShare}
                        />
                      </Tooltip>
                    </div>
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
                  <Video>
                    {item.video && <Iframe src={getUrl(item.video)}></Iframe>}
                  </Video>
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
