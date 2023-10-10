import { RECIPES } from "./recipes";
import RecipesList from "./RecipesList";
import "./App.css";

function Saved() {
  const savedRecipes = RECIPES.filter((item) => item.isSaved);

  return (
    <div>
      <h2 className="saved__recipes__title">Сохраненные рецепты</h2>
      <RecipesList
        classNameProp={"recipe__list saved"}
        recipes={savedRecipes}
      />
    </div>
  );
}

export default Saved;
