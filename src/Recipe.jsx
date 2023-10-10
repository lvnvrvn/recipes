import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import TurnedInIcon from "@mui/icons-material/TurnedIn";

function Recipe({ recipe }) {
  const [isSaved, setIsSaved] = useState(recipe.isSaved);
  const [recipeTipVisibility, setRecipeTipVisibility] = useState(false);

  const [maxTextLength, setMaxTextLength] = useState(416);

  useEffect(() => {
    if (window.innerWidth < 1150) {
      setMaxTextLength(240);
    }
    if (window.innerWidth < 960) {
      setMaxTextLength(100);
    }
    if (window.innerWidth < 630) {
      setMaxTextLength(200);
    }
    if (window.innerWidth < 400) {
      setMaxTextLength(120);
    }
  }, []);

  function saveRecipe(e) {
    e.preventDefault();
    setIsSaved(!isSaved);
  }

  return (
    <Card
      className="recipe__card"
      sx={{
        display: "flex",
        marginBottom: "50px",
        cursor: "pointer",
        overflow: "visible",
      }}
    >
      <CardMedia
        className="recipe__card__media"
        component="img"
        sx={{
          width: window.innerWidth < 630 ? "100%" : "40%",
          margin: window.innerWidth <= 630 ? "10px auto 0" : "0",
          height: window.innerWidth < 630 ? "50%" : "100%",
        }}
        image={recipe.url}
        alt={recipe.title}
      />
      <CardContent className="card__content">
        <Typography
          gutterBottom
          variant="h3"
          component="div"
          sx={{
            fontSize:
              window.innerWidth > 960
                ? "2rem"
                : window.innerWidth > 630
                ? "1.7rem"
                : "1.5rem",
          }}
        >
          {recipe.title}
        </Typography>
        <Typography sx={{ fontSize: "0.8rem" }}>
          {recipe.description.length > maxTextLength
            ? recipe.description.slice(0, maxTextLength) + "..."
            : recipe.description}
        </Typography>
        <div
          className="save__btn"
          title={isSaved ? "Рецепт сохранён" : "Рецепт не сохранён"}
        >
          {isSaved ? (
            <TurnedInIcon
              className="save__btn__saved save__btn__element"
              onClick={saveRecipe}
            >
              add_circle
            </TurnedInIcon>
          ) : (
            <TurnedInNotIcon
              className="save__btn__unsaved save__btn__element"
              onClick={saveRecipe}
            >
              add_circle
            </TurnedInNotIcon>
          )}
        </div>
        <Typography>
          <div className={isSaved ? "saving__note show" : "saving__note"}>
            Добавлено в закладки
          </div>
          <div className={isSaved ? "saving__note" : "saving__note show"}>
            Удалено из закладок
          </div>
        </Typography>
      </CardContent>
      <Typography
        onClick={(e) => {
          e.preventDefault();
          setRecipeTipVisibility(!recipeTipVisibility);
        }}
        className="card__ingredients"
        variant="body2"
        color="text.secondary"
      >
        <div>{recipe.ingredients.length} ингридиентов</div>
        <div
          className={
            recipeTipVisibility
              ? "card__ingredients__more opened"
              : "card__ingredients__more"
          }
        ></div>
        <div
          className={
            recipeTipVisibility
              ? "card__ingredients__tip show"
              : "card__ingredients__tip"
          }
        >
          {recipe.ingredients.map((item) => (
            <div className="card__ingredients__tip__item" key={item}>
              <div>{item[0].slice(0, 1).toUpperCase() + item[0].slice(1)}</div>
              <div style={{ fontSize: "0.7rem" }}>{item[1]}</div>
            </div>
          ))}
        </div>
      </Typography>
    </Card>
  );
}

export default Recipe;
