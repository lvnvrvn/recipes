import "./App.css";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="header__container">
          <Link
            to="/"
            style={{ textDecoration: "none", color: "#fff", fontSize: "18px" }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Главная
            </Typography>
          </Link>
          <Link
            to="/Saved"
            style={{ textDecoration: "none", color: "#fff", fontSize: "18px" }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Закладки
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
