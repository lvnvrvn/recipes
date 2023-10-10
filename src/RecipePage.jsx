import { RECIPES } from "./recipes";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import Button from '@mui/material/Button';
import RatingModal from "./RatingModal";

function RecipePage() {
  const location = useLocation();
  const id = location.state.id;

  const [isSaved, setIsSaved] = useState(RECIPES[id].isSaved);
  const [showRecipeTip, setShowRecipeTip] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  function numsToStars(rating) {
    const ratingNums = rating.toString().split(".");
    const container = [];
    let isHalfAdded = false;

    for (let i = 1; i <= 5; i++) {
      if (i <= ratingNums[0]) {
        container.push(<StarIcon key={i} />);
      } else if (ratingNums[1] === "5" && !isHalfAdded) {
        container.push(<StarHalfIcon key={i} />);
        isHalfAdded = true;
      } else {
        container.push(<StarBorderIcon key={i} />);
      }
    }

    return container;
  }

  function showRatingTip() {
    setShowRecipeTip(true);
    setTimeout(() => {
      setShowRecipeTip(false);
    }, 2000);
  }

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        width: window.innerWidth <= 800 ? "100%" : "70%",
        margin: window.innerWidth <= 800 ? "0" : "50px auto",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box className="recipe__top__info">
          <div className="recipe__page__timing recipe__page__info__item">
            <AccessAlarmsIcon className="recipe__page__info__icon" />
            {RECIPES[id].timing + " минут"}
          </div>
          <div
            className="recipe__page__save recipe__page__info__item"
            onClick={() => {
              setIsSaved(!isSaved);
            }}
          >
            {isSaved ? (
              <BookmarkIcon className="recipe__page__info__icon" />
            ) : (
              <BookmarkBorderIcon className="recipe__page__info__icon" />
            )}
            {isSaved ? "Удалить из закладок" : "Добавить в закладки"}
          </div>
          <div
            className={
              showRecipeTip
                ? "recipe__page__rating recipe__page__info__item rated"
                : "recipe__page__rating recipe__page__info__item"
            }
            // onClick={showRatingTip}
          >
            {/* {numsToStars(RECIPES[id].rating)} */}
            {<Button onClick={handleOpen}>{numsToStars(RECIPES[id].rating)}</Button>}
            <div
              className={
                showRecipeTip
                  ? "recipe__rating__tip show"
                  : "recipe__rating__tip"
              }
            >
              Спасибо за оценку
            </div>
          </div>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{
          width: window.innerWidth <= 730 ? "100%" : "60%",
          height: window.innerWidth <= 730 ? "400px" : "auto",
          margin: "0 auto",
        }}
        image={RECIPES[id].url}
        alt="Live from space album cover"
      />
      <CardContent
        sx={{
          width: window.innerWidth <= 730 ? "90%" : "60%",
          margin: "20px auto",
          textAlign: "justify",
        }}
      >
        <Typography
          sx={{ textAlign: "center", fontSize: "1.9rem", marginBottom: "2rem" }}
          component="div"
          variant="h4"
        >
          {RECIPES[id].title}
        </Typography>
        <Typography
          sx={{ fontSize: "0.9rem" }}
          variant="subtitle1"
          color="text.secondary"
          component="div"
        >
          {RECIPES[id].description}
        </Typography>
        <Typography
          sx={{ textAlign: "center", fontSize: "1.1rem", marginTop: "1.4rem" }}
          component="div"
          variant="h6"
        >
          Вам понадобится:
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "1.1rem",
            margin: "2rem auto",
            width:
              window.innerWidth >= 1440
                ? "50%"
                : window.innerWidth >= 330
                ? "90%"
                : "100%",
          }}
          component="div"
        >
          {RECIPES[id].ingredients.map((item, index) => (
            <div className="ingridient__item" key={index}>
              <div>{item[0].slice(0, 1).toUpperCase() + item[0].slice(1)}</div>
              <div style={{ fontSize: "0.7rem" }}>{item[1]}</div>
            </div>
          ))}
        </Typography>
        <Typography
          sx={{ textAlign: "center", fontSize: "1.1rem", marginTop: "1.4rem" }}
          component="div"
          variant="h6"
        >
          Инструкция приготовления:
        </Typography>
        <Typography component="div">
          {RECIPES[id].recipe.map((item, index) => (
            <div className="recipe__text" key={index}>
              <b style={{ marginRight: "1rem" }}>{index + 1}.</b>
              {item}
            </div>
          ))}
        </Typography>
        <Typography
          className="recipe__output"
          sx={{ textAlign: "center", fontSize: "1rem", margin: "1.4rem 0" }}
          component="div"
          variant="h6"
        >
          {RECIPES[id].output}{" "}
          <LocalDiningIcon sx={{ fontSize: "1.1rem", marginLeft: "0.5rem" }} />
        </Typography>
      </CardContent>

      <RatingModal />
    </Card>
  );
}

export default RecipePage;
