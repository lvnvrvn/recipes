import { RECIPES } from "./recipes";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useLocation } from "react-router-dom";
import { useState } from "react";

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

function RecipePage(props) {
  const location = useLocation();
  const id = location.state.id;

  const [isSaved, setIsSaved] = useState(RECIPES[id].isSaved);

  function ratingToStars(rating) {
    const ratingNums = rating.toString().split('.');
    const starTag = '<StarIcon></StarIcon>';
    const starHalfTag = '<StarHalfIcon />';
    const starsRating = document.createElement('div');
    const lastStar = ratingNums[1] ? starHalfTag : starTag;
    const stars =  new Array(+ratingNums[0]).fill(starTag).join('');
    // starsRating.textContent = stars;
    // starsRating.insertAdjacentHTML( 'beforeend', stars );

    console.log('получилось вот что', +ratingNums[1]);
    // return starsRating;
    // return starsRating;
  }

  const theme = useTheme();
  
  
    // const starTag = document.createElement('<StarIcon />');
    // const starHalfTag = document.createElement('<StarHalfIcon />');

    // const stars =  `${starTag.repeat(ratingNums[0]).split('')}${ratingNums[1] ? starHalfTag : starTag}`;

  return (
    // <div className="recipe__page">
    //   <h2>{props.itemtitle}</h2>
    //   <div className="recipe__page__info">
    //     <div className="recipe__page__timing recipe__page__info__item">
    //       <AccessAlarmsIcon className="recipe__page__info__icon" />
    //       {RECIPES[id].timing + " min"}
    //     </div>
    //     <div className="recipe__page__save recipe__page__info__item" onClick={() => {setIsSaved(!isSaved)}}>
    //       {isSaved ? <BookmarkIcon className="recipe__page__info__icon" /> : <BookmarkBorderIcon className="recipe__page__info__icon" />}
    //       {isSaved ? 'Удалить из закладок' : 'Добавить в закладки'}
    //     </div>
    //     <div className="recipe__page__rating recipe__page__info__item">
    //       { <StarIcon />
    //       /*<StarIcon />
    //       <StarIcon />
    //       <StarIcon />
    //       <StarHalfIcon /> */}
    //       {RECIPES[id].rating}
    //       {ratingToStars(RECIPES[id].rating)}
    //     </div>
    //   </div>
    //   <img className="recipe__page__img" src={RECIPES[id].url} alt="" />
    //   <div className="recipe__page__ingredients">
    //     Вам понадобится:
    //     {RECIPES[id].ingredients.join(", ")}
    //   </div>
    //   <div className="recipe__page__desc">{RECIPES[id].description}</div>
    // </div>
    <Card sx={{ display: 'flex', flexDirection: 'column', width: '70%', margin: '50px auto'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', alignItems: 'center',  width: '50%', margin: '30px auto'}}>
          {/* <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton> */}
          <div className="recipe__page__timing recipe__page__info__item">
           <AccessAlarmsIcon className="recipe__page__info__icon" />
           {RECIPES[id].timing + " min"}
         </div>
         <div className="recipe__page__save recipe__page__info__item" onClick={() => {setIsSaved(!isSaved)}}>
           {isSaved ? <BookmarkIcon className="recipe__page__info__icon" /> : <BookmarkBorderIcon className="recipe__page__info__icon" />}
           {isSaved ? 'Удалить из закладок' : 'Добавить в закладки'}
         </div>
         <div className="recipe__page__rating recipe__page__info__item">
          <StarIcon />
           {RECIPES[id].rating}
         </div>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: '50%', margin: '0 auto' }}
        image={RECIPES[id].url}
        alt="Live from space album cover"
      />
      <CardContent sx={{ width: '70%', margin: '20px auto', textAlign: 'justify' }}>
          <Typography component="div" variant="h4">
            {RECIPES[id].title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Вам понадобится: {RECIPES[id].ingredients.join(', ')}.
          </Typography>
          <Typography component="div" variant="h6">
            Краткое описание:
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {RECIPES[id].description}.
          </Typography>
          <Typography component="div" variant="h6">
            Рецепт:
          </Typography>
        </CardContent>
    </Card>
  );
}

export default RecipePage;