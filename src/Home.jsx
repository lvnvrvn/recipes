import "./App.css";
import { RECIPES } from "./recipes";
import { useEffect, useState } from "react";
import { MultiSelect } from "./MultiSelect";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import RecipesList from "./RecipesList.jsx";
import FormControlLabel from "@mui/material/FormControlLabel";
import { StyledSwitch } from "./components/StyledSwitch";
import BasicModal from "./BasicModal";

const options = [
  { value: "картофель", label: "Картофель" },
  { value: "сыр", label: "Сыр" },
  { value: "томаты", label: "Томаты" },
  { value: "шампиньоны", label: "Шампиньоны" },
  { value: "спагетти", label: "Спагетти" },
  { value: "бекон", label: "Бекон" },
  { value: "маслины", label: "Маслины" },
  { value: "репчатый лук", label: "Репчатый лук" },
  { value: "куриная грудка", label: "Куриная грудка" },
  { value: "сливки", label: "Сливки" },
  { value: "сливочное масло", label: "Сливочное масло" },
  { value: "чеснок", label: "Чеснок" },
  { value: "болгарский перец", label: "Болгарский перец" },
  { value: "оливковое масло", label: "Оливковое масло" },
  { value: "чёрный молотый перец", label: "Чёрный молотый перец" },
  { value: "куриный бульон", label: "Куриный бульон" },
  { value: "белое сухое вино", label: "Белое сухое вино" },
  { value: "моцарелла", label: "Моцарелла" },
  { value: "пармезан", label: "Пармезан" },
  { value: "фета", label: "Фета" },
  { value: "мука", label: "Мука" },
  { value: "яйцо", label: "Яйцо" },
  { value: "молоко", label: "Молоко" },
  { value: "свежие дрожжи", label: "Свежие дрожжи" },
  { value: "оливки", label: "Оливки" },
  { value: "растительное масло", label: "Растительное масло" },
  { value: "фарш", label: "Фарш" },
  { value: "петрушка", label: "Петрушка" },
  { value: "сметана", label: "Сметана" },
  { value: "варённая колбаса", label: "Варённая колбаса" },
  { value: "редис", label: "Редис" },
  { value: "огурцы", label: "Огурцы" },
  { value: "укроп", label: "Укроп" },
  { value: "кефир", label: "Кефир" },
  { value: "говядина", label: "Говядина" },
  { value: "телятина", label: "Телятина" },
  { value: "свинина", label: "Свинина" },
  { value: "сало", label: "Сало" },
  { value: "базилик", label: "Базилик" },
  { value: "бальзамик", label: "Бальзамик" },
  { value: "томатная паста", label: "Томатная паста" },
  { value: "томаты черри", label: "Томаты черри" },
  { value: "лапша", label: "Лапша" },
  { value: "сельдерей", label: "Сельдерей" },
  { value: "морковь", label: "Морковь" },
  { value: "рисовое вино", label: "Рисовое вино" },
  { value: "соевый соус", label: "Соевый соус" },
  { value: "вустерширский соус", label: "Вустерширский соус" },
  { value: "мисо-паста", label: "Мисо-паста" },
  { value: "паста том ям", label: "Паста том ям" },
  { value: "ростки сои", label: "Ростки сои" },
  { value: "лапша рамен", label: "Лапша рамен" },
  { value: "свиная грудинка", label: "Свиная грудинка" },
  { value: "креветки", label: "Креветки" },
  { value: "имбирь", label: "Имбирь" },
  { value: "мидии", label: "Мидии" },
  { value: "кальмары", label: "Кальмары" },
  { value: "лемонграсс", label: "Лемонграсс" },
  { value: "лайм", label: "Лайм" },
  { value: "кинза", label: "Кинза" },
  { value: "молотый кумин", label: "Молотый кумин" },
  { value: "перец чили", label: "Перец чили" },
  { value: "рис", label: "Рис" },
  { value: "авокадо", label: "Авокадо" },
  { value: "солёные огурцы", label: "Солёные огурцы" },
  { value: "голубой сыр", label: "Голубой сыр" },
  { value: "салат романо", label: "Салат романо" },
  { value: "картофельный крахмал", label: "Картофельный крахмал" },
  { value: "дижонская горчица", label: "Дижонская горчица" },
  { value: "томатный сок", label: "Томатный сок" },
  { value: "лимонный сок", label: "Лимонный сок" },
  { value: "хлебный квас", label: "Хлебный квас" },
  { value: "грецкий орех", label: "Грецкий орех" },
  { value: "соль", label: "Соль" },
  { value: "сахар", label: "Сахар" },
  { value: "лисички", label: "Лисички" },
  { value: "белые грибы", label: "Белые грибы" },
  { value: "красный лук", label: "Красный лук" },
  { value: "сладкий перец", label: "Cладкий перец" },
  { value: "орегано", label: "Орегано" },
  { value: "лук-резанец", label: "Лук-резанец" },
  { value: "картофельное пюре", label: "Картофельное пюре" },
  { value: "белый винный уксус", label: "Белый винный уксус" },
  { value: "красный винный уксус", label: "Красный винный уксус" },
  { value: "майоран", label: "Майоран" },
  { value: "лемонграсс", label: "Лемонграсс" },
  { value: "зелёный лук", label: "Зелёный лук" },
  { value: "свежие дрожжи", label: "Свежие дрожжи" },
  { value: "сушёный корень сельдерея", label: "Сушёный корень сельдерея" },
  { value: "мука семола", label: "Мука семола" },
  { value: "кокосовое молоко", label: "Кокосовое молоко" },
  { value: "рыбный соус", label: "Рыбный соус" },
  { value: "корень галангала", label: "Корень галангала" },
  { value: "листья лайма", label: "Листья лайма" },
  { value: "сухой херес", label: "Сухой херес" },
  { value: "вода", label: "Вода" },
];

