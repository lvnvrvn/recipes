import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState } from "react";

// import Icon from "@mui/material/Icon";

// import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
// import { TurnedInNotIcon } from '@mui/material';
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import TurnedInIcon from "@mui/icons-material/TurnedIn";

function Recipe({ recipe }) {
  const [isSaved, setIsSaved] = useState(recipe.isSaved);

  function saveRecipe(e) {
    e.preventDefault();
    setIsSaved(!isSaved);
    // recipe.saved = isSaved;
    console.log("isSaved", isSaved);
  }

  return (
    <Card sx={{ display: "flex", marginBottom: "50px", cursor: "pointer" }}>
      <CardMedia
        component="img"
        // sx={{ width: 151,  }}
        sx={{ width: "40%" }}
        image={recipe.url}
        alt={recipe.title}
      />
      <CardContent className="card__content">
        <Typography
          gutterBottom
          variant="h3"
          component="div"
          sx={{ fontSize: "2rem" }}
        >
          {recipe.title}
        </Typography>
        <Typography>{recipe.description}</Typography>
        <Typography
          className="card__ingredients"
          variant="body2"
          color="text.secondary"
        >
          ингридиенты: {recipe.ingredients.join(", ")}
        </Typography>
        {/* <div className="save__btn" title={isSaved ? 'Recipe is saved' : 'Recipe is not saved'}> */}
        <div className="save__btn" title={isSaved ? 'Рецепт сохранён' : 'Рецепт не сохранён'}>
          {/* <TurnedInNotIcon className={isSaved ? 'save__btn__unsaved save__btn__unsaved' : 'save__btn'} onClick={saveRecipe}>add_circle</TurnedInNotIcon>
        <TurnedInIcon className={isSaved ? 'save__btn__saved' : 'save__btn'} onClick={saveRecipe}>add_circle</TurnedInIcon> */}
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
        {/* <svg data-testid="TurnedInNot"></svg> */}
        <Typography
          sx={{ fontSize: "0.7rem" }}
          className={isSaved ? 'saving__note show' : 'saving__note remove'}
        >
          {isSaved ? 'Добавлено в закладки' : 'Удалено из закладок'}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Recipe;
