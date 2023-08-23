import { Route, Routes, Link } from "react-router-dom";

import Saved from "./Saved";
import Home from "./Home";
import Header from "./Header";
import RecipePage from "./RecipePage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Saved" element={<Saved />}></Route>
        <Route path="/RecipePage" element={<RecipePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;