function Home() {
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState(RECIPES);
  const [isAllIngredients, setIsAllIngredients] = useState(false);

  useEffect(() => {
    if (ingredients.length) {
      const selectedIngredients = ingredients.map((item) => item.value);
      const newRecipes = RECIPES.filter((recipe) => {
        if (isAllIngredients) {
          return selectedIngredients.every((ingredient) =>
            recipe.ingredients.map((item) => item[0]).includes(ingredient)
          );
        } else {
          return selectedIngredients.some((ingredient) =>
            recipe.ingredients.map((item) => item[0]).includes(ingredient)
          );
        }
      });
      setRecipes(newRecipes);
    } else {
      setRecipes(RECIPES);
    }
  }, [ingredients, isAllIngredients]);

  function handleSelectedOnlyChange() {
    setIsAllIngredients(!isAllIngredients);
  }

  return (
    <>
      <div className="recipe__filter">
        <Box
          className="search__form"
          component="form"
          noValidate
          autoComplete="off"
        >
          <MultiSelect
            onChange={(choice) => setIngredients(choice)}
            selectOptions={options}
          />
        </Box>
        <div className="switch__container">
          <span
            className={
              isAllIngredients ? "switch__label" : "switch__label active"
            }
          >
            Рецепты с любыми из выбранных ингридиентов
          </span>
          <FormControlLabel
            sx={{ margin: window.innerWidth < 630 ? "0" : "0 16px 0 -11px" }}
            control={
              <StyledSwitch
                className="switch__tubmlr"
                checked={isAllIngredients}
                onChange={handleSelectedOnlyChange}
                size="small"
              />
            }
          />
          <span
            className={
              isAllIngredients ? "switch__label active" : "switch__label"
            }
          >
            Только рецепты со всеми выбранными ингридиентами
          </span>
        </div>
      </div>
      <Typography
        sx={{ textAlign: "center", fontSize: "1.1rem", marginBottom: "0.8rem" }}
        component="div"
        variant="h6"
      >
        {recipes === RECIPES
          ? "Все рецепты"
          : recipes.length
          ? "Результаты по вашему запросу"
          : ""}
      </Typography>
      <RecipesList recipes={recipes} />
      <div className={recipes.length ? "no__recipes" : "no__recipes active"}>
        Нет результатов
      </div>
      <BasicModal />
    </>
  );
}

export default Home;
