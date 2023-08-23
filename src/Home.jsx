import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { MultiSelect } from "./MultiSelect";
import RecipesList from "./RecipesList.jsx";
import { useEffect, useState } from "react";
import { RECIPES } from "./recipes";

import Header from "./Header";

import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

import "./App.css";

import { Route, Routes, Link } from "react-router-dom";

import Saved from "./Saved";





// const options = [
//   { value: "potato", label: "Potato" },
//   { value: "cheese", label: "Cheese" },
//   { value: "lemon", label: "Lemon" },
//   { value: "tomato", label: "Tomato" },
//   { value: "mushrooms", label: "Mushrooms" },
//   { value: "spaghetti", label: "Spaghetti" },
//   { value: "bacon", label: "Bacon" },
//   { value: "olives", label: "Olives" },
//   { value: "репчатый лук", label: "Репчатый лук" },
//   { value: "куриная грудка", label: "Куриная грудка" },
//   { value: "сливки", label: "Сливки" },
//   { value: "сливочное масло", label: "Сливочное масло" }
// ];

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
  { value: "дрожжи", label: "Дрожжи" },
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
  { value: "базилик", label: "Базилик" },
  { value: "бальзамик", label: "Бальзамик" },
  { value: "томатная паста", label: "Томатная паста" },
  { value: "томатная черри", label: "Томаты черри" },
  { value: "лапша", label: "Лапша" },
  { value: "сельдерей", label: "Сельдерей" },
  { value: "морковь", label: "Морковь" },
  { value: "соевый соус", label: "Соевый соус" },
  { value: "креветки", label: "Креветки" },
  { value: "имбирь", label: "Имбирь" },
  { value: "мидии", label: "Мидии" },
  { value: "кальмары", label: "Кальмары" },
  { value: "лемонграсс", label: "Лемонграсс" },
  { value: "лайм", label: "Лайм" },
  { value: "перец чили", label: "Перец чили" },
  { value: "рис", label: "Рис" },
  { value: "авокадо", label: "Авокадо" },
  { value: "блю чиз", label: "Блю чиз" },
  { value: "салат романо", label: "Салат романо" }
];

function Home() {
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState(RECIPES);
  const [isAllIngredients, setIsAllIngredients] = useState(false);

  const label = { inputProps: { "aria-label": "Switch demo" } };

  useEffect(() => {
    if (ingredients.length) {
      // if (isAllIngredients) {
      //   const newRecipes = RECIPES.filter((recipe) => {
      //     const selectedIngredients = ingredients.map((item) => item.value);
      //     return selectedIngredients.every((ingredient) => recipe.ingredients.includes(ingredient))
      // });
      //   setRecipes(newRecipes);
      // } else {
      //   console.log("else");
      //   const selectedIngredients = ingredients.map((item) => item.value);
      //   const newRecipes = RECIPES.filter((recipe) => {
      //     return selectedIngredients.some((ingredient) => recipe.ingredients.includes(ingredient))
      //   });
      //   setRecipes(newRecipes);
      // }
      const selectedIngredients = ingredients.map((item) => item.value);
      const newRecipes = RECIPES.filter((recipe) => {
        if (isAllIngredients) {
          return selectedIngredients.every((ingredient) =>
            recipe.ingredients.includes(ingredient)
          );
        } else {
          return selectedIngredients.some((ingredient) =>
            recipe.ingredients.includes(ingredient)
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
      {/* <Header /> */}
      {/* <form className='search__form' action="/">
        <input className='search__input' type="text" placeholder='укажите ингридиенты' />
        <button className='search-btn'>Показать</button>
        <br />
        <input type="checkbox" />
      </form> */}

      <div className="recipe__filter">
        <Box
          className="search__form"
          component="form"
          noValidate
          autoComplete="off"
        >
          {/* <TextField fullWidth  className='search__input' id="outlined-basic" label="Outlined" variant="outlined" /> */}
          <MultiSelect
            onChange={(choice) => setIngredients(choice)}
            selectOptions={options}
            placeholder="Select Cities"
          />
          {/* <Button sx={{marginLeft: '15px'}} className='search-btn' variant="contained" onClick={sendIngredients}>Search</Button> */}
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
            control={
              <Switch
                className="switch__tubmlr"
                checked={isAllIngredients}
                onChange={handleSelectedOnlyChange}
                size="small"
              />
            }
            // label={<span style={{fontSize: "0.8rem"}}>Только рецепты со всеми выбранными ингридиентами</span>}
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
      <RecipesList recipes={recipes} />
      {/* <div className="back__to__top">&uarr;</div> */}
      <div className={arrowTopVisibility ? 'back__to__top show' : 'back__to__top'}>
        <div className="back__to__top__arrow"></div>
      </div>
      <div className={recipes.length ? "no__recipes" : "no__recipes active"}>
        Нет результатов
      </div>
      <Routes>
        <Route path="/Saved" element={<Saved />}></Route>
      </Routes>
    </>
  );
}





export default Home;
