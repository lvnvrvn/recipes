import Recipe from "./Recipe";
import { Link } from "react-router-dom";

import { useState } from "react";

function RecipesList(props) {
  const [arrowTopVisibility, setArrowTopVisibility] = useState(false);

  function showArrowTop(e) {
    if (e.target.closest(".recipe__list").scrollTop >= 400) {
      setArrowTopVisibility(true);
      console.log("show arrow");
    }
    // console.log(e.target.closest('.recipe__list').scrollTop)}
  }

  return (
    <div
      style={{ background: "red" }}
      onWheel={(e) => {
        showArrowTop(e);
      }}
      className={props.recipes.length ? "recipe__list" : "recipe__list hide"}
    >
      {props.recipes.map((item) => (
        <Link to="/RecipePage" state={{ id: item.id }}>
          <Recipe recipe={item} key={item.title} />
        </Link>
      ))}
      
      {/* )} */}
    </div> //заменить li на компоненты
  );
}

export default RecipesList;
