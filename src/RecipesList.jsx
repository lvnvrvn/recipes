import Recipe from "./Recipe";
import { Link } from "react-router-dom";
import { useState } from "react";
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollTop from "./ScrollTop";

function RecipesList(props) {
  const [arrowTopVisibility, setArrowTopVisibility] = useState(false);

  function showArrowTop(e) {
    if (e.target.closest(".recipe__list").scrollTop >= 400) {
      setArrowTopVisibility(true);
    } else {
      setArrowTopVisibility(false);
    }
  }

  function scrollToTop(e) {
    e.target.closest(".recipe__list").scrollTop = "0px";
  }

  // ScrollTop.propTypes = {
  //   children: PropTypes.element.isRequired,
  //   window: PropTypes.func,
  // };

  return (
    <div
      onWheel={(e) => {
        showArrowTop(e);
      }}
      className={props.recipes.length ? "recipe__list" : "recipe__list hide"}
    >
      {props.recipes.map((item) => (
        <Link to="/RecipePage" key={item.title} state={{ id: item.id }}>
          <Recipe recipe={item} key={item.title} />
        </Link>
      ))}

      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>

      {/* <div
        className={arrowTopVisibility ? "back__to__top show" : "back__to__top"}
        onClick={(e) => {
          scrollToTop(e);
          setArrowTopVisibility(false);
        }}
      >
        <div className="back__to__top__arrow"></div>
      </div> */}
    </div>
  );
}

export default RecipesList;
