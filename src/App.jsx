import { useState } from 'react';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* <header className="header">
          <div className="header__logo"></div>
          <div className="header__saved"></div>
        </header> */}
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Logo
            </Typography>
            <Button color="inherit">Saved</Button>
          </Toolbar>
        </AppBar>
      </Box>
      {/* <form className='search__form' action="/">
        <input className='search__input' type="text" placeholder='укажите ингридиенты' />
        <button className='search-btn'>Показать</button>
        <br />
        <input type="checkbox" />
      </form> */}
      <Box className='search__form'
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField className='search__input' id="outlined-basic" label="Outlined" variant="outlined" />
        <Button className='search-btn' variant="contained">Contained</Button>
      </Box>
    </>
  )
}

export default App
